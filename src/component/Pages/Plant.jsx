import React from 'react'
import Header from '../Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Plant() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
        <Header />
        <p>Parties Members</p>
        <Slider {...settings}>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>1</h3>
      </div>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>2</h3>
      </div>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>3</h3>
      </div>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>4</h3>
      </div>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>5</h3>
      </div>
      <div className="bg-gray-500 h-96 text-white text-center text-7xl">
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default Plant