import TimeLineProfession from "./TimeLineProfession";

export function About() {
    return (
        <div className=' about w-full h-screen bg-[#131d2b] text-gray-300 '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-6xl font-bold inline border-b-4 border-cyan-400 '>
                            Sobre
                        </p>
                    </div>

                </div>
                <div className=' mt-10 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-semibold'>
                        <p>Oi. Sou Dhione, prazer em conhecê-lo.
                        Por favor fique à vontade para navegar em meu site.</p>
                    </div>
                    <div className="">
                        <p>Sou apaixonado por desenvolver soluções que melhore a vida
                        das pessoas. Eu me especializei no desenvolvimento de produtos
                        e software para clientes que vão desde indivíduos, pequenas
                        medias e grandes empresas. O que você faria se tivesse um
                            especialista em software disponível ao seu alcance?</p>
                    </div>

                </div>

            </div>

        </div>



    )
}