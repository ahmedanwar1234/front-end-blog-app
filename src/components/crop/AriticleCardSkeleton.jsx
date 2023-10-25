import React from 'react'

const AriticleCardSkeleton = ({className}) => {
  return (
    <div className={`   ${className}  animate-pulse rounded-xl overflow-hidden  shadow-2xl`}>
<div className=' mb-5 px-3 flex mt-5 justify-between items-center'>
<div className=' flex gap-x-5'>

<div className=' relative'>
<div className=' w-9 h-9 mt-4 bg-slate-300 md:h-10 md:w-10 rounded-full '>
    {/* profile Image */}
</div>
</div>
<div className=' flex flex-col justify-between'>
<div className=' w-24 h-2  bg-slate-300 rounded-lg'>
    {/* users name */}
</div>
<div className=' w-16 h-2 mt-2 bg-slate-300 rounded-lg'>
    {/* verified status */}
</div>

</div>

</div>
</div>
{ /** image */}
<div className=' w-full   aspect-video bg-slate-300 ' >

</div>
<div className=' p-7  '>
  

<div className=' flex justify-between items-center'>

<div className=' w-56 h-2 mt-4 bg-slate-300 rounded-lg' >
    {/* title */}
</div>

<div className=' w-10 h-2 mt-4 bg-slate-300 rounded-lg'>
    {/* daate */}
</div>
</div>

<div className=' w-24 h-2 mt-4 bg-slate-300 rounded-lg'>
    {/* caption */}
</div>

</div>
    </div>  )
}

export default AriticleCardSkeleton