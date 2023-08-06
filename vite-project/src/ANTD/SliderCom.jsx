import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slider.css"

export default function SliderCom() {
  const settings = {
    // Set your slider configurations here
    dots: true, // Display dots for navigation
    infinite: true, // Allow infinite loop
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set the auto-play speed in milliseconds (3 seconds in this case)
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <>
      <Slider {...settings}>
        {/* Add your slides here */}
        <div>
          <img className='img1' src="https://www.financialexpress.com/wp-content/uploads/2022/08/BMW-X7-50-Jahre-M-Edition.jpg?w=1024" alt="" />
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </>
  );
}