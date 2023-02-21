
import { About } from './componets/About'
import { Header } from './componets/Header'
import { Presentation } from './componets/Presentation'
import { Skills } from './componets/Skills'
import TimeLineProfession from './componets/TimeLineProfession'
import './style/global.css'

export function App() {


  return (
    <div className=" main flex overflow-hidden flex-col justify-center items-start p-1/2">
      <div>
        <Header />
        <Presentation />
        <About />
        <TimeLineProfession />
        <Skills />

      </div>
    </div>
  )
}


