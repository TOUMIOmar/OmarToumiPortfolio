"use client"
import Image from "next/image"
import ProjectCard from "../components/ProjectCard"
import { useState } from "react"
const ProjectContainer = ({ projects }) => {
    const [index, setIndex] = useState([0, 1])

    const plus = () => {
        if (index[1] < projects.length - 1) {
            console.log("done");

            setIndex(index.map(el => el + 1))
        }
    }
    const minus = () => {
        if (index[0] > 0) {
            setIndex(index.map(el => el - 1))
        }
    }
    console.log(index);


    return (
        <>

        <div className="relative hidden md:flex flex-col md:flex-row justify-between  items-center gap-y-2 pt-4 md:pt-8">
            {
                index[0] > 0 ? <Image className="absolute left-0 z-10 hidden md:flex cursor-pointer" src={"/left-arrow.png"} width={50} height={50} onClick={minus} alt="flesh-right-icon" />
                    : null
            }
            <div className="md:ml-14 w-full md:w-1/4">
                <ProjectCard project={projects[index[0]]} />

            </div> 
            <div className="md:mr-14 w-full md:w-1/4">
                <ProjectCard project={projects[index[1]]} />
            </div>
            {
                index[1] < projects.length - 1 ? <Image className="absolute right-0 z-10 hidden md:flex cursor-pointer" src={"/right-arrow.png"} width={50} height={50} onClick={plus} alt="flesh-right-icon" />
                    : null
            }
        </div>

        <div className="flex flex-col justify-between items-center gap-y-2 pt-4 md:hidden">
            {
                projects?.map((el,i)=>{
                    return(
                            <ProjectCard project={projects[i]} key={i}/>
                    )
                })
            }
        </div>
        </>
    )
}
export default ProjectContainer
