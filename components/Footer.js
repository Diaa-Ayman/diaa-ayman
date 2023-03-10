import Link from "next/link";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
export default function Footer() {
  const router = useRouter();

  const iconsStyle = {
    width: "22px",
    height: "22px",
  };
  console.log(router.pathname);
  return (
    <motion.div className="fixed z-40 lg:bg-black lg:bg-opacity-90 left-0 bottom-0 w-[100%]  flex items-center justify-center lg:justify-between p-4 text-gray-300 text-md font-semibold">
      <div className="hidden lg:flex">
        <span className="text-yellow-500 text-sm font-semibold">
          This is Me, Diaa Ayman!
        </span>
      </div>
      <div className=" py-2 px-8 bg-black shadow-sm rounded-xl lg:mr-24  shadow-yellow-200 lg:shadow-none lg:border-none">
        <ul className="flex items-center  space-x-16 lg:space-x-12">
          {["resume", "hello", "work"].map((ele) => (
            <li
              key={ele}
              className={
                router.pathname == `/${ele}`
                  ? "active-link footer-link"
                  : "footer-link"
              }
            >
              <Link href={`/${ele}`}>{ele}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/diaa-ayman-727a3a220/"
          target="_blank"
        >
          <SiLinkedin className="w-5 h-5 text-[#0A66C2] bg-white" />
        </Link>
        <Link href="https://github.com/Diaa-Ayman" target="_blank">
          <SiGithub className="w-5 h-5 text-white" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <SiTwitter className="w-5 h-5 text-[#1D9BF0]" />
        </Link>
      </div>
    </motion.div>
  );
}
