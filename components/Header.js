import { ModalContext } from "@/store/modal-ctx";
import {
  Bars3BottomLeftIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Header() {
  const ctx = useContext(ModalContext);

  const showAboutModal = () => {
    ctx.showModal();
  };

  console.log(ctx.toggleModal);

  return (
    <motion.div
      // initial={{ y: -300 }}
      // animate={{ y: 0 }}
      // transition={{ type: "tween", duration: 0.6 }}
      className="flex z-40 items-center justify-between px-4 pt-10 pb-2 mb-6 bg-black bg-opacity-70  w-[100%] sticky top-0 left-0"
    >
      <span></span>
      <div className="text-black p-2 rounded-md flex items-center justify-center text-sm font-bold bg-white">
        <CodeBracketIcon className="w-7 h-7 text-black" />
      </div>
      <button className="text-white" onClick={showAboutModal}>
        <Bars3BottomLeftIcon className="w-7 h-7 text-white hover:text-yellow-500" />
      </button>
    </motion.div>
  );
}
