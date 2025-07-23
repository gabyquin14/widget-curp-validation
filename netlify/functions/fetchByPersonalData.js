export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    //In case the user wants to send their own api key
    const clientApiKey =
      event.queryStringParameters?.apikey || process.env.VITE_API_KEY;

    if (!clientApiKey) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          data: null,
          errors: { code: 401, detail: "Missing API key" },
        }),
      };
    }

    const body = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      body.append(key, value);
    }

    const response = await fetch(process.env.SEARCH_BY_PERSONAL_DATA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-API-Key": clientApiKey,
        Accept: "application/json",
      },
      body,
    });

    const result = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
