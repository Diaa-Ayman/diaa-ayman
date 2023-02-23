import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function PieceOfWork({ imageURL, website, name }) {
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
    <Link ref={ref} href={""} className="  transition-all duration-500">
      <motion.div
        animate={animtion}
        className="lg:max-w-[350px] lg:max-h-[350px] relative"
      >
        <img
          loading="lazy"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp"
          className="rounded-xl lg:rounded-lg object-cover  hover:opacity-80  border-gray-100"
        />
        <span className=" text-sm absolute bottom-0 left-2">
          Name Of Project
        </span>
        <span class="text-gray-200 text-[50px] font-bold absolute bottom-3 right-2 ">
          5
        </span>
      </motion.div>
    </Link>
  );
}
