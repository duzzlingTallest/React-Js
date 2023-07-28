import React from "react";
import Card from "./card";

export default function MapFun_key2(props) {
  // let name = ["uv", "js", "kd"];

  let data = [
    { cityname: "surat", stateName: "Gujrat", population: 123 },
    { cityname: "delhi", stateName: "delhi", population: 123 },
  ];

  return (
    <>
      {data.map((e, i) => {
        return <Card key={i} data={e} />;
      })}
    </>
  );
}