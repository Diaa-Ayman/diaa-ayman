import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img from "../public/assets/facebook-clone.png";
import Image from "next/image";
export default function PieceOfWork({ number, name }) {
  const { ref, inView } = useInView();
  const animtion = useAnimation();

  useEffect(() => {
    if (inView) {
      animtion.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, type: "spring" },
      });
    }
    if (!inView) {
      animtion.start({
        opacity: 0,
        scale: 0,
      });
    }
  }, [inView]);

  return (
    <Link
      ref={ref}
      href={""}
      className="flex items-center transition-all duration-500 group border border-gray-900 rounded"
    >
      {number % 2 ? (
        <div className="bg-gray-900 opacity-60 text-[3.2rem] text-white w-[300px] h-full relative">
          <span className="absolute bottom-4 left-2">{number}</span>
          <span className="text-white font-semibold text-sm absolute bottom-0 right-2">
            {name}
          </span>
        </div>
      ) : null}{" "}
      <motion.div
        animate={animtion}
        className="max-w-[350px] max-h-[200px] overflow-hidden"
      >
        {/* <img
          loading="lazy"
          src={img}
          className=" object-contain h-full   hover:opacity-80  border-gray-100"
        /> */}
        <img
          src={`/assets/projects/app-${number}.png`}
          alt="appImg"
          className="group-hover:scale-105 transition-transform duration-200 ease-in-out opacity-95 group-hover:opacity-100"
        />
      </motion.div>
      {!(number % 2) ? (
        <div className="bg-gray-900 opacity-60 text-[3.2rem] text-white w-[300px] h-full relative">
          <span className="absolute bottom-4 left-2">{number}</span>
          <span className="text-white font-semibold text-sm absolute bottom-0 right-2">
            {name}
          </span>
        </div>
      ) : null}{" "}
    </Link>
  );
}
