import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { ModalContext } from "@/store/modal-ctx";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const ctx = useContext(ModalContext);
  useEffect(() => {
    router.push("/hello");
  }, []);

  const delayShowModal = () => {
    setTimeout(() => ctx.showModal(), 4000);
  };
  delayShowModal();
  return (
    <div>
      <Footer />
    </div>
  );
}
