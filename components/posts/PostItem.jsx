import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
    const { title, image, slug, excerpt, date,id } = post;

    let formatedDate = new Date(date).toLocaleDateString('en-US',{
      day : "numeric",
      month : "long",
      year : "numeric"
    })


    return (
        <li className="bg-gray-900">
            <Link href={`/posts/${id}`}>
                <a>
                    <div>
                        <Image
                            src={`/images/posts/${image}`}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className="p-6 items-center justify-center flex-col flex gap-3">
                        <h1 className="text-2xl font-bold text-gray-300">{title}</h1>
                        <time className="text-gray-400 text-opacity-70 italic">{formatedDate}</time>
                        <p className="text-gray-300 max-w-[35ch] text-center">{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
