import { postsModel } from "../../backend/postsModel";
import { PostContent } from "../../components";

const SinglePostPage = ({postData}) => {
    if(!postData) return 
    let SinglePost = JSON.parse(postData)

    return (
        <div className="px-6 xs:px-10 sm:px-14 md:px-24 lg:px-40 xl:px-48  ">
            <PostContent post={SinglePost}/>
            
        </div>
    );
};

export async function getStaticProps(context){
    const {postId} = context.params 
    const postData = await postsModel.findByPk(postId)
    return {
        props:{
            postData: JSON.stringify(postData)
        }
    }

}


export async function getStaticPaths(){
    return {
        paths:[],
        fallback:"blocking"
    }
}

export default SinglePostPage;
