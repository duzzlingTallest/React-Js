import React from 'react'
import "./Nav.css"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


export default function NavCom() {
    return (
        <>
            <nav>
                <div className="nav">
                    <img src="https://e7.pngegg.com/pngimages/798/458/png-clipart-car-drawing-car-orange-logo.png" alt="" />
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
                    {/* <Input className='w-5' type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> */}
                    <Form className='d-flex align-items-center w-50 h-100'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search Hear...!" />
                        <FormGroup className='d-flex align-items-center'>
                        </FormGroup>
                    </Form>
                    {/* <input className=" mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <i class="bi bi-search"></i>


                </div>
                <h1 className='flex-3'>Welcome To Car World...</h1>
            </nav>
        </>
    )
}
