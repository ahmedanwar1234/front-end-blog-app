import React, { useEffect, useMemo } from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducers/userReducers";
import toast from "react-hot-toast";


//------------------------


const ProfilePage = () => {
    //********************************************* */

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryCilent = useQueryClient();

  const {
    data: profileData,
    isLoading: profileLoading,
    
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });



  const { mutate, isLoading:updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {

      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password },
      });
    

    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryCilent.invalidateQueries(["profile"]);
      toast.success("profile is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });


  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },

} = useForm({
    defaultValues: { name: "", email: "", password: "" },
    values: useMemo(()=>{
return {
  name: profileLoading ? "" : profileData.name,
  email: profileLoading ? "" : profileData.email,
}
    },[profileData?.name,profileData?.email,profileLoading]),
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };


  //************************************************************** */
  return (
    <MainLayout>
      <section className="  container mx-auto px-5 py-10">
        <ProfilePicture avatar={profileData?.avatar} />
        <div className=" w-full max-w-sm mx-auto">
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
                {...register("name", {
                  

                  minLength: {
                    value: 2,
                    message: "name length must be at least 1 character",
                  },
                  required: { value: true, message: "name is required" },
                })}
                placeholder=" Enter name"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${
                  errors.name ? " border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.name?.message && (
                <p className={`  text-red-500 text-xs mt-1`}>
                  {errors.name?.message}
                </p>
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
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email",
                  },
                  required: { value: true, message: "email is required" },
                })}
                placeholder=" Enter Email"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${
                  errors.email ? " border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className={`  text-red-500 text-xs mt-1`}>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className=" flex flex-col mb-6  w-full">
              <label
                htmlFor="password"
                className=" text-[#5a7184] font-semibold block"
              >
                New Password (optional)
              </label>
              <input
                type="text"
                id="password"
                {...register("password")}
                placeholder=" Enter new Password"
                className={`placeholder:text-[#959ead]  text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border   ${
                  errors.password ? " border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.password?.message && (
                <p className={`  text-red-500 text-xs mt-1`}>
                  {errors.password?.message}
                </p>
              )}
            </div>

            <button
              disabled={!isValid || updateProfileIsLoading}
              type="submit"
              className=" bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg w-full mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
