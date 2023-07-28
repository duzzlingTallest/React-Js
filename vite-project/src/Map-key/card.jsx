import React from "react";

export default function Card(props) {
  return <>
    <h1>{props.data.cityname}</h1>
    <h1>{props.data.stateName}</h1>
    <h1>{props.data.population}</h1>
  </>
}