import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
import { motion } from "motion/react";
import '../global.css';
import { IoIosCloudDownload } from "react-icons/io";
import Resume from "../assets/Resume.pdf";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  
  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleSkillsClick = () => {
    navigate("/skills");
  };

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <div className="flex space-x-12 mt-20">
        <Button text="ABOUT" onClick={handleAboutClick} />
        <Button2 text="SKILLS" onClick={handleSkillsClick} />
        <Button text="PROJECTS" onClick={handleProjectsClick} />
        <Button2 text="CONTACT" onClick={handleContactClick} />
      </div>

      <div className="relative mt-28">
        <p className="text-9xl bg-clip-text font-[Tektur] bg-gradient-to-r from-[#32acd8] via-[#8592d3] to-[#e69c52] text-transparent font-bold glitchy-text">
          TANISH
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-1 rounded-md bg-gradient-to-r mt-20 from-cyan-400 via-blue-400 to-orange-500"
      >
        <motion.div className="bg-black">
          <a href={Resume} download>
            <motion.button className="px-6 py-3 font-bold text-2xl relative overflow-hidden shadow-md text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400">
              Resume <IoIosCloudDownload className="inline-block ml-2 text-cyan-300" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Landing;
