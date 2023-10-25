import React from 'react'
import { images } from '../../../constants'

const CTA = () => {
  return (
    <>
<svg preserveAspectRatio='none' className=' w-full h-auto max-h-40 translate-y-[1px]' width="2160" height="263" viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Wave" fillRule="evenodd" clipRule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436"/>
</svg>

<section className=' relative bg-dark-hard px-5 xl:flex  xl:justify-around xl:items-center xl:flex-row-reverse xl:mx-auto'>
    {/* card and more */}
    <div className=' col-span-12 hidden md:block pt-20  mb-[70px] md:order-first'>

<div className=' relative w-[450px] mx-auto  '>
    <div className=' w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%] z-0'></div>
<div className=' w-1/2 h-1/2 bg-white opacity-[0.06]  rounded-lg absolute  -bottom-[10%] -left-[8%] z-0'></div>
<div className={` relative   bg-white rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   `}>
<img src={images.wave} alt="title" className=' p-2 w-full object-cover object-center h-auto md:h-[212px] md:w-[450px] ' />
<div className=' p-7 '>
<h1 className=' text-xl md:text-2xl  text-dark-soft font-semibold '>The best aticles every week</h1>
<p className=' text-dark-light mt-3  leading-7 md:text-lg '>Our insurance plans offers are priced the same everywhere else.</p>


</div>
</div>
</div>
</div>

{/* ------------------ */}
    
<div className=' container mx-auto xl:mx-0 py-10 md:pb-20 md:w-[555px]'>
    <div className=' '></div>
    <h2 className=' text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left '>Get our stories delivered From us to your inbox weekly.</h2>
    <div className=' w-full max-w-[494px] space-y-3 mx-auto mt-10 md:space-y-0 md:flex md:items-center md:space-x-2'>
<input type="text" className=' px-4 py-3 rounded-lg w-full placeholder:text-dark-light  focus:outline-none' placeholder='Your Email' />
<button className=' px-4 py-3 rounded-lg w-full  bg-primary text-white font-bold md:w-fit md:whitespace-nowrap'>Get start</button>

    </div>
    <p className=' text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base '>
   <span className=' font-bold italic text-[#B3BAC5]'> Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
    </p>
     </div>





</section>


    </>
  )
}

export default CTA