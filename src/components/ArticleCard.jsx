import React from 'react'
import {images, stables} from '../constants'
import {PiSealCheckBold}from 'react-icons/pi'
import { Link } from 'react-router-dom'
const ArticleCard = ({className,post}) => {
  console.log(post)
  
  return (
    <div className={`   ${className}  rounded-xl overflow-hidden  shadow-2xl`}>
      <Link className='  w-full md:w-52  ' to={`/block/${post.slug}`}>  <img src={post.photo?  stables.UPLOAD_FOLDER_BASE_URL + post.photo : (images.samplePostImage)} alt="title" className=' w-full object-cover object-center h-auto md:h-52 ' /></Link>

<div className=' p-7  '>
  
<Link className='  w-full md:h-52 ' to={`/block/${post.slug}`}>

  
<div className=' '>


<h1 className=' text-xl md:text-2xl text-dark-soft font-semibold '>{post.title}</h1>
<p className=' text-dark-light mt-3  leading-7 md:text-lg '>{post.caption}</p>
</div>
 
</Link>
<div className=' flex items-center  mt-5 gap-x-5'>

<div className=' relative'>
<img className=' relative z-10  rounded-full  w-12' src={post.user.avatar? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar :images.userImage} alt="" />
</div>
<div className=' flex flex-col justify-between gap-y-1'>
<h1 className=' font-semibold text-dark-soft  text-sm  uppercase'>{post.user.name}</h1>
<div className=' flex gap-x-3 justify-center items-center'>
    <PiSealCheckBold className={` ${post.user.verified ? "bg-green-700 rounded-full text-white":" bg-red-500 rounded-full text-white"}  text-xl`} />
    <h2 className=' italic  text-sm text-dark-light'>{post.user.verified ?"Verified":"underVerified"} Writer</h2>
</div>

</div>
  <h2 className=' flex-1  font-semibold whitespace-nowrap text-dark-light text-right'>{new Date(post.createdAt).getDate()} {new Date(post.createdAt).toLocaleString("default",{month:"short"})} </h2>

</div>

</div>
    </div>
  )
}

export default ArticleCard