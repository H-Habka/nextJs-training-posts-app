import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-gray-800 flex justify-center items-center flex-col p-12 gap-5">
            <div className="rounded-full overflow-hidden w-52 h-52">
                <Image
                    src="/images/profile.jpg"
                    alt="profile"
                    width={208} 
                    height={208}
                />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-500 text-center">Hi I am Hossien</h1>
            <p className="text-gray-500 max-w-[50ch] text-center font-bold">
                I blog about web development especially frontend frameworks
                like Angular and React
            </p>
        </div>
    );
};

export default Hero;
