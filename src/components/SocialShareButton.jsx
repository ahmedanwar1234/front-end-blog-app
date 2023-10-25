import React from 'react'
import {FaFacebookSquare,FaTwitterSquare,FaRedditSquare,FaWhatsappSquare}from 'react-icons/fa'
const SocialShareButton = ({url,title}) => {
  return (
    <div className=' w-full flex justify-between'>
<a target='_blank' rel='noreferrer' href={`https://www.facebook.com/dialog/share?app_id=903362941503547&display=popup&href=${url}`}><FaFacebookSquare className=' text-[#3b5998] w-12 h-auto'/> </a>
<a target='_blank' rel='noreferrer' href="/"><FaTwitterSquare className=' text-[#00acee] w-12 h-auto'/> </a>
<a target='_blank' rel='noreferrer' href="/"><FaRedditSquare className=' text-[#ff4500] w-12 h-auto'/> </a>
<a target='_blank' rel='noreferrer' href="/"><FaWhatsappSquare className=' text-[#25D366] w-12 h-auto'/> </a>

    </div>
  )
}

export default SocialShareButton