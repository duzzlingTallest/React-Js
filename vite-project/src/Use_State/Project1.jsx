// import React, { useState } from 'react'

// export default function Project1() {

//     let [color, setColor] = useState("red")

//     function changeColor(params) {
//         setColor("green")
//     }
//     return (
//         <div>
//             <h1 style={{ color: color }}>Kaushal</h1>
//             <button onClick={() =>  changeColor() }>Change Color</button>
//         </div>
//     )
// }

// -------------------------------------------------

import { log } from 'async'
import React from 'react'
import { useState } from 'react'

export default function Project1() {

    let [color, setColor] = useState("red")   // in this code " defaultColor "  is a Flag

    let [defaultColor, setDefaultColor] = useState(true)

    function changeColor(params) {
        let c1 = "red"
        let c2 = "green"

        console.log("defaultColor:",defaultColor);
        setColor(defaultColor ? c1:c2)
        setDefaultColor(!defaultColor)

    }

    return (
        <div>
            <h1 style={{color:color}}>Kaushal</h1>
            <button onClick={() => changeColor()}>Change Color</button>
        </div>
    )
}
