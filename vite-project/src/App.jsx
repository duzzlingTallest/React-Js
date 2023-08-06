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
import Multi_input from './Input/Car_details'
import Car_details from './Input/Car_details'
import City_data from './Input/City_data'
import UserData from './Input/UserData'
import User_Data_Class from './Input/User_Data_Class'
import Update from './Input/Update'
import Pop_pop from './Input/Pop_pop'
import Api from './API/Api'
import Api_2 from './API/Api_2'
import PropsArr from './Props_pro/PropsArr'
import NavCom from './ANTD/NavCom'
import SliderCom from './ANTD/SliderCom'
import LocalStorage from './localstorage/LocalStorage'
import Test from './localstorage/test'
import UserDataLs from './localstorage/UserDataLs'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100%'>
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
      {/* <InputClass /> */}

      {/* -------------------Multi Input ------------------- */}
      {/* <Car_details/> */}
      {/* <City_data/> */}
      {/* <UserData/> */}
      {/* <User_Data_Class/> */}
      {/* <Update/> */}
      {/* <Pop_pop/> */}
      {/* <Api/> */}
      {/* <Api_2/> */}

      {/* ------------------- Props Pro ------------------- */}

      {/* <PropsArr /> */}

      {/* ------------------- ANTD ------------------- */}

      {/* <NavCom/>  */}
      {/* <SliderCom/> */}

      {/* ------------------- Local Storage ------------------- */}

      {/* <LocalStorage /> */}
      {/* <Test /> */}
      <UserDataLs/>

    </div>

  )

}

export default App