import React,{useEffect} from "react";
import MainLayout from "../../components/MainLayout";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {login} from  '../../services/index/users.js'
import { useSelector,useDispatch } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";
const LoginPage = () => {
 const userState=useSelector(state=>state.user)
const dispatch=useDispatch()
const navigate=useNavigate()

 const {mutate,isLoading}=useMutation({
    mutationFn:({email,password})=>{
        return login({email,password})
    },onSuccess:(data)=>{
dispatch(userActions.setUserInfo(data))
localStorage.setItem('account',JSON.stringify(data))
    },onError:(error)=>{
        toast.error(error.message)
        console.log(error)
    }
})
    console.log(userState.userInfo)
useEffect(()=>{
if(userState.userInfo){
navigate('/')
}
},[navigate,userState.userInfo])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "" },
mode:"onChange"  });


  const submitHandler = (data) => {
const {email,password}=data  
  mutate({email,password})
  };
  console.log(errors)

  return (
    <MainLayout>
      <section className=" container mx-auto px-5 py-10">
        <div className=" w-full max-w-sm mx-auto">
          <h1 className=" text-center   text-dark-soft text-3xl font-semibold ">
            Sign In
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
      
            <div className=" flex flex-col mb-6  w-full">
              <label
                htmlFor="email"
                className=" text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register('email',{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Enter a valid email"},required:{value:true,message:"email is required"}})}

                placeholder=" Enter Email"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${errors.email? " border-red-500":"border-[#c3cad9]"}`} 
              />
               {errors.email?.message && (
                <p className={`  text-red-500 text-xs mt-1`} >{errors.email?.message}</p>
              )}
            </div>
            <div className=" flex flex-col mb-6  w-full">
              <label
                htmlFor="password"
                className=" text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                {...register('password',{
                    required:{value:true,message:"Password is required"},
                    minLength:{
                        value:6,
                        message:"password length must be least 6 character"
                    }
                })}

                placeholder=" Enter Password"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${errors.password? " border-red-500":"border-[#c3cad9]"}`} 
              />
               {errors.password?.message && (
                <p className={`  text-red-500 text-xs mt-1`} >{errors.password?.message}</p>
              )}
            </div>
     
        <Link
          to={"/forget-password"}
          className=" text-sm font-semibold text-primary  "
        >
          Forget password?
        </Link>
        <button
        disabled={!isValid || isLoading}
type="submit"    
className=" bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg w-full my-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Sign In
        </button>
        <p className=" text-sm font-semibold text-[#5a7184]">
          You have an acount?{" "}
          <Link to={"/register"} className=" text-primary ">
           Register now
          </Link>
        </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
