import Logo from "./Logo";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="flex p-6 md:px-24 px-5 bg-gray-800">
            <Logo />
            <div className="grow" />
            <ul className="flex gap-2 md:gap-8 md:text-2xl text-lg font-bold text-slate-400">
                <li className=" flex gap-1">
                    <Link href="/createPost">
                        <span className="text-lg hover:scale-150 hover:text-red-600 cursor-pointer">
                            +
                        </span>
                    </Link>
                    <Link href="/posts">
                        <span className="hover:text-gray-900 cursor-pointer">
                            Posts
                        </span>
                    </Link>
                </li>
                <li className="hover:text-gray-900">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
