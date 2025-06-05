import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
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

function Projects() {
  const headingRef = useRef(null);
  const WaddleRef = useRef(null);
  const GinxRef = useRef(null);
  const DoramiRef = useRef(null);
  const GoProxRef = useRef(null);
  const DexRef = useRef(null);
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/contact");
  };
  const handlePrevClick = () => {
    navigate("/skills");
  };

  const handleHomeClick=()=>{
    navigate("/");
  }

  const headingInView = useInView(headingRef, { once: true });
  const Waddle = useInView(WaddleRef, { once: true });
  const Ginx = useInView(GinxRef, { once: true });
  const Dorami = useInView(DoramiRef, { once: true });
  const GoProx = useInView(GoProxRef, { once: true });
  const Dex = useInView(DexRef, { once: true });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-black min-h-screen text-white font-[Tektur] px-28 py-20"
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
        animate={Waddle ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-6xl font-bold text-center text-cyan-400 underline underline-offset-8 mb-20"
      >
        Projects
      </motion.h1>

      <motion.h2
        ref={WaddleRef}
        initial="hidden"
        animate={Waddle ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-purple-500"
      >
        Waddle
      </motion.h2>
      <motion.div
        ref={WaddleRef}
        initial="hidden"
        animate={Waddle ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-purple-500 rounded-lg text-2xl p-8 flex flex-col items-center gap-6 flex-wrap mb-16"
      >
        <p>
          <span className="font-bold">Waddle</span> is a PDF notes summarizer
          web app that uses Facebook’s BART model to generate concise summaries
          from uploaded PDFs. It helps users quickly grasp key concepts by
          extracting important points from lengthy documents. Summaries are
          saved folder-wise as organized notes, making studying and retrieval
          seamless and efficient.
        </p>
        <motion.a
          href="https://github.com/JoYBoY1210/Waddle"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-white"
        >
          <SiGithub className="text-5xl" />
        </motion.a>
      </motion.div>

      <motion.h2
        ref={GinxRef}
        initial="hidden"
        animate={Ginx ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-cyan-500"
      >
        Ginx
      </motion.h2>
      <motion.div
        ref={GinxRef}
        initial="hidden"
        animate={Ginx ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-cyan-500 rounded-lg text-2xl p-8 flex flex-col items-center gap-6 flex-wrap mb-16"
      >
        <p>
          <span className="font-bold">Ginx</span> is a lightweight,
          Nginx-inspired web server built entirely in Go. It supports both
          static file hosting and reverse proxying, along with hot reload for a
          smooth development experience. Designed for simplicity and speed, Ginx
          offers a developer-friendly alternative for serving and routing web
          traffic efficiently.
        </p>
        <motion.a
          href="https://github.com/JoYBoY1210/Ginx"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-white"
        >
          <SiGithub className="text-5xl" />
        </motion.a>
      </motion.div>

      <motion.h2
        ref={DoramiRef}
        initial="hidden"
        animate={Dorami ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-orange-500"
      >
        Dorami
      </motion.h2>
      <motion.div
        ref={DoramiRef}
        initial="hidden"
        animate={Dorami ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-orange-500 rounded-lg text-2xl p-8 flex flex-col items-center gap-6 flex-wrap mb-16"
      >
        <p>
          <span className="font-bold">Dorami</span> is a feature-rich to-do web
          application that lets users manage their tasks date-wise. With an
          intuitive UI, calendar view, profile management, and session-based
          auth, it delivers a smooth experience for planning and productivity.
        </p>
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/JoYBoY1210/Dorami"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-white"
          >
            <SiGithub className="text-5xl" />
          </motion.a>
          <motion.a
            href="https://dorami.tanish.site/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-white"
          >
            <FiExternalLink className="text-5xl" />
          </motion.a>
        </div>
      </motion.div>

      <motion.h2
        ref={GoProxRef}
        initial="hidden"
        animate={GoProx ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-pink-500"
      >
        GoProx
      </motion.h2>
      <motion.div
        ref={GoProxRef}
        initial="hidden"
        animate={GoProx ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-pink-500 rounded-lg text-2xl p-8 flex flex-col items-center gap-6 flex-wrap mb-16"
      >
        <p>
          <span className="font-bold">GoProx</span> is a lightweight
          command-line utility built entirely in Go that helps you manage your
          system proxy settings on Windows with ease. It allows quick toggling
          and status checks of your proxy configuration — all from the terminal,
          with a fast, single-binary experience
        </p>
        <motion.a
          href="https://github.com/JoYBoY1210/GoProx"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-white"
        >
          <SiGithub className="text-5xl" />
        </motion.a>
      </motion.div>

      <motion.h2
        ref={DexRef}
        initial="hidden"
        animate={Dex ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-5xl mb-8 font-bold text-cyan-500"
      >
        Dex
      </motion.h2>
      <motion.div
        ref={DexRef}
        initial="hidden"
        animate={Dex ? "visible" : "hidden"}
        variants={itemVariants}
        className="border-2 border-cyan-500 rounded-lg text-2xl p-8 flex flex-col items-center gap-6 flex-wrap mb-16"
      >
        <p>
          Dex is a minimalist Chrome extension bookmark manager built with React
          and Golang. It lets you save and organize links into categories
          effortlessly, offering a clean, user-friendly interface for quick
          access and streamlined browsing.
        </p>
        <motion.a
          href="https://github.com/JoYBoY1210/Dex"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-white"
        >
          <SiGithub className="text-5xl" />
        </motion.a>
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

export default Projects;
