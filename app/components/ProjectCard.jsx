"use client"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const letterVariants = {
  hidden: { opacity: 0, x: -10,scale: 0 },
  visible: () => ({
    opacity: 1,
    x: 0,
    scale:1,
    transition:{
        duration:1
    }
  }),
};



const ProjectCard = ({project}) => {
  const router = useRouter()
    return (

   
        <motion.div initial="hidden" animate="visible" variants={letterVariants} className="w-full md:min-w-full h-[400px] bg-cover rounded-3xl bg-opacity-30 cursor-pointer" style={{
          backgroundImage: `url("${project?.img}")`,
          backgroundRepeat: "no-repeat"
      }}
      onClick={() => router.push(`/projects/${project.id}`)}
      >
       
           
        </motion.div> 
        
    )
}

export default ProjectCard