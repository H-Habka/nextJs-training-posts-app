import Image from "next/image";

const PostHeader = ({ post }) => {
    const { title, image } = post;
    return (
        <>
            <div className="flex items-center px-2 py-2">
                <div className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-violet-800 px-2 md:px-6 font-extrabold">
                    <p className="max-w-[10ch]">{title}</p>
                </div>
                <div className="grow"></div>
                <div className="pr-4">
                    <Image
                        src={`/images/posts/${image}`}
                        alt={title}
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <div className="h-2 w-11/12 font-bold bg-violet-400 mx-auto my-2 md:my-10" />
        </>
    );
};

export default PostHeader;
