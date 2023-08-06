import React from 'react'
import "./Nav.css"


export default function NavCom() {
    return (
        <>
            <nav>
                <div className="logo"><img src="https://e7.pngegg.com/pngimages/798/458/png-clipart-car-drawing-car-orange-logo.png" alt="" /></div>
                <h1 className='flex-3'>Welcome To Car World...</h1>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
