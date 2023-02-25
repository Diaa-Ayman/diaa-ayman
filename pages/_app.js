import ParticlesBg from "@/components/particles-bg/ParticlesBg";
import ModalProvider from "@/store/modal-ctx";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <ParticlesBg />
      <Component {...pageProps} />
    </ModalProvider>
  );
}
