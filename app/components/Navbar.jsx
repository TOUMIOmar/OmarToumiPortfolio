"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const [show, setShow] = useState()
    const close=()=>{
        setShow(false)
    }
    return (

        <div className="absolute md:w-[50%] md:h-14 w-[60px] h-[60px] bg-[#3D3D3D] rounded-[50%] md:rounded-3xl bottom-24 md:-bottom-6 left-[40%] md:left-[25%] z-10">

            <div className="w-full h-full md:hidden justify-center items-center flex relative">
                {show ?
                    <div className="absolute -top-[370%] flex flex-col gap-6 items-center w-[60vw] px-6 bg-[#3D3D3D] rounded-[20px]  py-6 bg-opacity-50 backdrop-blur">
                        <Link href={"/"} onClick={close} className="text-[#EFF1C5] ">Home</Link>
                        <Link href={"/projects"} onClick={close} className="text-[#FFFFFF]">Projects</Link>
                        <Link href={"/about"} onClick={close} className="text-[#FFFFFF]">About</Link>
                        <Link href={"/contact"} onClick={close} className="text-[#FFFFFF]">Contact</Link>
                    </div>
                    : null
                }
                <Image src={"/fleshsIcon.png"} className="cursor-pointer" width={30} height={30} alt="navbar-icon"
                    onClick={() => {
                        setShow(!show)
                    }}
                />
            </div>

            <div className="w-full h-full hidden md:flex items-center justify-around text-xl font-bold ">
                <Link href={"/"} className="text-[#EFF1C5]">Home</Link>
                <Link href={"/projects"} className="text-[#FFFFFF]">Projects</Link>
                <Link href={"/about"} className="text-[#FFFFFF]">About</Link>
                <Link href={"/contact"} className="text-[#FFFFFF]">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar