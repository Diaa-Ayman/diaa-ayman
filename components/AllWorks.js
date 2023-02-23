import PieceOfWork from "./PieceOfWork";
import { motion } from "framer-motion";
function AllWorks(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 2, 2, 2, 2, , 2, 2];
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
      className={` ${props.className}  mb-8 overflow-y-scroll scrollbar-hide  grid gap-8 lg:gap-3 grid-cols-1 md:grid-cols-2`}
    >
      {arr.map((ele, index) => (
        <PieceOfWork key={index} />
      ))}
    </motion.div>
  );
}

export default AllWorks;
