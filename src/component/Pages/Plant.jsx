import React, {useRef, useState} from 'react'
import Header from '../Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { catalogueAtom } from '../../atom/catalogue';
import { cartAtom } from '../../atom/cart';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Plant() {
  const [catalogue, setcatalogue] = useRecoilState(catalogueAtom);
  const [sliderRef, setSliderRef] = useState(null)
  const [cart, setCart] = useRecoilState(cartAtom);
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
    if(quantity > 1){
      setquantity(quantity - 1);
    }
  };

  const addCart = (event) => {
    event.preventDefault();
    //console.log(cart, filteredPlant[0])
    //alert("Add to Cart");
    console.log(cart);
    setCart([...cart, filteredPlant])
    console.log(cart);
  }

  return (
    <div className='mb-8'>
        <Header />
        <div className=' w-5/6 mx-auto mt-4 z-10 '>
        <button onClick={() => navigate("/catalogue")} className=" text-black p-2 mb-2"> &larr;</button>
        <div className='md:hidden'>
              <Slider ref={setSliderRef} {...sliderSettings} className="md:hidden">
                 <div key={1}className="shadow-lg">
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
        <div className='lg:flex justify-between'>
          <div className='hidden  md:flex gap-8 justify-between lg:w-4/6'>
                <div className="flex flex-col md:w-3/6 lg:2/6 gap-2">
                     <img src={filteredPlant[0].imgsub[0]} className=" h-48 w-full shadow-md border-2 border-gray-200" />
                     <img src={filteredPlant[0].imgsub[1]} className="h-48 w-full shadow-2xl border-2 border-gray-200" /> 
                </div>
                <div className=' md:w-3/6 '>
                    <img src={filteredPlant[0].img} className=" h-96 w-full shadow-md border-2 border-gray-200" />
                </div> 
          </div>
          <div className='md:w-4/6 lg:w-2/6 lg:p-2'>
            <p className='text-sm text-gray-600 mt-8 lg:m-0'>{filteredPlant[0].type} </p>
            <p className='font-bold text-lg mt-2'>&#8358;{filteredPlant[0].price}</p>
            <form >
              <div className='relative flex mt-2'>
              <label className='w-3/6 lg:w-4/6 justify-between' >
                 Quantity:
               </label>
              <button type='button' onClick={handleSubtract} className="bg-blue-500 text-white text-xl h-12 w-12 -mt-2 font-bold  ">-</button>
              <input
                type="text"
                value={quantity}
                className="border-2 outline-none border-none p-1 w-3/6 block text-center font-bold"
                onChange={(e) => setquantity(quantity(e.target.value))}
              />
              <button type='button'  onClick={handleAdd} className=" bg-blue-500 text-white text-xl h-12 w-12 -mt-2 font-bold">+</button>
        </div>
        <button onClick={addCart} className='block w-full mt-8 p-2 bg-blue-500 text-white'>ADD TO CART</button>
      </form>
          </div>
        </div>    
      </div>    
    </div>
  )
}

export default Plant