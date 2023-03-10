import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
    
    const [status, setStatus] = useState(false);

  function Sidebar() {
    return (
      <div className='min-h-100 z-60 overflow-hidden	snap-none  bg-[#141414] absolute text-white inset-0'>
          <div className='flex justify-between mx-4 my-4 '>
          <div className="font-bold text-2xl font-mainFont mt-2">Rad Plants</div>
              <p onClick={()=> {}} className='block font-bold cursor-pointer text-2xl mt-3 mr-5'>X</p>
          </div>
          <div style={{height : "60vh", justifyContent : "space-evenly"}} className='min-h-80 font-bold text-xl gap-12 flex-col items-center flex  justify-items-col-evenly space-around'>
                <a href="#">Home</a>
                <a href="#">Catalogue</a>
                <a href="#">Contact</a>
          </div>
      </div>
    )
  }
  

  return (
    <div className=" shadow-md md:shadow-none">
        <div className="flex justify-between  w-5/6 mx-auto mt-2">
            <div className="font-bold text-2xl font-mainFont mb-4">Rad Plants</div>
            <div className="hidden md:flex gap-8  ">
                <a href="#">Home</a>
                <a href="#">Catalogue</a>               
                 <a href="#">Contact</a>
            </div>
            <div className="hidden md:flex gap-4 ">
                <p >Search</p>
                <p>Cart(0)</p>
            </div>
            <div  className="md:hidden">
                <FaBars onClick={alert("NAva")}  className="font-bold text-xl font-mainFont mt-1" />
            </div>
            {status && <Sidebar />}
           
        </div>
       
    </div>
    );
}


export default Header;