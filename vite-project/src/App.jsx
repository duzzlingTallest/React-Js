//Package
import { useState } from 'react'

// file
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Use_State from './Use_State/Use_State'
// import Use_State_Class from './Use_State/Use_State_Class'
import Project1 from './Use_State/Project1'
import Project2 from './Use_State/Project2'
import ConditionalRen from './ConditionalRendaring_map/ConditionalRen'
import PropFun from './props/PropFun'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* ------------------- Use State -------------------*/}
      {/* 
    <Use_State/>
    <Use_State_Class/> */}
      {/* <Project1/> 
    <Project2/> */}

      {/* ------------------- Conditional Rendaring Map -------------------*/}

      {/* <ConditionalRen/> */}

      {/* ------------------- Props ------------------- */}

      <PropFun name={"Kaushal"} age={20} />
      <PropFun name={"Jay"} age={21} />
      <PropFun data={{ name: "Jamiesh", age: "20" }} />
      <PropFun arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />

    </div>

  )

}

export default App
