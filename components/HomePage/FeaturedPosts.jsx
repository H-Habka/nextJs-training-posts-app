import {PostsGrid} from '../../components'


const FeaturedPosts = ({postsData}) => {

  if(!postsData)return (<p>...Loading</p>)
  return (
    <div className='p-10 md:p-20'>
      <div className='text-center sm:text-5xl md text-4xl text-gray-900 font-bold mb-20'>Featured Posts</div>
      <PostsGrid postsData={postsData}/>
    </div>
  )
}


export default FeaturedPosts