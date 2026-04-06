import Link from "next/link"

const Page = ({ params: { id } }) => {

    const projects = [
        {
            id: '4',
            img: '/ios4move.webp',
            title: 'iOS4Move – Car Booking Platform',
            description: 'iOS4Move is a car reservation platform based in Paris, built with Next.js for the frontend and NestJS for the backend. The platform offers an intuitive booking experience with real-time route planning, multi-stop support, and full admin zone management. Deployed entirely on a VPS.',
            link: 'https://www.ios4move.com/',
            keyFeature: [
                ["Client Dashboard:", "A dedicated client dashboard featuring Google Maps API integration for route visualization, multi-stop trips, distance calculation, and trip duration estimation."],
                ["Admin Zone Management:", "Admins can define and manage service zones, giving full control over the platform's operational coverage."],
                ["Full VPS Deployment:", "Complete deployment of both frontend and backend on a VPS, ensuring performance and reliability."],
            ],
            integrationHighlights: [
                ["Google Maps API Integration:", "Deep integration with Google Maps API to handle real-time trip routing, multi-stop logic, and distance/duration computation."],
                ["Next.js & NestJS Architecture:", "Clean separation between a Next.js frontend and a NestJS REST API backend, ensuring scalability and maintainability."],
            ]
        },
        {
            id: '5',
            img: '/shippydelivery.webp',
            title: 'ShippyDelivery – Delivery Platform',
            description: 'ShippyDelivery is a full delivery platform for the Tunisian market, built with a Laravel REST API backend and a React Native PWA frontend. The platform was deployed on a Google Cloud VM, and the PWA was converted into a native Android App Bundle (AAB/APK) using Bubblewrap and published on the Google Play Store.',
            link: 'https://www.shippydelivery.tn/',
            keyFeature: [
                ["PWA to Android Conversion:", "The React Native PWA was converted into a native Android App Bundle (AAB/APK) using Bubblewrap and successfully published on the Google Play Store."],
                ["Laravel REST API:", "A robust Laravel backend powering all delivery operations, from order management to driver coordination."],
                ["Google Cloud Deployment:", "The entire platform is deployed on a Google Cloud virtual machine, ensuring scalability and uptime."],
            ],
            integrationHighlights: [
                ["PWA & Native Bridge:", "Leveraged Bubblewrap to bridge the gap between the React Native PWA and a fully native Android experience without a full rewrite."],
                ["Cloud Infrastructure:", "Deployed on Google Cloud VM with a production-ready environment handling real delivery operations."],
            ]
        },
        {
            id: '1',
            img: '/misterbutton.webp',
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
            id: '6',
            img: '/mbcrenov.png',
            title: 'MBC Renov – Construction & Renovation Website',
            description: 'MBC Renov is a professional website for a construction and renovation company, built with Next.js and NestJS. I was responsible for converting the Figma design into a fully responsive, pixel-perfect website. I also built a complete admin dashboard allowing the client to create and manage blog posts and projects with full SEO metadata injection, and to view incoming contact form submissions.',
            link: 'https://www.mbcrenov.com/',
            keyFeature: [
                ["Figma to Code:", "Accurately converted a multi-page Figma design into a responsive Next.js frontend, ensuring pixel-perfect fidelity across all screen sizes."],
                ["Admin Dashboard:", "A secure admin panel built with Next.js where the client can log in, create blog posts with metadata injection, add new projects with SEO metadata, and review contact form submissions."],
                ["SEO Metadata Injection:", "Dynamic metadata injection for blogs and projects, enabling full control over SEO for every piece of content."],
            ],
            integrationHighlights: [
                ["Next.js & NestJS Stack:", "Frontend powered by Next.js with a NestJS backend handling authentication, content management, and form data."],
                ["Content Management via Dashboard:", "No third-party CMS needed — the admin dashboard acts as a custom lightweight CMS tailored to the client's needs."],
            ]
        },
        {
            id: '7',
            img: '/jma.webp',
            title: 'JMA Buzness – Business Services Website',
            description: 'JMA Buzness is a business services website built with Next.js and NestJS, following the same architecture as MBC Renov. I handled the full Figma-to-code conversion ensuring a responsive, polished result, and built the admin dashboard enabling the client to manage blog posts and projects with SEO metadata injection, and monitor contact form submissions.',
            link: 'https://www.jmabuzness.com/',
            keyFeature: [
                ["Figma to Code:", "Full conversion of the Figma design into a responsive Next.js website with attention to layout, typography, and cross-device consistency."],
                ["Admin Dashboard:", "Admin panel for managing blogs and projects with metadata injection, and reviewing contact form submissions."],
                ["SEO Metadata Injection:", "Each blog and project entry supports custom metadata, giving the client full control over search engine visibility."],
            ],
            integrationHighlights: [
                ["Shared Architecture with MBC Renov:", "Both JMA Buzness and MBC Renov share the same Next.js + NestJS architecture, allowing for efficient development and consistent code quality across both projects."],
                ["Custom CMS Dashboard:", "A tailor-made admin dashboard replacing the need for any external CMS, keeping the stack lean and client-friendly."],
            ]
        },
        {
            id: '2',
            img: '/hsa.webp',
            title: 'Horizon Study Abroad',
            description: 'In this project, I converted a Figma design of over 16 pages into a fully responsive website using Next.js and Tailwind CSS. I utilized Strapi as a headless CMS for API creation and built an admin dashboard. I ensured smooth integration between the frontend and API, delivering a seamless user experience.',
            link: 'https://hsa-last.vercel.app/',
            frontend: ["Next.js", "React.js", "Tailwind CSS", "Strapi (Headless CMS)"],
            backend: ["Next.js", "React.js", "Tailwind CSS", "Strapi (Headless CMS)"],
            version: ["GitHub", "Vercel (for frontend deployment)", "Strapi Cloud (for backend deployment)"]
        },
        {
            id: '3',
            img: '/borderEdge.webp',
            title: 'BorderEdge UI Design to Code Conversion',
            description: 'In this project, I was responsible for converting Figma designs into clean, responsive HTML, CSS, and JavaScript code to create a demo for the BorderEdge project. The company needed this demo to effectively present their ideas and showcase the potential of their services. This foundational work involved ensuring that the designs were accurately translated into a functional user interface, providing a solid prototype for future development and presentation across different frameworks and libraries as the company advances its services.',
            link: 'https://border-age.vercel.app',
        },

    ]
    const list = projects.filter(el => el.id == id)
    const project = list[0]

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