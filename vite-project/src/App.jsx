//Package
import { useState } from 'react'

// file
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Use_State from './Use_State/Use_State'
// import Use_State_Class from './Use_State/Use_State_Class'
// import Project1 from './Use_State/Project1'
import Project2 from './Use_State/Project2'
import ConditionalRen from './ConditionalRendaring_map/ConditionalRen'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* ------------------- Use State -------------------*/}
{/* 
    <Use_State/>
    <Use_State_Class/> */}
    {/* <Project1/> */}
    {/* <Project2/> */}

    {/* ------------------- Conditional Rendaring Map -------------------*/}

    <ConditionalRen/>
    </div>
  )
}

export default App
