import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const title = "Tyler Meyer".split(""); // includes the space

// Stagger incoming letters
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

// Diagonal slide + spring bounce
const letter: Variants = {
  hidden: { opacity: 0, x: -50, y: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 450, damping: 15, mass: 1 },
  },
};

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <motion.h1
        className="text-6xl font-extrabold text-white mb-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {title.map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.button
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/hello")}
      >
        Enter Portfolio →
      </motion.button>
    </div>
  );
}

export default Welcome;
