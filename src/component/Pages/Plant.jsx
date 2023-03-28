import React, {useRef, useState} from 'react'
import Header from '../Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { catalogueAtom } from '../../atom/catalogue';
import { useRecoilState } from 'recoil';


function Plant() {
  const [catalogue, setcatalogue] = useRecoilState(catalogueAtom);
  const [sliderRef, setSliderRef] = useState(null)
   const { id } = useParams();
  const filteredPlant = catalogue.filter(item => item.id == id)
  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }
  
  return (
    <div className='mb-8'>
        <Header />
        <div className='md:hidden w-5/6 mx-auto mt-4 '>
        <Slider ref={setSliderRef} {...sliderSettings}>
        <div key={1}>
          <img src={filteredPlant[0].img} className="h-96 w-full" /> 
        </div>
        <div key={2}>
          <img src={filteredPlant[0].imgsub[0]} className="h-96 w-full" /> 
        </div>
        <div key={3}>
          <img src={filteredPlant[0].imgsub[1]} className="h-96 w-full" /> 
        </div> 
      </Slider>
      </div>
    
    </div>
  )
}

export default Plant