import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Hello() {
  const [apiMsg, setApiMsg] = useState("");

  const getHello = () => {
    axios.get('/api/hello')
      .then(({ data }) => setApiMsg(data))
  };

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello World!
      </motion.h1>
      {
        apiMsg && (
          <motion.p
            className="text-xl text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {apiMsg}
          </motion.p>
        )
      }
    </div>
  );
}

export default Hello;