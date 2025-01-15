import Link from "next/link"

const Page = ({ params: { id } }) => {

    const projects = [
        {
            id: '1',
            img: '/misterButton/1.png',
            title: 'Mister Bouton E-commerce Website',
            description: 'Mister Bouton is a boutique automobile e-commerce platform designed to offer an immersive and seamless online shopping experience. The website is built using Next.js for the frontend, ensuring fast performance and dynamic content rendering, and Node.js, Express, and MongoDB for the backend, providing robust server-side functionality and data management.',
            link: 'https://www.misterbouton.com/',
            keyFeature: [
                ["Online Payments:", "Integration of secure online payment systems, ensuring a smooth and reliable checkout process."],
                ["Advanced Product Filtering:", "Users can filter products based on multiple criteria, enhancing product discoverability and user experience."],
                ["3D Product Display:", "Detailed 3D models of products are displayed, allowing users to view items from different angles."],
                ["Admin Dashboard::", "A feature-rich admin dashboard that includes full control over products, orders, promotions, and customer management, as well as statistics for business insights."],
            ],
            integrationHighlights: [
                ["Frontend & Backend Integration:", "Seamless communication between the frontend and backend using well-structured REST APIs, ensuring data consistency and smooth user interaction."],
                ["Local & Cloud Database Synchronization:", "Developed and implemented a custom solution to synchronize data between the client’s local database and a cloud-based MongoDB database, ensuring real-time updates and data integrity."]
            ]
        },
        {
            id: '2',
            img: '/hsa/1.png',
            title: 'Horizon Study Abroad',
            description: 'In this project, I converted a Figma design of over 16 pages into a fully responsive website using Next.js and Tailwind CSS. I utilized Strapi as a headless CMS for API creation and built an admin dashboard. I ensured smooth integration between the frontend and API, delivering a seamless user experience.',
            link: 'https://hsa-last.vercel.app/',
            frontend: ["Next.js", "React.js", "Tailwind CSS", "Strapi (Headless CMS)"],
            backend: ["Next.js", "React.js", "Tailwind CSS", "Strapi (Headless CMS)"],
            version: ["GitHub", "Vercel (for frontend deployment)", "Strapi Cloud (for backend deployment)"]
        },
        {
            id: '3',
            img: '/borderEdge/5.png',
            title: 'BorderEdge UI Design to Code Conversion',
            description: 'In this project, I was responsible for converting Figma designs into clean, responsive HTML, CSS, and JavaScript code to create a demo for the BorderEdge project. The company needed this demo to effectively present their ideas and showcase the potential of their services. This foundational work involved ensuring that the designs were accurately translated into a functional user interface, providing a solid prototype for future development and presentation across different frameworks and libraries as the company advances its services.',
            link: 'https://border-age.vercel.app',
        }
    ]
    const list = projects.filter(el => el.id == id)
    const project = list[0]
    console.log(project)

    return (
        <div className="w-full flex flex-col md:flex-row gap-x-8 gap-y-4 h-[100%] ">
            <div className="w-full md:min-w-[35%]  md:h-[100%] min-h-[400px] bg-cover rounded-3xl bg-opacity-30" style={{
                backgroundImage: `url("${project?.img}")`,
                backgroundRepeat: "no-repeat"
            }}>
                <div className="w-full h-full flex justify-center items-center">
                    <Link href={project?.link} target="_blank" className="text-base font-bold text-[#FFFFFF] bg-[#1F1F2D] px-2 py-2 rounded-[10px]">View Project </Link>
                </div>
            </div>

            <div className="flex flex-col gap-2 2xl:justify-around">
                <h2 className="text-[24px]  md:text-[30px] font-bold text-[#FFFFFF]">{project?.title}</h2>
                <p className="text-lg text-[#EFF1C5] font-normal">
                    {project?.description}
                </p>
                {/* View keyFeature */}
                {
                    project?.keyFeature ? <div>
                        <h3 className="mt-12 font-bold text-base text-[#FFFFFF]">Key Features :</h3>
                        <ul className="list-disc">
                            {project?.keyFeature?.map((el, index) => {
                                return (
                                    <li className="text-lg text-[#EFF1C5] font-normal"><span className="text-white font-bold">{el[0]}</span>{el[1]}</li>
                                )
                            })}
                        </ul>
                    </div> : null
                }
                {/* View Integration Highlights:*/}
                {
                    project?.integrationHighlights ? <div>
                        <h3 className="mt-12 font-bold text-base text-[#FFFFFF]">Integration Highlights :</h3>
                        <ul className="list-disc">
                            {project?.integrationHighlights?.map((el, index) => {
                                return (
                                    <li className="text-lg text-[#EFF1C5] font-normal"><span className="text-white font-bold">{el[0]}</span>{el[1]}</li>
                                )
                            })}
                        </ul>
                    </div> : null
                }


                {/* View project live button */}
                <div className="flex">
                    <Link href={project?.link} target="_blank" className="underline underline-offset-8 font-bold text-base text-[#FFFFFF]">View Project → </Link>
                </div>
                {/* display Tech Used */}
                <div>
                    {project?.frontend?.length > 0 || project?.backend?.length > 0 || project?.database?.length > 0 || project?.version?.length > 0 ? <h3 className="mt-12 font-bold text-base text-[#FFFFFF]">Tech Use :</h3> : null}
                    <div className="flex flex-col gap-8">
                        {
                            project?.frontend?.length > 0 ?
                                <div>
                                    <h3 className="font-bold text-base text-[#FFFFFF]">Frontend :</h3>
                                    <div className="flex gap-4 flex-wrap">
                                        {project?.frontend.map((el, index) => {
                                            return (
                                                <h2 className="text-xl text-[#EFF1C5] px-2 py-1 border-[#EFF1C5] border-[1px] rounded-[10px]" key={index}>{el}</h2>
                                            )
                                        })}
                                    </div></div> : null

                        }

                        {
                            project?.backend?.length > 0 ?
                                <div>
                                    <h3 className="font-bold text-base text-[#FFFFFF]">Backend :</h3>
                                    <div className="flex gap-4 flex-wrap">
                                        {project?.backend.map((el, index) => {
                                            return (
                                                <h2 className="text-xl text-[#EFF1C5] px-2 py-1 border-[#EFF1C5] border-[1px] rounded-[10px]" key={index}>{el}</h2>
                                            )
                                        })}
                                    </div></div> : null

                        }

                        {
                            project?.database?.length > 0 ?
                                <div>
                                    <h3 className="font-bold text-base text-[#FFFFFF]">Database :</h3>
                                    <div className="flex gap-4 flex-wrap">
                                        {project?.database.map((el, index) => {
                                            return (
                                                <h2 className="text-xl text-[#EFF1C5] px-2 py-1 border-[#EFF1C5] border-[1px] rounded-[10px]" key={index}>{el}</h2>
                                            )
                                        })}
                                    </div></div> : null

                        }


                        {
                            project?.version?.length > 0 ?
                                <div>
                                    <h3 className="font-bold text-base text-[#FFFFFF]">Version Control & Deployment :</h3>
                                    <div className="flex gap-4 flex-wrap">
                                        {project?.version.map((el, index) => {
                                            return (
                                                <h2 className="text-xl text-[#EFF1C5] px-2 py-1 border-[#EFF1C5] border-[1px] rounded-[10px]" key={index}>{el}</h2>
                                            )
                                        })}
                                    </div></div> : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page