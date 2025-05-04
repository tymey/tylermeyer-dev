import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{
          width: 200,
          height: 100,
          backgroundColor: '#33ff99',
          borderRadius: 5,
        }}
        onClick={() => { navigate('/hello') }}
      >
        Enter
      </motion.button>
    </div>

  );
}

export default Welcome;
