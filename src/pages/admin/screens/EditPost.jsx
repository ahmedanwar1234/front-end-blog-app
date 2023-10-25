import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getSinglePost, updatePost } from "../../../services/index/posts";
import { Link, useParams } from "react-router-dom";
import ArticleDetailSkeleton from "../../../components/crop/AriticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import { stables } from "../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {AiOutlineEdit}from 'react-icons/ai'
const EditPost = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [body, setbody] = useState('')
  const [title, setTitle] = useState('')


  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    onSuccess:(data)=>{
setbody(data.caption)
setTitle(data?.title)
    },
    queryKey: ["blog", slug],
  });




  const {
    mutate: mutateUpdatePostDetail,
    isLoading: isLoadingUpdatePostDetail,
  } = useMutation({
    mutationFn: ({ updateData, slug, token }) => {
      return updatePost({
        updateData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
   
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Post is updated");
     
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setInitialPhoto(data?.photo);
    }
  
    
  }, [data, isError, isLoading]);

  const handleFileChange = (e) => {
    const file = e.target.files[0]
        setPhoto(file);
  };

  const handleUpdatePost = async () => {
    let updateData = new FormData();

    if (!initialPhoto && photo) {
    
      updateData.append("postPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );
console.log(picture)
      updateData.append("postPicture", picture);
    }

    updateData.append("document", JSON.stringify({caption:body,title }));


    mutateUpdatePostDetail({
      updateData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Post picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="postPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : initialPhoto ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : (
                <div className="w-full min-h-[200px] bg-blue-50/50 flex justify-center items-center">
                  <HiOutlineCamera className="w-7 h-auto text-primary" />
                </div>
              )}
            </label>
            <input
              type="file"
              className="sr-only"
              id="postPicture"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5"
            >
              Delete Image
            </button>
            <div className="mt-4 flex gap-2">
              {data?.categories?.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div> 
           <div className=" flex justify-center">
           <h1 className="  relative  text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                   <label htmlFor="" className="   flex gap-x-2 items-center text-start text-primary  text-lg"><AiOutlineEdit className=" text-black text-xl"/>title :</label>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="  Change Caption here" className="   mx-auto input input-bordered input-success w-full max-w-xs" />
                       </h1>
           </div>
         
           <div className=" my-5 space-y-4 flex flex-col justify-center items-center gap-y-3 w-full">
          <div>
          <label htmlFor="" className="    text-start text-primary flex items-center gap-x-2   text-lg"><AiOutlineEdit className=" text-black text-xl"/>Caption :</label>

<input onChange={(e)=>setbody(e.target.value)} value={body} type="text" placeholder=" Change Caption here" className="   mx-auto input input-bordered input-success w-full max-w-xs" />

          </div>
           </div>

            <button
              disabled={isLoadingUpdatePostDetail}
              type="button"
              onClick={handleUpdatePost}
              className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Update Post
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPost;