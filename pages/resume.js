import Dot from "@/components/Dot";
import Layout from "@/components/Layout";
import ResumeItem from "@/components/resume/ResumeItem";
import Skill from "@/components/resume/Skill";
import {
  BookOpenIcon,
  DocumentIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { technologies } from "@/components/Technologies";
import Head from "next/head";
export default function Tutorials() {
  const courses = [
    {
      title: "Javascript Bootcamp",
      desc: "JavaScript Basics, Data Structures, OOP, DOM",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      desc: "HTML, CSS, Bootstrap, JavaScript, Reactjs, JQuery, NodeJs, Express, MongoDB, SQL",
    },
    {
      title: "React - The Complete Guide",
      desc: "incl Hooks, React Router, Redux, NextJs, Unit Testing",
    },
    {
      title: "Selenium WebDriver From Foundation to Framework [In Arabic]",
      desc: "Java, Selenium, Maven, Testng, POM, cucmber, Sauce Labs",
    },
  ];
  return (
    <Layout className="text-lg text-white">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          type: "tween",
          ease: "easeInOut",
        }}
        className=" text-white"
      >
        <Head>
          <title>Diaa Ayman - Resume</title>
        </Head>
        <header className="font-bold text-[2.5rem] w-fit pb-2 font-paci">
          Resume
          <div className="w-16 h-2 bg-yellow-500 rounded-xl mt-1"></div>
        </header>
        <div className="flex flex-col lg:flex-row justify-around">
          <article className=" m-2 p-4 space-y-20 mb-24 ">
            <section className="section-eduction">
              <header className="education-header flex space-x-2 mb-6 items-center">
                <div className="border-2 bg-white   shadow-orange-400 p-1 rounded-md">
                  {" "}
                  <BookOpenIcon className="w-6 h-6 font-bold text-yellow-500" />
                </div>
                <span className="font-bold text-xl">Education</span>
              </header>
              <ResumeItem
                title="Menoufia-University"
                date="may, 2022"
                desc="Student at Systems and Computers Engineering Department, Faculty of Electronic Engineering."
              />
            </section>
            <section className="section-eduction">
              <header className="education-header flex space-x-2 mb-6 items-center">
                <div className="border-2 bg-white   shadow-orange-400 p-1 rounded-md">
                  {" "}
                  <DocumentIcon className="w-6 h-6 font-bold text-yellow-500" />
                </div>
                <span className="font-bold text-xl">Courses</span>
              </header>
              <div className="space-y-4">
                {courses.map((course) => (
                  <ResumeItem
                    title={course.title}
                    desc={course.desc}
                    key={course.title}
                  />
                ))}
              </div>
            </section>
            <section className="langs">
              <header className="education-header flex space-x-2 mb-6 items-center">
                <div className="border-2 bg-white   shadow-orange-400 p-1 rounded-md">
                  {" "}
                  <LanguageIcon className="w-6 h-6 font-bold text-yellow-500" />
                </div>
                <span className="font-bold text-xl">Languages.</span>
              </header>
              <div className="type space-y-3">
                <ResumeItem title="Arabic  (Native)" />
                <ResumeItem title="English (Good)" />
              </div>
            </section>
          </article>
          <article className="skills text-center">
            <header className="education-header justify-center flex flex-col space-x-2 mb-12 items-center ">
              <span className="font-bold text-2xl font-paci">My Skills</span>
              <div className="w-20 h-1 bg-yellow-500 rounded-xl mt-4"></div>
            </header>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-11">
              {technologies.map((ele) => (
                <Skill Icon={ele.Icon} skill={ele.skill} key={ele.skill} />
              ))}
            </div>
          </article>
        </div>
      </motion.div>
    </Layout>
  );
}
