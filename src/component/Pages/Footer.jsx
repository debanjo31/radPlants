import React from 'react'

function Footer() {
  return (
    <div className=' pb-12 footer'>
        <div className='w-5/6 mx-auto text-black '>
          <div className='md:flex justify-between'>
                <div className="font-bold text-2xl font-mainFont mb-8 md:mb-0">Rad Plants</div>
                <div className='flex justify-between gap-8 lg:gap-24'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-gray-500 mb-2 text-sm'>Connect</h2>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Pinterest</p>
                        <p>Youtube</p>
                    </div>
                     <div className='flex flex-col gap-4'>
                        <h2 className='text-gray-500 mb-2 text-sm'>Resoruces</h2>
                        <p>Return Policy</p>
                        <p>Track An Order</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                     </div> <div className='flex flex-col gap-4'>
                        <h2 className='text-gray-500 mb-2 text-sm'>About</h2>
                        <p>Our Story</p>
                        <p>Careers</p>
                        <p>Press</p>
                     </div>
                </div>
                <div>
                    <form action="" className='mt-8 md:mt-0'>
                        <select id="currency" name="currency" className='bg-gray-100 text-sm font-bold p-2 pr-2'>
                            <option value="NGN">NGN</option>
                            <option value="EURO">EUR</option>
                            <option value="DOLLAR">USD</option>
                            <option value="POUND">GBP</option>
                        </select>
                    </form>
                </div>
          </div>  
                   </div>
    </div>
  )
}

export default Footer