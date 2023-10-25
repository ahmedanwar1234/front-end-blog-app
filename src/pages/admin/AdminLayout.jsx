import React, { useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router'
import { getUserProfile } from '../../services/index/users';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AdminLayout = () => {
  const userState = useSelector((state) => state.user);
  const navigate=useNavigate()

  const {
    data: profileData,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess:(data)=>{
if(!data?.admin){
navigate('/')
toast.error('your are not allowed to access admin panel')
}
    },onError:(error)=>{
      console.log(error);
      navigate('/')
      toast.error('your are not allowed to access admin panel')

    }
  });

 

  if(profileLoading){
    return <div className=' flex  w-full h-screen  justify-center items-center'>
<span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
    </div>
  }
  return (
    <div className=' flex flex-col h-screen lg:flex-row'>

<Header/>
<main className=' w-full  bg-[#F9F9F9] flex p-4 lg-p-6'>
<Outlet/>

</main>
    </div>
  )
}

export default AdminLayout