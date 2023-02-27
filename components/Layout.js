import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import AboutMe from "./AboutMe";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/store/modal-ctx";
export default function Layout(props) {
  const router = useRouter();

  const ctx = useContext(ModalContext);
  const linkRight = () => {
    if (router.pathname === "/resume") {
      router.push("/hello");
    } else if (router.pathname === "/hello") {
      router.push("/work");
    } else if (router.pathname === "/work") {
      router.push("/resume");
    }
  };
  const linkLeft = () => {
    if (router.pathname === "/work") {
      router.push("/hello");
    } else if (router.pathname === "/hello") {
      router.push("/resume");
    } else if (router.pathname === "/resume") {
      router.push("/work");
    }
  };

  return (
    <div className="flex flex-col relative">
      {ctx.toggleModal ? <AboutMe /> : null}
      <Header />
      <motion.div
        // initial={{ x: "-100vw" }}
        // animate={{ x: 0 }}
        // transition={{
        //   duration: 0.9,
        //   delay: 2,
        //   type: "tween",
        //   ease: "easeInOut",
        // }}
        className=" arrow-container -left-[200px] "
      >
        {/* <MdDoubleArrow className="w-10 h-10 text-yellow-400" /> */}
        <img
          className="opacity-90 hover:opacity-100 w-[50%]"
          src="/assets/arrow.png"
          onClick={linkLeft}
        />
      </motion.div>
      <motion.div
        // initial={{ x: "100vw" }}
        // animate={{ x: 0 }}
        // transition={{
        //   duration: 0.9,
        //   delay: 2,
        //   type: "tween",
        //   ease: "easeInOut",
        // }}
        className="arrow-container -right-[200px] "
      >
        <img
          className="opacity-90 hover:opacity-100 w-[50%]"
          src="/assets/arrow.png"
          onClick={linkRight}
        />
      </motion.div>

      <main className="flex-1 mb-20  mx-4 md:mx-24 lg:mx-36 z-10">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
