"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

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

const Page = () => {
    const [isSentence2Visible, setSentence2Visible] = useState(false);
    const [isSentence3Visible, setSentence3Visible] = useState(false);

    useEffect(() => {
        setTimeout(() => setSentence2Visible(true), 1200);
        setTimeout(() => setSentence3Visible(true), 2000);
    }, []);
    return (
        <div className="flex flex-col md:flex-row gap-4">

            <div className="flex flex-col w-full md:w-[60%] gap-1">
                <motion.h2 initial="hidden"
                    animate={"visible"}
                    variants={sentenceVariants} className="text-[36px] text-[#FFFFFF] text-center md:text-left md:text-[64px] font-bold">
                    {typeSentence("LET´S MAKE SOMETHING AMAZING!")}
                </motion.h2>
                <div className="flex gap-4 justify-center md:justify-normal">
                    {isSentence2Visible ? <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}>
                        <Link href="https://github.com/TOUMIOmar" target="_blank"><Image src="/github.png" width={100} height={100} className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" alt="github-logo" /></Link>
                    </motion.div> : null}
                    {isSentence3Visible ? <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}>
                        <Link href="https://www.linkedin.com/in/toumiomar/" target="_blank"><Image src="/linkedin.png" width={100} height={100} className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" alt="github-logo" /></Link>
                    </motion.div> : null}
                </div>
            </div>

            <div className="flex flex-col gap-y-2 w-full md:w-[40%] bg-[#353541] items-center rounded-[50px] py-5">
                <input type="text" placeholder="Name" className="w-[80%] h-12 bg-[#8d8d93] rounded-[112px] px-4 placeholder:text-[#FFFFFF]" />
                <input type="text" placeholder="Name" className="w-[80%] h-12 bg-[#8d8d93] rounded-[112px] px-4 placeholder:text-[#FFFFFF]" />
                <textarea placeholder="Message" className="w-[80%] h-52 bg-[#8d8d93] rounded-[20px] px-4 pt-4 placeholder:text-[#FFFFFF]" />
                <button className="text-[20px] text-[#20202D] bg-[#EFF1C5] px-16 py-1 rounded-[150px]">Submit</button>
            </div>
        </div>
        
    )
}
export default Page