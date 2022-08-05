import PostHeader from "./PostHeader";

const PostContent = ({post}) => {
    return (
        <div className="bg-gray-300">
            <PostHeader post={post}/>
            <div className="overflow-hidden text-2xl font-semibold text-gray-800 p-6 md:p-10 text-justify">
                {post.excerpt}
                {post.excerpt}
                {post.excerpt}
                {`${post.excerpt} `}
                {post.excerpt}
                {post.excerpt}
                {post.excerpt}
                {post.excerpt}
                {post.excerpt}
                {post.excerpt}
            </div>
        </div>
    );
};

export default PostContent
