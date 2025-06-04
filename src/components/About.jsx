import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import killua from "../assets/killua.jpg";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";



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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};



function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleNextClick = () => {
    navigate("/skills");
  };
const navigate = useNavigate();


  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-black min-h-screen text-purple-300 px-12 py-16"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-bold text-purple-500 underline underline-offset-8 mb-10 font-[Tektur] text-center"
      >
        About Me
      </motion.h1>

      <div className="flex flex-row gap-10">
        
        <div className="w-3/5 pr-6">
          <motion.p
            variants={itemVariants}
            className="text-3xl font-[Tektur] leading-relaxed mb-6"
          >
            Hey, I’m <span className="text-purple-400 font-bold">Tanish Mirajkar</span> — a B.Tech student at{" "}
            <span className="text-purple-400 font-semibold">IIIT Allahabad</span>, currently studying{" "}
            <span className="text-purple-400 font-semibold">Electronics and Communication Engineering</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-3xl font-[Tektur] leading-relaxed mb-6"
          >
            I’m a <span className="text-purple-300 font-bold">self-taught web developer</span> who just loves
            messing around with code and building{" "}
            <span className="text-purple-400 font-semibold">cool stuff for the web</span>. Whether it’s{" "}
            <span className="text-purple-400">designing slick interfaces</span> or{" "}
            <span className="text-purple-400">making things work behind the scenes</span>, I enjoy the whole
            process of <span className="font-semibold">creating projects from scratch</span> and{" "}
            <span className="font-semibold">learning as I go</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-3xl font-[Tektur] leading-relaxed"
          >
            When I’m not coding, you’ll probably find me{" "}
            <span className="italic text-purple-200">watching Haunted videos</span>,{" "}
            <span className="italic text-purple-200">playing first person shooters</span>, or just{" "}
            <span className="italic text-purple-200">chilling with some good music</span> (and maybe{" "}
            <span className="italic text-purple-200">taking a well-deserved nap</span>).
          </motion.p>
        </div>

        
        <motion.div
          variants={itemVariants}
          className="w-2/5 flex flex-col items-center "
        >
          <motion.img
            whileHover={{
              scale: 1.1,
              rotate: [0, 10, -10, 10, -10, 0],
            }}
            transitions={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            src={killua}
            alt="Killua"
            className="w-64 h-64 rounded-full border-4 border-purple-500 object-cover shadow-xl"
          />
          <p className="font-[Tektur] mt-5 text-xl font-semibold">
            Not me Btw
          </p>
          
        </motion.div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNextClick}
        className="fixed bottom-6 flex items-center gap-x-1 right-6 bg-purple-600 text-white px-5 py-3 rounded-xl text-xl font-[Tektur] shadow-lg hover:bg-purple-700 transition-all duration-300"
      >
        Next <FaLongArrowAltRight />


      </motion.button>
      </div>
    </motion.div>
  );
}

export default About;
