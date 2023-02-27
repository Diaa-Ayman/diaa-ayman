import PieceOfWork from "./PieceOfWork";
import { motion } from "framer-motion";
// https://github.com/Diaa-Ayman
//https://www.linkedin.com/in/diaa-ayman-727a3a220/
function AllWorks(props) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const works = [
    {
      name: "Amazon-Clone",
      demo: "https://d-amazon-i51wr0y06-diaa-ayman.vercel.app/",
    },
    {
      name: "Chat App",
      demo: "https://chat-app-xi-pink.vercel.app/",
    },
    {
      name: "D-Shop",
      demo: "https://mobbile-store-deploy.web.app/",
    },
    {
      name: "Medium-clone",
      demo: "https://medium-weld.vercel.app/",
    },
    {
      name: "Food-App",
      demo: "https://github.com/Diaa-Ayman/food-app",
    },
    {
      name: "Facebook-clone",
      demo: "https://d-facebook.vercel.app/",
    },
    {
      name: "Instagram-clone",
      demo: "https://insgram-clone.vercel.app/",
    },
    {
      name: "twitter-clone",
      demo: "https://dtwitter-chi.vercel.app/twitter",
    },
    {
      name: "Whatsapp-2-clone",
      demo: "https://whatsapp-v2-lyart.vercel.app/",
    },
    {
      name: "Shop",
      demo: "https://github.com/Diaa-Ayman/shop",
    },
    {
      name: "TenDog",
      demo: "",
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
      className={` ${props.className}  mb-8 overflow-y-scroll scrollbar-hide  grid gap-8 lg:gap-3 grid-cols-1`}
    >
      {works.map((work, index) => (
        <PieceOfWork
          key={index}
          number={index + 1}
          name={work.name}
          demo={work.demo}
        />
      ))}
    </motion.div>
  );
}

export default AllWorks;
