export async function handler(event) {
  try {
    const data = JSON.parse(event.body);
    const body = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
      body.append(key, value);
    }

    const response = await fetch(
      "https://identity.sandbox.prometeoapi.com/curp/reverse-query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-API-Key": process.env.VITE_API_KEY,
          Accept: "application/json",
        },
        body,
      }
    );

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
