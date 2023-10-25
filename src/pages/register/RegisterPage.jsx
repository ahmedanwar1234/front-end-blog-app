import React,{useEffect} from "react";
import MainLayout from "../../components/MainLayout";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {signup} from  '../../services/index/users.js'
import { useSelector,useDispatch } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";
const RegisterPage = () => {
 const userState=useSelector(state=>state.user)
const dispatch=useDispatch()
const navigate=useNavigate()

 const {mutate,isLoading}=useMutation({
    mutationFn:({name,email,password})=>{
        return signup({name,email,password})
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
    watch,
  } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
mode:"onChange"  });


  const submitHandler = (data) => {
const {name,email,password}=data  
  mutate({name,email,password})
  };
  const password=watch('password')
  console.log(errors)

  return (
    <MainLayout>
      <section className=" container mx-auto px-5 py-10">
        <div className=" w-full max-w-sm mx-auto">
          <h1 className=" text-center   text-dark-soft text-3xl font-semibold ">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className=" flex flex-col mb-6  w-full">
              <label
                htmlFor="name"
                className=" text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name',{minLength:{value:2,message:"name length must be at least 1 character"},required:{value:true,message:"name is required"}})}
                placeholder=" Enter name"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${errors.name? " border-red-500":"border-[#c3cad9]"}`} 
              />
              {errors.name?.message && (
                <p className={`  text-red-500 text-xs mt-1`} >{errors.name?.message}</p>
              )}
            </div>
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
            <div className=" flex flex-col mb-6  w-full">
              <label
                htmlFor="confirmPassword"
                className=" text-[#5a7184] font-semibold block"
              >
                ConfirmPassword
              </label>
              <input
                type="text"
                id="confirmPassword"
                {...register('confirmPassword',{
                    required:{
                        value:true,
                    message:"Confirm password is required"
                    },
                    validate:(value)=>{
                        if(value!==password){
                            return "passwords do not match"
                        }
                    }
                })}

                placeholder=" Enter Confirm Password"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${errors.confirmPassword? " border-red-500":"border-[#c3cad9]"}`} 
              />
               {errors.confirmPassword?.message && (
                <p className={`  text-red-500 text-xs mt-1`} >{errors.confirmPassword?.message}</p>
              )}
            </div>

        <button
        disabled={!isValid || isLoading}
type="submit"    
className=" bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg w-full mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Register
        </button>
        <p className=" text-sm font-semibold text-[#5a7184]">
          You have an acount?{" "}
          <Link to={"/login"} className=" text-primary ">
            Login now
          </Link>
        </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
