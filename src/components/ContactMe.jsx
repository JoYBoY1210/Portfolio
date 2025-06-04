import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <SiGithub />,
    link: "https://github.com/JoYBoY1210",
    color: "text-white",
  },
  {
    icon: <SiGmail />,
    link: "mailto:tanishmirajkar12@gmail.com",
    color: "text-red-500",
  },
  {
    icon: <SiInstagram />,
    link: "https://www.instagram.com/just_tanish12/",
    color: "text-pink-500",
  },
  {
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/tanish-mirajkar-b5a41b326/",
    color: "text-blue-500",
  },
];

function Contact() {
    const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-20 font-[Tektur]">
      <h1 className="text-6xl font-bold text-cyan-400 mb-16 underline underline-offset-8">
        Contact Me
      </h1>
      <div className="flex gap-12 flex-wrap justify-center">
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className={`${item.color} text-6xl transition-transform`}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNextClick}
        className="fixed bottom-6 flex items-center gap-x-1 right-6 bg-purple-600 text-white px-5 py-3 rounded-xl text-xl font-[Tektur] shadow-lg hover:bg-purple-700 transition-all duration-300"
      >
        Home <FaLongArrowAltRight />
      </motion.button>
    </div>
  );
}

export default Contact;
