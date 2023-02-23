import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
export default function Layout(props) {
  return (
    <div className="flex flex-col relative">
      <Header />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.9,
          delay: 2,
          type: "tween",
          ease: "easeInOut",
        }}
        className=" arrow-container -left-[200px] "
      >
        {/* <MdDoubleArrow className="w-10 h-10 text-yellow-400" /> */}
        <img
          className="opacity-90 hover:opacity-100 w-[60%]"
          src="/assets/arrow.png"
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.9,
          delay: 2,
          type: "tween",
          ease: "easeInOut",
        }}
        className="arrow-container -right-[200px] "
      >
        {/* <MdDoubleArrow className="w-10 h-10 text-yellow-400" /> */}
        <img
          className="opacity-90 hover:opacity-100 w-[60%]"
          src="/assets/arrow.png"
        />
      </motion.div>

      <main className="flex-1 mb-20 mx-4 md:mx-24 lg:mx-36 z-10">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
