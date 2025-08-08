export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST')
      return { statusCode: 405, body: 'Method Not Allowed' };

    const { prompt } = JSON.parse(event.body || '{}');
    if (!prompt) return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt' }) };

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=' + process.env.GEMINI_API_KEY;

    const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }] };
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await resp.json();

    return {
      statusCode: resp.ok ? 200 : resp.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error', details: String(err) }) };
  }
}
