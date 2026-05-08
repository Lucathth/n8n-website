// n8n ruft diesen Endpunkt auf wenn ein Workflow abgeschlossen ist.
// URL-Format: POST /.netlify/functions/notify?type=create&token=NOTIFY_TOKEN
// (oder type=edit)

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors() };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors() };
  }

  const { type, token } = event.queryStringParameters || {};

  if (token !== process.env.NOTIFY_TOKEN) {
    return { statusCode: 401, headers: cors() };
  }

  if (!['create', 'edit'].includes(type)) {
    return { statusCode: 400, headers: cors() };
  }

  const store = getStore('workflow-status');
  await store.set(type, 'done');

  return { statusCode: 200, body: 'OK', headers: cors() };
};

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
