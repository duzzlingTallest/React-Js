import React from 'react';

import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function SliderCom() {


  return (
    <>
      <Carousel style={{ height: "50vh" }} autoplay>
        <div style={contentStyle}>
          <img style={{ height: "50vh", width: "100vw" }} src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <div style={contentStyle}>
          <img style={{ height: "50vh", width: "100vw" }} src="https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <div style={contentStyle}>
          <img style={{ height: "50vh", width: "100vw" }} src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <div style={contentStyle}   >
          <img style={{ height: "50vh", width: "100vw" }} src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
      </Carousel>
    </>
  );
}