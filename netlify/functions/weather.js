export async function handler(event) {
    try {
        const params =
            event.httpMethod === 'GET'
                ? Object.fromEntries(new URLSearchParams(event.queryStringParameters || {}))
                : JSON.parse(event.body || '{}');

        const q = params.q; // למשל: "Brasov, Romania"
        const lang = params.lang || 'he';
        if (!q) return { statusCode: 400, body: JSON.stringify({ error: 'Missing q' }) };

        const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${encodeURIComponent(q)}&lang=${lang}`;
        const resp = await fetch(url);
        const data = await resp.json();

        return {
            statusCode: resp.ok ? 200 : resp.status,
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 's-maxage=600' },
            body: JSON.stringify(data),
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Server error', details: String(err) }) };
    }
}
