import AllWorks from "@/components/AllWorks";
import Layout from "@/components/Layout";
import PieceOfWork from "@/components/PieceOfWork";
import { motion } from "framer-motion";
export default function Tutorials() {
  return (
    <Layout className="text-lg text-white">
      <div className=" text-xl text-white flex flex-row justify-center flex-1 lg:justify-between px-4 lg:px-14">
        <motion.div
          initial={{ color: "yellow" }}
          transition={{
            duration: 1,
            type: "tween",
            ease: "easeInOut",
          }}
          animate={{ color: "white" }}
          className="welcome hidden lg:block text-gray-100 mr-16 space-y-8 mt-12"
        >
          <h1 className="text-[70px] font-semibold text-white font-paci">
            WORK.
          </h1>
        </motion.div>{" "}
        <AllWorks className="" />
      </div>
    </Layout>
  );
}
