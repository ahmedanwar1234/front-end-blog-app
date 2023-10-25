import React from 'react'
import { Link } from 'react-router-dom'
import { images, stables } from '../../../constants'

const Suggested = ({className,header,posts=[],BsTags}) => {
    console.log(BsTags)

  return (
    <div className={` w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg p-4 ${className}`}>

<h2 className=' font-roboto font-medium text-dark-hard  md:text-xl'>{header}</h2>
<div className=' grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:flex lg:flex-col'>
{posts.map((item,index)=>{
 return   <div key={index} className=' relative flex space-x-3 flex-nowrap items-center'>
     <Link to={`/block/${item.slug}`} className=' absolute top-0 left-0 bottom-0 w-full h-full z-10'></Link>
    <img src={(item.photo) ? (stables.UPLOAD_FOLDER_BASE_URL + item.photo) : (images.samplePostImage)} alt="laptop" className=' aspect-square object-cover rounded-lg w-1/5 ' />

<div>
    <h3 className='  text-sm font-roboto text-dark-soft font-medium  md:text-base  lg:text-lg '>
    <Link to={`/block/${item.slug}`}>

        {item.title}
    </Link>
        
    </h3>
    <span className=' text-xs  opacity-60'>{new Date(item.createAt).toLocaleDateString("en-US",{day:'numeric' ,month:'short',year:'numeric'})}</span>
</div>
    </div>
})}

</div>
<h2 className='  font-roboto font-medium  text-dark-hard mt-8 md:text-xl'>Tags</h2>
{BsTags.length === 0  ? <p className='  text-sm font-bold mt-2 text-primary'> =={"> "}   There is not tags for this post</p> :(


<div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
    {BsTags?.map((item,index)=>{
return <Link key={index} to={'/'} className=' inline-block px-5 py-3  bg-[#1565D8] text-white rounded-md font-roboto text-xs  md:text-sm'>{item}</Link>
    })}
</div>
)}

    </div>
  )
}

export default Suggested