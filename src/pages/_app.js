// src/pages/_app.js
import '../styles/global.css'; // Importe seu CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
