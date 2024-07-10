import React from 'react'

const Banner = () => {
  return (
    <div className='md:py-20 py-12 px-2 sm:px-6 bg-[#ADDCFC] flex flex-col items-center text-primary'>
        <h1 className='sm:text-5xl xs:text-3xl text-2xl leading-[30px] sm:leading-[50px]' >Claim Your  <span className='mx-1 font-bold' >Free Exam & X-ray </span></h1>
        <h1 className='sm:text-5xl xs:text-3xl text-2xl leading-[30px] sm:leading-[50px]' > Worth <span className='mx-1 font-bold ' > $250 </span>Today!</h1>
        <button className='sm:w-[325px] w-[250px]  text-xl h-[61px] p-2 bg-primary text-white font-bold md:text-2xl rounded-lg mt-12' >Book An Appointment</button>
    </div>
  )
}

export default Banner