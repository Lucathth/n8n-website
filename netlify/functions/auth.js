const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors() };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors() };
  }

  let password;
  try {
    ({ password } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, headers: cors() };
  }

  if (!password) {
    return { statusCode: 400, headers: cors() };
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');

  if (hash === process.env.PASSWORD_HASH) {
    return {
      statusCode: 200,
      headers: { ...cors(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: process.env.API_TOKEN }),
    };
  }

  return {
    statusCode: 401,
    headers: { ...cors(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: 'Ungültiges Passwort' }),
  };
};

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
