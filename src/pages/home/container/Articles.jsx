import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import {BiSolidRightArrowAlt}from 'react-icons/bi';
import { isError, useQuery } from '@tanstack/react-query';
import { getPosts } from '../../../services/index/posts';
import toast from 'react-hot-toast';
import AriticleCardSkeleton from '../../../components/crop/AriticleCardSkeleton';
import ErrorMessage from '../../../components/ErrorMessage';
import { Error } from '@mui/icons-material';

const Articles = () => {
  const {data,isLoading,isError,errorMessage}=useQuery({
    queryFn:()=>{
      return getPosts()
    },queryKey:['posts'],
    onError:(error)=>{
      toast.error(error.message);
      console.log(error)
    }

  })

  return (
    <section className=' container mx-auto   '>
<div className='mx-auto grid    md:grid-cols-2 xl:grid-cols-3 xl:gap-x-7  justify-center   md:gap-x-5 gap-y-5 px-5 py-10'>
{isLoading ?
 [...Array(3)].map((item,index)=><AriticleCardSkeleton key={index} className={' md:w-[360px] w-full '}/>): isError ?<ErrorMessage message={'cant get the fetch data'}/>:(


data?.data.map((post)=>{
 return <ArticleCard key={post._id} post={post} className={' md:w-[450px] w-full '}/>


}))}

</div>
<div className='   justify-center text-[#1565D8] flex  '>
<div className=' group  border-4 border-[#1565D8]  rounded-lg px-3 py-3 flex justify-center gap-x-2 items-center'>
<button className=' font-bold text-2xl'>More articles</button>
<BiSolidRightArrowAlt className=' text-4xl  group-hover:translate-x-3 transition duration-300 '/>
</div>

</div>
    </section>
  )
}

export default Articles