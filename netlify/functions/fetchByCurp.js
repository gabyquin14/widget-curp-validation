export async function handler(event) {
  try {
    const { curp } = JSON.parse(event.body);

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
    body.append("curp", curp);

    const response = await fetch(process.env.SEARCH_BY_CURP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-API-Key": clientApiKey,
        Accept: "application/json",
      },
      body,
    });

    const data = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
