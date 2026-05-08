exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors() };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors() };
  }

  let type, message, token;
  try {
    ({ type, message, token } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, headers: cors() };
  }

  if (token !== process.env.API_TOKEN) {
    return { statusCode: 401, headers: cors() };
  }

  if (!['create', 'edit'].includes(type)) {
    return { statusCode: 400, headers: cors() };
  }

  const url = type === 'create' ? process.env.WEBHOOK_CREATE : process.env.WEBHOOK_EDIT;
  if (!url) {
    return { statusCode: 500, body: 'Webhook URL nicht konfiguriert', headers: cors() };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    return { statusCode: res.ok ? 200 : 502, headers: cors() };
  } catch {
    return { statusCode: 503, headers: cors() };
  }
};

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
