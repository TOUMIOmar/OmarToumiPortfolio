"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,  // Delay for each letter
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.05,
    },
  }),
};

const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const typeSentence = (sentence) => {
  return sentence.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      {char}
    </motion.span>
  ));
};

export default function Home() {
  const [isSentence2Visible, setSentence2Visible] = useState(false);
  const [isSentence3Visible, setSentence3Visible] = useState(false);

  useEffect(() => {
    setTimeout(() => setSentence2Visible(true), 1000); 
    setTimeout(() => setSentence3Visible(true), 2000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md:items-stretch md:w-3/5 h-[40vh] pt-[15vh] md:pt-[5vh] mx-auto gap-8">

      <motion.div
        className="text-[36px] md:text-[48px] font-normal text-[#FFFFFF]"
        initial="hidden"
        animate={"visible"}
        variants={sentenceVariants}
      >
        {typeSentence("Hi, I am")}
      </motion.div>
      {isSentence2Visible ? <motion.div
        className="text-[48px] md:text-[64px] text-[#FFFFFF] font-bold flex md:justify-end"
        initial="hidden"
        animate={"visible"}
        variants={sentenceVariants}
      >
        {typeSentence("Omar Toumi")}
      </motion.div> : null}
      {isSentence3Visible ? <motion.div
        className="text-[16px] md:text-[24px] font-normal text-[#EFF1C5]"
        initial="hidden"
        animate={"visible"}
        variants={sentenceVariants}
      >
        {typeSentence("WEB DEVELOPER")}
      </motion.div> : null}

    </div>
  );
}
