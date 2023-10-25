import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {createComment,deleteComment,updateComment}from '../../services/index/comment'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
const CommentsContainer = ({className,logginedUserId,comments,slug}) => {
const querClient=useQueryClient()
const [affectedComment, setAffectedComment] = useState(null);
const user=useSelector(state=>state.user.userInfo)


const {mutate:mutateNewComent,isLoading:isLoadingNewComment,isError}=useMutation({
  mutationFn:({desc,slug,parent,replyOnUser,token})=>{
    return createComment({desc,slug,parent,replyOnUser,token})
  } ,onSuccess:()=>{
    toast.success('your comment is send successfully it will be visible after the confirmatio of the admin')
  }
,onError:(error)=>{
  toast.error(error.message);
  console.log(error)
}
})  

const {mutate:updateCommenthandler}=useMutation({
  mutationFn:({desc,commentId,token})=>{
    return updateComment({desc,commentId,token})
  } ,onSuccess:()=>{
    toast.success('your comment is updated successfully');
    querClient.invalidateQueries(['blog',slug])
    setAffectedComment(false)
  }
,onError:(error)=>{
  toast.error(error.message);
  console.log(error)
}
})  

const {mutate:mutateDeleteComment}=useMutation({
  mutationFn:({commentId,token})=>{
    return deleteComment({commentId,token})
  } ,onSuccess:()=>{
    toast.success('your comment is deleted successfully');
    querClient.invalidateQueries(['blog',slug])
    setAffectedComment(false)
  }
,onError:(error)=>{
  toast.error(error.message);
  console.log(error)
}
})  

 // this function will get the comment from the from and setComments with the comment and later comments
    const addCommentHandler=(value,parent=null,replayOnUser=null)=>{
 mutateNewComent({desc:value,parent,replayOnUser,token:user.token,slug})
    
    
    }
const updateCommentHandler =(value,commentId)=>{
  updateCommenthandler({desc:value,commentId,token:user.token})
 
}

const deletteCommentHandler=(commentId)=>{
  window.alert('confirm delete')
 mutateDeleteComment({commentId,token:user.token})
}



  return (
    <div className={`${className}`}>
<CommentForm 
btnLabel='Send'
 formSubmitHandler={(value)=>addCommentHandler(value)}
loading={isLoadingNewComment}
/>
<div className=' space-y-4 mt-8'>
  {
    comments?.map((comment,index)=>{
     return <Comment key={index} comment={comment} logginedUserId={logginedUserId}  affectedComment={affectedComment} setAffectedComment={setAffectedComment} AddComment={addCommentHandler} updateComment={updateCommentHandler} deletteComment={deletteCommentHandler} replies={comment.replies}/>
    })
  }


</div>

    </div>
  )
}

export default CommentsContainer