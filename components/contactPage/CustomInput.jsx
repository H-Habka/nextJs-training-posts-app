const CustomInput = ({ register, name, type, className }) => {
    return (
        <label className={className}>
            <p className="text-2xl font-bold text-gray-800 my-2">{name}</p>
            <input
                {...register(name)}
                type={type}
                className="w-full p-1 rounded font-bold text-gray-600 focus:border focus:border-gray-500 focus:outline-none "
            />
        </label>
    );
};

export default CustomInput;
