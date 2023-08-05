import React from 'react'

const Info = () => {
  return (
    <div className='info-page'>
        <p className='text-orange-600 '>Sneaker Company</p>
        <h1 className='text-5xl w-1/3 font-sans leading-10 font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='text-gray-600 w-1/3 font-normal font-sans'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='price-blok flex  '>
            <p className='font-bold text-xl font-sans'>$125.00</p>
            <div className='deduction w-12 h-6 text-center bg-orange-100 font-sans rounded-md ml-6 '>50%</div>
        </div>
        <p className='text-gray-400 absolute top-72 '>$250.00 </p><hr className=' text-gray-700 w-12 border font-extralight  absolute top-[300px]' />
    </div>
  )
}

export default Info