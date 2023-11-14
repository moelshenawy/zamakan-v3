import { MapContextProvider } from "@/context/MapContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <MapContextProvider>
      <Component {...pageProps} />;
    </MapContextProvider>
  );
}
