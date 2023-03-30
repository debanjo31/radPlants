import React, {useRef, useState} from 'react'
import Header from '../Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { catalogueAtom } from '../../atom/catalogue';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Plant() {
  const [catalogue, setcatalogue] = useRecoilState(catalogueAtom);
  const [sliderRef, setSliderRef] = useState(null)
   const { id } = useParams();
   const navigate = useNavigate();
  const filteredPlant = catalogue.filter(item => item.id == id)
  const sliderSettings = {
    // removes default buttons
    dots : true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }
  const [quantity, setquantity] = useState(1);

  const handleAdd = () => {
    setquantity(quantity + 1);
  };

  const handleSubtract = () => {
    setquantity(quantity - 1);
  };

  return (
    <div className='mb-8'>
        <Header />
        <div className='md:hidden w-5/6 mx-auto mt-4 z-10 '>
        <button onClick={() => navigate("/catalogue")} className="bg-black text-white p-2 mb-2">Go back</button>
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
      <p className='text-sm text-gray-600 mt-8'>{filteredPlant[0].type} </p>
      <p className='font-bold text-lg mt-2'>&#8358;{filteredPlant[0].price}</p>
      <form>
        <div className='relative flex mt-2'>
         <label className='w-2/6' >
          Quantity:
          </label>
          <input
            type="number"
            value={quantity}
            className="border-2 border-black p-1 w-4/6 block text-center"
            onChange={(e) => setquantity(quantity(e.target.value))}
          />
          <button type='button' onClick={handleAdd} className="absolute top-0 left-40 text-lg">-</button>
        <button type='button' onClick={handleSubtract} className="absolute top-0 right-2 text-lg">+</button>
        </div>
        
        <button className='block w-full mt-4 p-2 bg-black text-white'>ADD TO CART</button>
      </form>
      
      </div>    
    </div>
  )
}

export default Plant