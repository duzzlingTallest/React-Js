import React from 'react'

export default function Img(props) {
    return (
        <>
            <div class="card m-5">
                <img class="w-100 card-img-top" src={props.img} />
                <div class="card-body">
                    <h4 class="card-text">Name : {props.name}</h4>
                    <h4 class="card-text">price : {props.price}</h4>
                    <h4 class="card-text">Horsepower : {props.Horsepower}</h4>

                </div>
            </div>
        </>
    )
}
