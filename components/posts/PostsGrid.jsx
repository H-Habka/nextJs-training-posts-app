import PostItem from "./PostItem";

const PostsGrid = ({postsData}) => {

    return (
        <ul className="grid xs:grid-cols-auto15rem sm:grid-cols-auto20rem grid-cols-auto10rem  gap-6">
            {postsData?.map((post) => (
                <PostItem post={post} key={post.title}/>
            ))}
        </ul>
    );
};

export default PostsGrid;
