export async function handler(event) {
  try {
    const { curp } = JSON.parse(event.body);

    const body = new URLSearchParams();
    body.append("curp", curp);

    const response = await fetch(
      "https://identity.sandbox.prometeoapi.com/curp/query",
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
