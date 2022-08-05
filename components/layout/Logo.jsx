import Link from "next/link";

const Logo = () => {
    return (
        <div className="text-base md:text-3xl text-slate-400 font-bold hover:text-gray-500">
            <Link href="/">Hous Next Blog</Link>
        </div>
    );
};

export default Logo;
