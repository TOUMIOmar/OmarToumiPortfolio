import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const getOrbitron = Orbitron({
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Developer | Next.js, React, Node.js | Omar Toumi",
  description: "Experienced Web Developer specializing in Next.js, React, and the MERN stack. Explore my portfolio to see my latest projects and expertise in full-stack development.",
  keywords: "Web Developer, Next.js, React,omar toumi,Developer tunisia, JavaScript, Node.js, Express, MongoDB, Full-Stack Developer, Portfolio, MERN Stack",
  authors: [{ name: "Omar Toumi" }],
  creator: "Omar Toumi",
  robots: "index, follow",
  openGraph: {
    title: "Web Developer | Omar Toumi",
    description: "Explore my portfolio showcasing full-stack projects built with Next.js, React, and Node.js.",
    url: "https://www.omartoumi.com",
    type: "website",
    images: [{ url: "/preview.png", width: 1200, height: 630, alt: "Portfolio Preview" }],
    seeAlso: [
      "https://www.linkedin.com/in/toumiomar", 
      "https://github.com/TOUMIOmar"
    ],
  },
  twitter: {
    card: "shttps://x.com/ToumiOmar99",
    title: "Web Developer | Omar Toumi",
    description: "Explore my portfolio showcasing full-stack projects built with Next.js, React, and Node.js.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/omar-toumi-photo.png",
    shortcut: "/omar-toumi-photo.png",
    apple: "/omar-toumi-photo.png",
  },
  metadataBase: new URL("https://www.omartoumi.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getOrbitron.className} } antialiased bg-black`}
      >
        <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover w-[95%] md:w-[95vw] mx-auto rounded-3xl h-[96vh] mt-[2vh] md:h-[92vh] md:mt-[3vh]  relative">
          {/* longitude latitude */}
          <div className="absolute flex flex-col text-sm top-7 left-4">
            <div className="flex ">
              <span className="text-[#EFF1C5]">longitude  ~</span><span className="text-[#FFFFFF]">28.6542</span>
            </div>
            <div className="flex">
              <span className="text-[#EFF1C5]">latitude  ~</span><span className="text-[#FFFFFF]">77.2373</span>
            </div>
          </div>
          {/* Browser OS */}
          <div className="absolute flex flex-col items-end text-sm top-7 right-4">
            <div className="flex">
              <span className="text-[#FFFFFF] text-clip overflow-hidden">Chrome </span> <span className="text-[#EFF1C5]">~ Browser</span>
            </div>
            <div className="flex ">
              <span className="text-[#FFFFFF]">Window 10</span>{" "} <span className="text-[#EFF1C5]"> ~ OS</span>
            </div>
          </div>
          {/* Local Time */}
          <div className="absolute flex flex-col text-sm bottom-7 left-4">
            <div className="flex ">
              <span className="text-[#EFF1C5]">Local Time  ~</span><span className="text-[#FFFFFF]">16:05</span>
            </div>
            <div className="flex">
              <span className="text-[#EFF1C5]">Time Spend  ~</span><span className="text-[#FFFFFF]">00:05</span>
            </div>
          </div>
          {/*IP*/}
          <div className="absolute flex flex-col items-end text-sm  bottom-7 right-4">
            <div className="flex ">
              <span className="text-[#FFFFFF]">122.161.53.938 </span>  <span className=" text-[#EFF1C5] ">~ IP</span>
            </div>
            <div className="flex">
              <span className="text-[#FFFFFF]">Tunisia </span><span className="text-[#EFF1C5]">~ Location</span>
            </div>
          </div>
          <Navbar />
          <div className="pt-[15vh]">
            <div className="w-[90%] md:w-[70%] h-[70vh]  mx-auto overflow-x-scroll md:scrollbar-hide">
            {children}
          </div>
          </div>
     
        </div>
      </body>
    </html>
  );
}
