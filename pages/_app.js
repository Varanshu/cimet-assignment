import Header from "../components/Layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
