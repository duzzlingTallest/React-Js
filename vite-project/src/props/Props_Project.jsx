import React from 'react'

export default function Props_Project(props) {
    return props.inputType === "email" ? (
        <div>
            <label htmlFor="email">Enter Your E-mail</label>
            <input type="email" name="" id="email" />
        </div>
    ) : (
        <div>
            <label htmlFor="pass">Enter Your Password</label>
            <input type="pass" id="pass" />
        </div>
    )
}
