
export function About() {
    return (
        <div className=' about relative w-full h-auto bg-[#131d2b] text-gray-300 pb-10 md:h-screen md:pb-0'>
            <div className='flex flex-col justify-start items-center w-full h-full pt-5 md:justify-center md:pt-0'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-4 pl-4'>
                        <p className='text-3xl font-bold inline border-b-4 border-cyan-400 md:text-6xl'>
                            Sobre
                        </p>
                    </div>

                </div>
                <div className=' mt-10 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-left text-2xl font-semibold md:text-4xl'>
                        <p>Oi. Sou Dhione, prazer em conhecê-lo.
                        Por favor fique à vontade para navegar em meu site.</p>
                    </div>
                    <div className="">
                        <p>Desenvolver soluções que impactam positivamente a vida das pessoas é a minha paixão. 
                            Tenho expertise no desenvolvimento de produtos e software,atendo a diversos clientes, 
                            que inclui desde indivíduos até grandes corporações. Imagine ter um especialista em software 
                            ao seu alcance. Compartilhe sua ideia e permita-me transformá-la em realidade para o seu projeto."</p>
                    </div>

                </div>

            </div>

        </div>



    )
}