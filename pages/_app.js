import Header from "../components/Layout/Header";
import "../styles/globals.css";
import { LoadingProvider } from "../utils/context";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <div>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </LoadingProvider>
  );
}

export default MyApp;
