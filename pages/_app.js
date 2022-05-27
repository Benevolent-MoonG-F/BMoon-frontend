import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import { MoralisProvider } from "react-moralis";
// import { MoralisDappProvider } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../state";
import dynamic from "next/dynamic";
import { InitializeMoralis } from "../utils/hooks/initialize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoralisDappProvider = dynamic(
  () => {
    return import("../providers/MoralisDappProvider/MoralisDappProvider").then(
      (mod) => mod.MoralisDappProvider
    );
  },
  { ssr: false }
);

const MoralisProvider = dynamic(() => {
  return import("react-moralis").then((mod) => mod.MoralisProvider);
});

export default function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APPID}
        serverUrl={process.env.NEXT_PUBLIC_SERVERURL}
      >
        <MoralisDappProvider>
          <Provider store={store}>
            <ToastContainer />
            <Component {...pageProps} />
          </Provider>
        </MoralisDappProvider>
      </MoralisProvider>
    </div>
  );
}
