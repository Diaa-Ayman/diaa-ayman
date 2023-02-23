import ParticlesBg from "@/components/particles-bg/ParticlesBg";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ParticlesBg />
      <Component {...pageProps} />
    </div>
  );
}
