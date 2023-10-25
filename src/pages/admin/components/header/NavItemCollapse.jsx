import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavItemCollapse = ({title,children,icon,name,setActiveNavName,activeNavName}) => {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    if(activeNavName !==name){
      setIsChecked(false)
    }

  },[activeNavName,name])
  return (
<div className=" bg-transparent collapse collapse-arrow min-h-0  py-2   ">
  <input type="checkbox" className=' min-h-0 py-0' 
  checked={name === activeNavName}
  onChange={()=>{
    setActiveNavName(name);
    setIsChecked(!isChecked)
  }}
  /> 
  <div className={`collapse-title text-xl font-medium min-h-0 flex gap-x-2 py-0 pl-0 items-center ${name=== activeNavName ?" font-bold text-primary" :"  font-bold text-[#A5A5A5] "}`}>
    {icon}
   {title}
  </div>
  <div className="collapse-content"> 
   <div className=' mt-2 flex flex-col gap-y-2'>
  {children}
   </div>
  </div>
</div>
  )
}

export default NavItemCollapse