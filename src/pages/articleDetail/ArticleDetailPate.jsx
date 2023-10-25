import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images, stables } from '../../constants'
import { Link, useParams } from 'react-router-dom'
import Suggested from './container/Suggested'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButton from '../../components/SocialShareButton'
import { useQuery } from '@tanstack/react-query'
import { getPosts, getSinglePost } from '../../services/index/posts'
import { generateHTML } from '@tiptap/react'
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragrapth from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import parse from 'html-react-parser'
import ArticleDetailSkeleton from './components/AritcleDetailSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import { useSelector } from 'react-redux'
import parseJsonToHtml from '../../utils/parseJsonToHtml'


const tagsData=[
'Medical',
'Lifestyle',
'Learn',
'Healthy',
'Food',
'Diet',
'Education',

]
const ArticleDetailPate = () => {
  const {slug}=useParams();
  const userState=useSelector(state=> state.user)
  const [breadCrumbsData, setBreadCrumbsData] = useState([])
  const [body, setbody] = useState(null)

const {data,isLoading,isError}=useQuery({
  queryFn:()=>{
   return getSinglePost({slug})
  },
  onSuccess:(data)=>{
    console.log(data);
    setBreadCrumbsData([{
      name:'Home',link:'/',
      
      
      },{name:'Blog',link:'/blog',},
      {name:'Article',link:`/blog/${data.slug}`,
      }])
setbody(  parseJsonToHtml(data?.body)  )
  },queryKey:['blog',slug]

})
const {data:postsData,}=useQuery({
  queryFn:()=>{
   return getPosts()
  },
queryKey:['posts']

})
console.log(data)
  return (
    <MainLayout>
      {isLoading ? <ArticleDetailSkeleton/> :isError?<ErrorMessage message="cant fetch the Article details"/> :
      
      
        <section className=' container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className=' flex-1'>
<BreadCrumbs data={breadCrumbsData} />
<img src={data?.photo ? (stables.UPLOAD_FOLDER_BASE_URL + data?.photo) : (images.samplePostImage)} alt={data?.title} className=' roundxl w-full  ' />

<div className=' mt-4 flex '>

{data?.categories?.map((category)=>{

return <Link className=' text-primary text-sm font-roboto inline-block mt-4 md:text-base ' to={`/blog?category=${category.name}`}>{category.name}</Link>
})}
</div>

<h1 className=' texxl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>{data?.title}</h1>
<div className=' mt-4 text-dark-soft'>
  {
    body
  }
</div>

<CommentsContainer className={'mt-10'} logginedUserId={userState?.userInfo?._id} comments={data?.comments} slug={data.slug}/>
            </article>
            <div>

            <Suggested className={' mt-8 lg:mt-0 lg:max-w-xs '} header={'Latest Articles'} posts={postsData.data} BsTags={data.tags}/>
            <div className=' mt-7'>
<h2 className=' font-roboto  font-medium text-dark-hard mb-4 md:text-xl'>Share on:</h2>
<SocialShareButton url={encodeURI('https://moonfo.com/')} title={encodeURIComponent('Client-Side and Server-Side explanaiton')}/>
            </div>
            </div>
        </section>
      }

    </MainLayout>
  )
}

export default ArticleDetailPate