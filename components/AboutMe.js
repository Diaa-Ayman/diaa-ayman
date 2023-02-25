import React, { useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";
import Contact from "./Contact";
import { ModalContext } from "@/store/modal-ctx";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
export default function () {
  const contacts = [
    {
      title: "Email",
      desc: "abugamel2022@gmail.com",
      Icon: HiOutlineMail,
    },
    {
      title: "Phone",
      desc: "+20 1226388499",
      Icon: AiTwotonePhone,
    },
    {
      title: "Location",
      desc: "Cairo, Egypt",
      Icon: GoLocation,
    },
  ];

  const ctx = useContext(ModalContext);
  const hideModal = () => {
    ctx.hideModal();
  };
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={() => ctx.hideModal()}
        className="fixed inset-0 bg-gray-700 bg-opacity-40 transition-opacity"
      ></div>

      <motion.div
        initial={{ y: "-100vw", opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
        }}
        className="fixed  w-screen z-10 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl my-4 w-full max-w-lg">
            <div className="">
              <div className="flex flex-col sm:items-start">
                {/* HERE TO BUT OUR CODE... */}
                <div className="me flex space-x-4 p-4 text-white">
                  <img
                    src="/assets/me.png"
                    className="w-28 h-28 object-cover rounded-lg"
                    alt="my image"
                  />
                  <div className="flex flex-col space-y-3 font-semibold text-white">
                    <span className="text-3xl font-bold">Diaa Ayman</span>
                    <span className="bg-gray-800 py-2 text-center rounded-xl  text-yellow-400">
                      Software Engineer.
                    </span>
                  </div>
                </div>
                <div className="h-[1px] bg-gray-700 w-full mx-4"></div>
                <div className="contactMe space-y-6 mt-3 p-4 w-full">
                  {contacts.map((contact) => (
                    <Contact
                      key={contact.title}
                      title={contact.title}
                      desc={contact.desc}
                      Icon={contact.Icon}
                    />
                  ))}
                </div>
                <div></div>
              </div>
            </div>
            <div className="bg-black px-4 py-3 flex justify-between sm:flex-row-reverse sm:px-6 items-center">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={hideModal}
              >
                Close
              </button>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="bg-white rounded-full w-6 h-6 grid place-items-center p-1"
                >
                  <SiTwitter className="w-4 h-4 text-yellow-500 hover:text-[#1D9BF0]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/diaa-ayman-727a3a220/"
                  target="_blank"
                  className="bg-white rounded-full w-6 h-6 grid place-items-center p-1"
                >
                  <SiLinkedin className="w-4 h-4 text-yellow-500 hover:text-[#0A66C2]" />
                </Link>
                <Link
                  href="https://github.com/Diaa-Ayman"
                  target="_blank"
                  className="bg-white rounded-full w-6 h-6 grid place-items-center p-1 hover:text-white"
                >
                  <SiGithub className="w-4 h-4 text-yellow-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
