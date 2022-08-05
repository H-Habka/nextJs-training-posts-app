const CustomButton = ({ text, type = "submit" }) => {
    return (
        <button className="bg-violet-700 text-slate-300 p-2 text-lg font-bold rounded hover:text-violet-700 hover:bg-slate-400">
            {text}
        </button>
    );
};

export default CustomButton;
