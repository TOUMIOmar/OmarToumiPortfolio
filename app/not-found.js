import Image from "next/image";

 
export default async function NotFound() {

  return (
    <div className="w-full h-full flex justify-center items-center">
        <Image src={"/404.png"} width={1000} height={1000} className="w-full h-1/2 md:w-[25%] md:h-[40%]" alt="not-found-imgage"/>
    </div>
  )
}