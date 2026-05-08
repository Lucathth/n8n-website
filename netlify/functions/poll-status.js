// Die HTML-Seite fragt diesen Endpunkt alle 5 Sekunden ab.
// Gibt { done: true } zurück sobald n8n /.netlify/functions/notify aufgerufen hat.

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors() };
  }

  const { type, token } = event.queryStringParameters || {};

  if (token !== process.env.API_TOKEN) {
    return { statusCode: 401, headers: cors() };
  }

  if (!['create', 'edit'].includes(type)) {
    return { statusCode: 400, headers: cors() };
  }

  const store = getStore('workflow-status');
  const status = await store.get(type);
  const done = status === 'done';

  if (done) {
    await store.delete(type);
  }

  return {
    statusCode: 200,
    headers: { ...cors(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ done }),
  };
};

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
