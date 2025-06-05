import React, { useRef } from "react";
import {
  SiTailwindcss,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiFigma,
  SiCanva,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiGo,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function Skills() {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);
  const designRef = useRef(null);
  const langRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const frontendInView = useInView(frontendRef, { once: true });
  const backendInView = useInView(backendRef, { once: true });
  const toolsInView = useInView(toolsRef, { once: true });
  const designInView = useInView(designRef, { once: true });
  const langInView = useInView(langRef, { once: true });

  const handleNextClick = () => {
    navigate("/projects");
  };

  const handlePrevClick = () => {
    navigate("/about");
  };

  const handleHomeClick = () => {
    navigate("/");
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-black min-h-screen text-white font-[Tektur] px-28 py-20 relative"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleHomeClick}
        className="absolute top-6  flex items-center gap-x-1 right-6 bg-purple-600 text-white px-5 py-3 rounded-xl text-xl font-[Tektur] shadow-lg hover:bg-purple-700 transition-all duration-300"
      >
        Home <IoIosHome className="text-white" />
      </motion.button>
      <motion.h1
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-6xl font-bold text-center text-cyan-400 underline underline-offset-8 mb-20"
      >
        Technical Skills
      </motion.h1>

      <motion.h2
        ref={frontendRef}
        initial="hidden"
        animate={frontendInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-purple-500"
      >
        Frontend
      </motion.h2>
      <motion.div
        ref={frontendRef}
        initial="hidden"
        animate={frontendInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-purple-500 rounded-lg p-8 flex gap-10 flex-wrap mb-16"
      >
        <div className="flex flex-col items-center w-24">
          <SiTailwindcss className="text-6xl text-white" />
          <span className="mt-2 text-purple-300 text-lg">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiReact className="text-6xl text-white" />
          <span className="mt-2 text-purple-300 text-lg">React</span>
        </div>
      </motion.div>

      <motion.h2
        ref={backendRef}
        initial="hidden"
        animate={backendInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-cyan-400"
      >
        Backend
      </motion.h2>
      <motion.div
        ref={backendRef}
        initial="hidden"
        animate={backendInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-cyan-400 rounded-lg p-8 flex gap-10 flex-wrap mb-16"
      >
        <div className="flex flex-col items-center w-24">
          <SiDjango className="text-6xl text-white" />
          <span className="mt-2 text-cyan-300 text-lg">Django</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiSqlite className="text-6xl text-white" />
          <span className="mt-2 text-cyan-300 text-lg">SQLite</span>
        </div>
      </motion.div>

      <motion.h2
        ref={toolsRef}
        initial="hidden"
        animate={toolsInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-orange-400"
      >
        Tools
      </motion.h2>
      <motion.div
        ref={toolsRef}
        initial="hidden"
        animate={toolsInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-orange-400 rounded-lg p-8 flex gap-10 flex-wrap mb-16"
      >
        <div className="flex flex-col items-center w-24">
          <SiGit className="text-6xl text-white" />
          <span className="mt-2 text-orange-300 text-lg">Git</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiGithub className="text-6xl text-white" />
          <span className="mt-2 text-orange-300 text-lg">GitHub</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiPostman className="text-6xl text-white" />
          <span className="mt-2 text-orange-300 text-lg">Postman</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiLinux className="text-6xl text-white" />
          <span className="mt-2 text-orange-300 text-lg">Linux</span>
        </div>
      </motion.div>

      <motion.h2
        ref={designRef}
        initial="hidden"
        animate={designInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-pink-400"
      >
        Design Tools
      </motion.h2>
      <motion.div
        ref={designRef}
        initial="hidden"
        animate={designInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-pink-400 rounded-lg p-8 flex gap-10 flex-wrap mb-16"
      >
        <div className="flex flex-col items-center w-24">
          <SiFigma className="text-6xl text-white" />
          <span className="mt-2 text-pink-300 text-lg">Figma</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiCanva className="text-6xl text-white" />
          <span className="mt-2 text-pink-300 text-lg">Canva</span>
        </div>
      </motion.div>

      <motion.h2
        ref={langRef}
        initial="hidden"
        animate={langInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-cyan-300"
      >
        Languages
      </motion.h2>
      <motion.div
        ref={langRef}
        initial="hidden"
        animate={langInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-cyan-300 rounded-lg p-8 flex gap-10 flex-wrap"
      >
        <div className="flex flex-col items-center w-24">
          <SiPython className="text-6xl text-white" />
          <span className="mt-2 text-cyan-200 text-lg">Python</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiC className="text-6xl text-white" />
          <span className="mt-2 text-cyan-200 text-lg">C</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiCplusplus className="text-6xl text-white" />
          <span className="mt-2 text-cyan-200 text-lg">C++</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiJavascript className="text-6xl text-white" />
          <span className="mt-2 text-cyan-200 text-lg">JavaScript</span>
        </div>
        <div className="flex flex-col items-center w-24">
          <SiGo className="text-6xl text-white" />
          <span className="mt-2 text-cyan-200 text-lg">Golang</span>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrevClick}
        className="fixed flex items-center gap-x-1 bottom-6 left-6 bg-purple-600 text-white px-5 py-3 rounded-xl text-xl font-[Tektur] shadow-lg hover:bg-purple-700 transition-all duration-300"
      >
        <FaLongArrowAltLeft /> Back
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNextClick}
        className="fixed flex gap-x-1 items-center bottom-6 right-6 bg-purple-600 text-white px-5 py-3 rounded-xl text-xl font-[Tektur] shadow-lg hover:bg-purple-700 transition-all duration-300"
      >
        Next <FaLongArrowAltRight />
      </motion.button>
    </motion.div>
  );
}

export default Skills;
