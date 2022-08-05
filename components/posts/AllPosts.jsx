import PostsGrid from "./PostsGrid";

const AllPosts = ({postsData}) => {
    return (
        <div className="md:p-20 p-6 xs:p-10 sm:p-14  bg-gray-500">
            <div className="mb-10 md:mb-20 text-gray-900 text-3xl sm:text-4xl md:text-6xl text-center font-bold">
                All Posts
            </div>
            <PostsGrid postsData={postsData} />
        </div>
    );
};

export default AllPosts;
