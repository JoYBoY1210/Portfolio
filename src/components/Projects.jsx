import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <motion.div
      className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-20 font-[Tektur]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-6xl font-bold text-cyan-400 mb-16 underline underline-offset-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex gap-12 flex-wrap justify-center">
        <motion.a
          href="https://github.com/JoYBoY1210"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-6xl"
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SiGithub />
        </motion.a>

        <motion.a
          href="mailto:tanishmirajkar12@gmail.com"
          className="text-red-500 text-6xl"
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SiGmail />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/just_tanish12/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-6xl"
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SiInstagram />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tanish-mirajkar-b5a41b326/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-6xl"
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SiLinkedin />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Contact;
