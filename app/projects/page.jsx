import ProjectContainer from "../components/ProjectContainer"



const Page = () => {

    const projects = [
        {
            id: '1',
            img: '/misterButton/1.png',
        },
        {
            id: '2',
            img: '/hsa/1.png',
        },
        {
            id: '3',
            img: '/borderEdge/5.png',
        }
    ]

    return (

        <div className="">
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#FFFFFF] text-center">Projects Showcase</h2>
            <ProjectContainer projects={projects} />
        </div>
        
    )
}

export default Page