import React, { useState } from 'react'

export default function Project2() {

    let [index, setIndex] = useState(0)

    let arr = ["red", "green", "yellow", "blue", "brown", "chocolate", "orange"];

    function changeColor(params) {
    //         if (index < arr.length) {
    //             setIndex(index + 1)
    //         }else{
    //             setIndex(0)
    //         }
            index < arr.length ? setIndex(index + 1) : setIndex(0);
            console.log("index : ", index);
        }


        return (
            <div>
                <h1 style={{ color: arr[index] }}>Box</h1>
                <button onClick={() => changeColor()}>Change Color</button>
            </div>
        )
    }
