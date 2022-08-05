import { postsModel } from "../../backend/postsModel";
import { AllPosts } from "../../components";

const Posts = ({ postsData }) => {
    postsData = JSON.parse(postsData);
    return (
        <div>
            <AllPosts postsData={postsData} />
        </div>
    );
};

export async function getStaticProps() {
    const AllPosts = await postsModel.findAll();

    return {
        props: {
            postsData: JSON.stringify(AllPosts),
        },
        revalidate: 20
    };
}

export default Posts;
