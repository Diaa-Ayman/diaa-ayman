import AllWorks from "@/components/AllWorks";
import Layout from "@/components/Layout";
import PieceOfWork from "@/components/PieceOfWork";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Tutorials() {
  return (
    <Layout className="text-lg text-white">
      <Head>
        <title>Diaa Ayman - Work</title>
      </Head>
      <div className=" text-xl text-white flex flex-row justify-center flex-1 lg:justify-between px-4 lg:px-14">
        <motion.div
          initial={{ x: "-100vw" }}
          transition={{
            duration: 1,
            type: "tween",
            ease: "easeInOut",
          }}
          animate={{ x: 0 }}
          className="welcome hidden lg:block text-gray-100 mr-28 space-y-8 mt-8"
        >
          <h1 className="text-[45px] lg:text-[70px] font-bold  text-yellow-500 font-paci">
            WORK.
          </h1>
        </motion.div>{" "}
        <AllWorks className="" />
      </div>
    </Layout>
  );
}
