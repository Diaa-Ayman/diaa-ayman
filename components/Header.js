import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.div
      // initial={{ y: -300 }}
      // animate={{ y: 0 }}
      // transition={{ type: "tween", duration: 0.6 }}
      className="flex items-center justify-between px-4 pt-10 pb-2 mb-6 bg-black bg-opacity-70  w-[100%] sticky z-20 top-0 left-0"
    >
      <span></span>
      <div className="text-black p-2 rounded-md flex items-center justify-center text-sm font-bold bg-white">
        <CodeBracketIcon className="w-9 h-9 text-gray-900" />
      </div>
      <div>
        <Bars3BottomLeftIcon className="w-8 h-8 text-gray-100" />
      </div>
    </motion.div>
  );
}
