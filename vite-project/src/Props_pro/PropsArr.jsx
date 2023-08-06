import React, { useState } from 'react'
import Img from './Img'

export default function PropsArr() {

  <Img />

  let data = [

    {
      img: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15011/2023_Chevrolet_Corvette_Angular_Front_1.jpg",
      name: "Chevrolet Corvette 2023 ",
      price: "$64,500 - $126,150",
      Horsepower: "490 - 670 "

    },
    {
      img: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615503/2023_bmw_8_series_angularfront.jpg",
      name: "2023 BMW 8-Series 2023",
      price: "$87,500 - 144,900",
      Horsepower: "335 - 617 "

    },
    {
      img: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15200/2023_Porsche_Boxster_1.jpg",
      name: "Porsche Boxster 2023",
      price: "$65,500 - 103,400",
      Horsepower: "300 - 414 "

    }
  ]

  let [arr] = useState(data)


  return (
    <>
      <h1>Top 3 Car Which My Fav....</h1>
      <div className='w-100 d-flex flex-row flex-wrap'>

        {arr.map((e) => {
          return (
            <Img key={e} img={e.img} name={e.name} price={e.price} Horsepower={e.Horsepower} />
          )
        })}
      </div>
    </>
  )
}
