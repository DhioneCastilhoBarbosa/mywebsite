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
import CSS from 'csstype'


export function Presentation() {
    
    const img:CSS.Properties=
    {
        backgroundImage: `url(${background})`,
        width:'100px',
        height:'100px',
    } 


    return (
        <div className="home relative overflow-hidden w-screen h-screen pt-16" >
            <Image 
            className="absolute w-screen h-screen "
            lq={background}
            src={background}
            //src={'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'}
            
            />
            <div className="relative">
                <div className=" z-10 mt-64 ml-40 font-medium text-cyan-300 text-3xl">
                    <span>Ola, eu sou</span>
                </div>
                <div className="flex  ml-52 top-72 font-bold text-6xl gap-6">
                    <h1>Dhione</h1>
                    <h1 className="text-cyan-300">Castilho</h1>

                </div>
                <span className="flex top-80 ml-52  font-medium text-2xl" >
                    Front-end Developer
                </span>
                <div className="flex top-96 mt-12 ml-52 font-medium text-2xl">
                    <ul className="flex gap-20">
                        <a href="https://github.com/DhioneCastilhoBarbosa" target="_blank"><li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"><img src={github} className="" alt="" />Github</li></a>
                        <a href="https://www.linkedin.com/in/dhione-castilho-barbosa-45462961/" target="_blank"> <li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"> <img src={linkedin} alt="" />Linkedin</li></a>
                        <a href="https://api.whatsapp.com/send?phone=5548988025995&text=Ol%C3%A1,%20%20tudo%20bem%20?%20Fui%20direcionado%20pelo%20seu%20site,%20gostaria%20de%20falar%20com%20voc%C3%AA" target="_blank"><li className="flex gap-4 items-center cursor-pointer hover:animate-bounce"><img src={whatsapp} alt="" /> Whatsapp</li></a>
                    </ul>
                </div>

            </div>

        </div >
    )
}