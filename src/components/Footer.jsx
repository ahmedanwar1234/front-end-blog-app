import React from 'react'
import {images}from '../constants'

const Footer = () => {
  return (
    <section className=' bg-dark-hard pt-20 pb-16  '>
<div className=' xl:my-32 flex md:justify-around xl:justify-start  xl:px-52 xl:gap-x-10   flex-col-reverse md:flex-row md:items-start items-center gap-y-5 '>
  <div className=' w-[320px] md:w-[253px] flex items-center md:items-start flex-col gap-y-4'>
    <img className=' w-[90px]' src={images.LogoFooter} alt="" />
<p className=' text-dark-light text-center md:text-left'>Build a modern and creative website with crealand</p>

<div className=' flex gap-x-2'>
<div className='  w-10 h-10   bg-[#FC5A5A]    rounded-full'></div>
<div className='  w-10 h-10   bg-[#FC5A5A]    rounded-full'></div>
<div className='  w-10 h-10   bg-[#FC5A5A]    rounded-full'></div>
<div className='  w-10 h-10   bg-[#FC5A5A]    rounded-full'></div>
<div className='  w-10 h-10   bg-[#FC5A5A]  md:hidden   rounded-full'></div>

</div>
  </div>

<div className=' grid grid-cols-2 gap-10 gap-x-16 xl:gap-x-20  xl:flex '>
<div>
  <h1 className=' text-[#5A7184] font-bold'>Product</h1>
  <ul className=' text-[#959EAD] text-sm flex flex-col gap-y-5 mt-3'>
    <li><a href="/">LandingPage</a></li>
    <li><a href="/">Features</a></li>
    <li><a href="/">Documentation</a></li>
    <li><a href="/">Referral Program</a></li>
    <li><a href="/">Pricing</a></li>
  
  </ul>
</div>
<div>
  <h1 className=' text-[#5A7184] font-bold' >Services</h1>
  <ul  className=' text-[#959EAD] text-sm flex flex-col gap-y-5 mt-3' >
    <li><a href="/">Documentation</a></li>
    <li><a href="/">Design</a></li>
    <li><a href="/">Themes</a></li>
    <li><a href="/"> Illustrations</a></li>
    <li><a href="/">UI Ki t</a></li>
  
  </ul>
</div>
<div>
  <h1 className=' text-[#5A7184] font-bold' >Company</h1>
  <ul   className=' text-[#959EAD] text-sm flex flex-col gap-y-5 mt-3'>
    <li><a href="/">About</a></li>
    <li><a href="/">Terms</a></li>
    <li><a href="/">Privacy Policy</a></li>
    <li><a href="/">Careers</a></li>
  
  </ul>
</div>
<div>
  <h1 className=' text-[#5A7184] font-bold' >More</h1>
  <ul   className=' text-[#959EAD] text-sm flex flex-col gap-y-5 mt-3'>
    <li><a href="/">Dodumintation</a></li>
    <li><a href="/">License</a></li>
    <li><a href="/">Changelog</a></li>
  </ul>
</div>


</div>
</div>

<div className=' hidden md:block  mt-10'>

<div className=' flex flex-col  items-center justify-center gap-y-4 '>

  <img className=' w-[50px]' src={images.Heart} alt="" />
  <p className=' text-[#5A7184] font-semibold'> Copyright © 2023. Crafted with love.</p>
</div>
</div>
    </section>
  )
}

export default Footer