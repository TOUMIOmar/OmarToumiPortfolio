import ProjectContainer from "../components/ProjectContainer"



const Page = () => {

    const projects = [
        {
            id: '1',
            img: '/misterButton.png',
        },
        {
            id: '2',
            img: '/hsa.png',
        },
        {
            id: '3',
            img: '/borderEdge.png',
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