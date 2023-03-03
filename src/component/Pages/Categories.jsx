import React from 'react'
import cat1 from "../../img/rad2.jpg"
import cat2 from "../../img/rad3.jpg"
import cat3 from "../../img/rad4.jpg"
import cat4 from "../../img/rad5.png"

function Categories() {
    const Category = (props) => {
        return(
            <div>
                <img src={props.img} alt={props.name} />
                <p className='font-mainFont'>{props.name}</p>
            </div>
        )
    }
  return (
    <div className='w-5/6 text-lg mx-auto'>
       <p className='text-center font-mainFont'>Categories</p> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat nemo distinctio, laudantium aspernatur facere quo rerum modi perferendis maxime.</p>
        <Category img={cat1} name="Jungle plants" />
        <Category img={cat2} name="Jungle plants" />
        <Category img={cat3} name="Jungle plants" />
        <Category img={cat4} name="Jungle plants" />
        
    </div>
  )
}

export default Categories