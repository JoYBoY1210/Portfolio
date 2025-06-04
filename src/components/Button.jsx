import React from 'react';
import { motion } from 'framer-motion';

function Button({ text,onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <motion.button
      whileHover={{ scale: 1.10}}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
      className="px-6 py-3 border-2 border-[#1edaee] font-bold text-2xl relative overflow-hidden shadow-md text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400"
    >
      {text}
    </motion.button>
    
  );
}

export default Button;
