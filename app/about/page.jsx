import Image from "next/image"

const Page = () => {
    return (
        <div>
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#FFFFFF] text-center">About</h2>
            <div className="flex flex-col gap-4">  
            <p className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest">
            <span className="text-white font-bold ">I’m</span> a web developer passionate about crafting seamless, user-centric digital experiences using modern JavaScript frameworks. I thrive at the intersection of design and development, creating robust, responsive interfaces that deliver exceptional performance.
                <br />Previously, I worked as a Full-Stack JavaScript Developer at <span className="text-white font-bold">3A Marketing Agency</span>, where I developed and deployed scalable web solutions using Next.js, Node.js, Express, and MongoDB.
            </p>
            {/* <div>
            <p className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest"><span className="text-white font-bold">I led key</span> projects, including:</p>
            <ul className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest">
                <li> <span className="text-white font-bold">Mister bBouton</span>, a boutique e-commerce platform featuring 3D product views and a 360-degree boutique tour.</li>
                <li> <span className="text-white font-bold">Horizon Study Abroad</span>, a platform connecting students with top universities, including dynamic content management, a blog, and a consultation booking system.</li>
            </ul>
            </div> */}
            <p className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest">  
            <span className="text-white font-bold">Before that,</span> I worked as a Full-Stack JavaScript instructor at <span className="text-white font-bold">GoMyCode</span>, where I earned an 81 NPS score. During this period, I guided my students through the Full-Stack JavaScript Bootcamp by helping them build full-stack applications, emphasizing best practices, clean code, and scalable solutions. Additionally, I was involved in organizing and leading various technical events, including workshops like <span className="text-white font-bold">"Converting Figma Into Reality"</span>, which promoted hands-on learning and collaboration.
            </p>
            
</div>
            <Image src={"/omar-toumi-photo.png"} width={400} height={400} alt="omar-toumi-photo" className="opacity-30 w-[90%] md:w-[400px] absolute bottom-20 md:bottom-8 md:left-[35%] 2xl:left-[40%]" />
        </div>
    )
}

export default Page