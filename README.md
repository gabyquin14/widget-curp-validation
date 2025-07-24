# CURP Lookup Widget

A lightweight, embeddable React widget built with Vite and TypeScript. It allows users to search for CURP data using the Prometeo API and is designed to be integrated seamlessly into any external webpage via an iframe.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for fast bundling
- **Netlify** for deployment
- **TailwindCSS** for styling and theming (light/dark)
- **ESLint** with type-aware linting
- **React Hook Form** and **Yup** for validation
- **Axios** for API communication

---

## Features

- **Embeddable via iframe**: Load the widget from any external domain.
- **API key via query string**: Provide the Prometeo API key as `?apikey=<your_key>` to authorize the request.
- **Error handling**: Validation and user-friendly error messages.
- **Dark/Light theme support**: Adapts to the host site theme or user preference.
- **Result callback**: The parent page can receive the CURP related data via `postMessage`.
- **Autocomplete with history**: Saves user queries locally and suggests them for future searches.

## 🚀 Deployment

The widget is deployed using **Netlify**, and can be embedded in any site with the following `<iframe>` snippet:

`<iframe  src="https://widget-curp-validation.netlify.app/?apikey=YOUR_KEY"  width="100%"  height="400px"  style="border: none;" ></iframe>`

To run the project locally for development, follow these steps:

```js
git clone https://github.com/your-username/widget-curp-validation.git
cd widget-curp-validation
npm install
netlify dev
```

When you run `netlify dev`, two things happen:

1.  **The Vite development server** starts, serving the React widget locally (usually at `http://localhost:5173`).
2.  **Netlify Functions** are automatically enabled, including the local proxy server used to call the Prometeo CURP API. This avoids CORS issues by making API requests from the server side instead of the browser.

> ⚠️ The widget is currently configured to use the Prometeo **sandbox** endpoint via this proxy. To use it in production, you must:
>
> - Replace the sandbox URL in `netlify/functions/proxy-server.js` with the production endpoint.
> - Provide your **production API key** via the `apikey` query param.

Example embed code for local use:

```js
<iframe
  src="http://localhost:8888/?apikey=your_prod_key"
  width="100%"
  height="100vh"
  style="border: none;"
></iframe>
```

Example embed code for production use:

```js
<iframe
  src="https://widget-curp-validation.netlify.app/?apikey=your_prod_key"
  width="100%"
  height="100vh"
  style="border: none;"
></iframe>
```

Make sure your Netlify environment is set up to handle serverless functions correctly (`netlify.toml` and directory structure should already be configured in this repo).

## Communication with Host Page

The widget sends the CURP result to the host page using the `window.postMessage` API. This allows the embedding site to receive the verified user data directly from the widget after a successful lookup.

### How to Listen for Messages

Add the following listener to your host page to receive data from the widget:

```js
window.addEventListener("message", (event) => {
	if (event.data?.type  ===  "curp_verified") {
  // Check that the message type is correct
	const  info  =  event.data.payload;
	console.log("CURP verificado desde el widget:", info);
}
```

### Message Format

The message sent by the widget looks like this:

```ts
{
  data: {
  document_data:{
    curp: string;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    fecha_nacimiento: string;
    sexo: string;
    entidad_nacimiento: string;
    // ...any other fields returned from the API
  },
   personal_data:{
    claveEntidad: string
    curp: string;
    docProbatorio: string;
    entidad: string;
    fecha_nacimiento: string;
    sexo: string;
    entidad_nacimiento: string;
    // ...any other fields returned from the API
  }
```
