import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Tutorials() {
  return (
    <Layout className="text-lg text-white">
      <Head>
        <title>Hello frined!</title>
      </Head>
      <div className="text-xl text-white mt-36 lg:mt-0">
        <div className="flex justify-center rounded-md  m-auto  w-fit">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
              type: "spring",
              stiffness: 70,
              ease: "easeInOut",
            }}
            className="welcome text-yellow-500 space-y-20 mt-12 z-40  lg:mt-28 lg:-mr-20"
          >
            <h1 className=" text-[4em] md:text-[6rem] lg:text-[8rem] font-bold text-white font-paci">
              Hello.
            </h1>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.5,
                type: "spring",
                ease: "easeInOut",
                stiffness: 30,
              }}
              className=""
            >
              <h3 className="text-[.7rem] lg:text-lg text-yellow-400 font-semibold ml-16 lg:ml-28 -mt-8">
                I'm Diaa Ayman, A Software Engineer...
              </h3>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: "-100vw", x: "100vw" }}
            animate={{ y: 0, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: "spring",
              ease: "easeInOut",
              stiffness: 70,
            }}
            className="image z-20"
          >
            <img
              src="/assets/hello.png"
              className="w-[300px] h-[270px] object-cover md:h-auto md:w-auto"
              alt="no no no"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
