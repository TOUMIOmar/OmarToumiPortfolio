import Image from "next/image"

const Page = () => {
    return (
        <div>
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#FFFFFF] text-center mb-3">About</h2>
            <div className="flex flex-col gap-4 lg:gap-8">  
                <p className="text-base md:text-2xl font-normal text-[#EFF1C5] leading-10 tracking-widest">
                    <span className="text-white font-bold">I’m</span> a Full-Stack JavaScript Developer (3+ years) who builds products from the ground up. My focus is on modern frameworks like <span className="text-white font-bold">Next.js, React, and NestJS</span>, but my work doesn't stop at the code. I'm equally passionate about production deployment and infrastructure, having designed and managed resilient server architectures for real-world applications.
                </p>
                {/* <div>
                    <p className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest"><span className="text-white font-bold">I led key</span> projects, including:</p>
                    <ul className="text-base md:text-xl font-normal text-[#EFF1C5] leading-10 tracking-widest">
                        <li> <span className="text-white font-bold">Mister bBouton</span>, a boutique e-commerce platform featuring 3D product views and a 360-degree boutique tour.</li>
                        <li> <span className="text-white font-bold">Horizon Study Abroad</span>, a platform connecting students with top universities, including dynamic content management, a blog, and a consultation booking system.</li>
                    </ul>
                </div> */}
                <p className="text-base md:text-2xl font-normal text-[#EFF1C5] leading-10 tracking-widest">  
                    <span className="text-white font-bold">Across my roles</span> at Duality Agency and 3A Marketing Agency, I've delivered diverse, high-impact solutions — from car reservation platforms with Google Maps integration and e-commerce experiences featuring 3D showrooms, to delivery applications published on the Google Play Store. I bring a comprehensive skillset that spans frontend development, backend architecture, and DevOps, with a strong commitment to clean code and collaborative workflows that drive results.
                </p>
            </div>
            <Image priority={true} src={"/omar-toumi-photo.webp"} width={400} height={400} alt="omar-toumi-photo" className="opacity-30 w-[90%] md:w-[400px] absolute bottom-20 md:bottom-8 md:left-[35%] 2xl:left-[40%]" />
        </div>
    )
}

export default Page