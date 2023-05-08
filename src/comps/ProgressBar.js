import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, description = "", setDescription }) => {
  const { progress, url } = useStorage(file, description);

  useEffect(() => {
    if (url) {
      setFile(null);
      setDescription("");
    }
  }, [url, setFile, setDescription]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
