import PieceOfWork from "./PieceOfWork";
import { motion } from "framer-motion";
function AllWorks(props) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const works = [
    {
      name: "Amazon-Clone",
    },
    {
      name: "Chat App",
    },
    {
      name: "D-Shop",
    },
    {
      name: "Medium-clone",
    },
    {
      name: "Food-App",
    },
    {
      name: "Facebook-clone",
    },
    {
      name: "Instagram-clone",
    },
    {
      name: "twitter-clone",
    },
    {
      name: "Whatsapp-2-clone",
    },
    {
      name: "Shop",
    },
    {
      name: "TenDog",
    },
  ];

  return (
    <motion.div
      // initial={{ x: "100vw" }}
      // animate={{ x: 0 }}
      // transition={{
      //   delay: 0.8,
      //   duration: 1,
      //   type: "spring",
      //   bounce: 0.3,
      // }}
      className={` ${props.className}  mb-8 overflow-y-scroll scrollbar-hide h-screen  grid gap-8 lg:gap-3 grid-cols-1`}
    >
      {works.map((work, index) => (
        <PieceOfWork key={index} number={index + 1} name={work.name} />
      ))}
    </motion.div>
  );
}

export default AllWorks;
