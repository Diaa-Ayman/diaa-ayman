import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Tutorials() {
  return (
    <Layout className="text-lg text-white">
      <Head>
        <title>Hello, friend!</title>
      </Head>
      <div className="text-xl text-white h-[70vh] mt-36 lg:mt-0 overflow-hidden">
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
            <h1 className=" text-[4em] md:text-[6rem] lg:text-[7rem] font-bold text-white font-paci">
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
              <h3 className="text-[.8rem] lg:text-[1.1rem]  text-white font-semibold ml-16 lg:ml-28 -mt-8 -mb-16 leading-4">
                I'm Diaa Ayman, A Software Engineer...
                <span
                  className="block text-[10px] font-normal
                 lg:text-base text-yellow-500 tracking-tighter italic"
                >
                  Frontend Development, Test Automation
                </span>
              </h3>
              {/* <motion.div className="mt-20 ml-16 lg:ml-28 w-[70%] lg:w-[45%]">
                <h5 className="text-xs leading-4">
                  I am passionate about bringing clients' visions to life.
                  Moreover, I have managed several projects for a diverse client
                  base.
                </h5>
              </motion.div> */}
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
