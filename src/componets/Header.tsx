//@ts-ignore
import logoImage from "../assets/logo.svg"
import { Link } from 'react-scroll'

//<li className="hover:text-cyan-400 duration-500">
//<Link to='presentation' smooth={true} duration={800}>Portifolio</Link>
//</li>

export function Header() {
    return (
        <div className="fixed z-20 w-full h-16 p-8 px-20 mx-auto flex items-center justify-between bg-background border-b-2 border-cyan-900 md:justify-items-center">

            <img src={logoImage} alt="" />
            <ul className="  invisible md:visible flex gap-4 cursor-pointer">
                <li className="hover:text-cyan-400 duration-500">
                    <Link to='home' smooth={true} duration={800}>Home</Link>
                </li>
                <li className="hover:text-cyan-400 duration-500">
                    <Link to='about' smooth={true} duration={800}>Sobre</Link>
                </li>
                <li className="hover:text-cyan-400 duration-500">
                    <Link to='experiencia' smooth={true} duration={800}>Experiência</Link>
                </li>
                <li className="hover:text-cyan-400 duration-500">
                    <Link to='skills' smooth={true} duration={800}>Skill</Link>
                </li>
            </ul>
 
        </div >

    )
}