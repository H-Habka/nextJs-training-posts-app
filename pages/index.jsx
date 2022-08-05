import { postsModel } from "../backend/postsModel";
import { Hero, FeaturedPosts } from "../components";

export default function Home({postsData}) {
    postsData = JSON.parse(postsData)
    return (
        <div className="bg-gray-500">
            <Hero />
            <FeaturedPosts postsData={postsData}/>
        </div>
    );
}


export async function getStaticProps(){
    
    const AllPosts = await postsModel.findAll();

    return {
        props:{
            postsData : JSON.stringify(AllPosts)
        },
        revalidate : 20
    }
}
