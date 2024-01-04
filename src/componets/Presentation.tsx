//@ts-ignore
import github from "../assets/github.svg"
//@ts-ignore
import linkedin from "../assets/linkedin.svg"
//@ts-ignore
import whatsapp from "../assets/whatsapp.svg"
//@ts-ignore
import background from "../assets/alta.png"
//@ts-ignore

import Image from "./Img";

export function Presentation() {
    
    return (
        <div className="home relative overflow-hidden w-screen pt-16 pb-16 h-auto md:h-screen" >
            <Image 
            className="absolute w-screen h-full md:mt-0 md:h-screen "
            lq={background}
            src={background}
            />
            <div className="relative">
                <div className=" z-10 mt-20 ml-20 font-medium text-cyan-300 text-2xl md:mt-64 md:ml-40 md: text-3xl">
                    <span>Ola, eu sou</span>
                </div>
                <div className="flex flex-row ml-32 top-72 font-bold text-3xl gap-2 md:text-6xl md:gap-6 md:ml-52">
                    <h1>Dhione</h1>
                    <h1 className="text-cyan-300">Castilho</h1> 
                </div>
                <span className="flex top-80 ml-32 font-medium text-xl md:ml-52 md:text-2xl" >
                    Front-end Developer
                </span>
                <div className="flex top-96 mt-12 ml-32 font-medium text-2xl md:ml-52">
                    <ul className="flex flex-col gap-6 md:flex-row gap-20 ">
                        <a href="https://github.com/DhioneCastilhoBarbosa" target="_blank"><li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"><img src={github} className="" alt="" />Github</li></a>
                        <a href="https://www.linkedin.com/in/dhione-castilho-barbosa-45462961/" target="_blank"> <li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"> <img src={linkedin} alt="" />Linkedin</li></a>
                        <a href="https://api.whatsapp.com/send?phone=5548988025995&text=Ol%C3%A1,%20%20tudo%20bem%20?%20Fui%20direcionado%20pelo%20seu%20site,%20gostaria%20de%20falar%20com%20voc%C3%AA" target="_blank"><li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"><img src={whatsapp} alt="" /> Whatsapp</li></a>
                    </ul>
                </div>

            </div>

        </div >
    )
}