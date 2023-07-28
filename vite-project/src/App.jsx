//Package
import { useState } from 'react'

// file
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapFun_key from './Map-key/MapFun_key'
import Props_Project from './props/props_Project'
import Use_State_fun from './Use_State/Use_State_fun'
import Use_State_Class from './Use_State/Use_State_Class'
import Project1 from './Use_State/Project1'
import Project2 from './Use_State/Project2'
import ConditionalRen from './ConditionalRendaring_map/ConditionalRen'
import PropFun from './props/PropFun'
import MapFun_key2 from './Map-key/MapFun_key2'

import Button from 'react-bootstrap/Button';

import InputCom from './Input/Input_name'
import { Form } from 'react-bootstrap'
import Input_Add from './Input/Input_Add'
import Input_name from './Input/Input_name'
import Input_num from './Input/Input_num'
import Card from 'react-bootstrap/Card';
import Multi_input from './Input/Multi_input'
import Multi_input_sir from './Input/Multi_input_sir'
import InputClass from './Input/inputClass'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* ------------------- Use State -------------------*/}
      {/* 
    <Use_State_fun/>
    <Use_State_Class/> */}
      {/* <Project1/> 
    <Project2/> */}

      {/* ------------------- Conditional Rendaring Map -------------------*/}

      {/* <ConditionalRen/> */}

      {/* ------------------- Props ------------------- */}

      {/* <PropFun name={"Kaushal"} age={20} />
      <PropFun name={"Jay"} age={21} />
      <PropFun data={{ name: "Jamiesh", age: "20" }} />
      <PropFun arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]} /> */}

      {/* <Props_Project inputType={"email"}/> */}


      {/* ------------------- Map-Key ------------------- */}
      {/* <MapFun_key/> */}
      {/* <MapFun_key2 /> */}

      {/* ------------------- Input ------------------- */}
      {/* <Input_name/> <hr />
      <Input_num/> <hr />
      <Input_Add/> <hr /> */}
      {/* <Input_Add/> */}
      <InputClass />

      {/* -------------------Multi Input ------------------- */}
      {/* <Multi_input_sir/> */}
      {/* <Multi_input/> */}

    </div>

  )

}

export default App