import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        toast.promise(
            axios
                .post("/api/contact", data),
            {
                loading: "Saving...",
                success: (res) => {
                    return <b>{res.data.message}</b>;
                },
                error: (err) => {
                    console.log({err})
                    return <b>{err.response.data.message}</b>;
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="bg-slate-200 flex flex-col gap-3 p-4 rounded"
        >
            <Toaster />
            <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 ">
                How Can I Help You
            </h1>
            <div className="flex gap-2 mt-4 xs:flex-row flex-col">
                <div className="w-full xs:w-1/2">
                    <CustomInput
                        className=""
                        register={register}
                        name="email"
                        type="email"
                    />
                </div>
                <div className="w-full xs:w-1/2">
                    <CustomInput
                        className=""
                        register={register}
                        name="name"
                        type="text"
                    />
                </div>
            </div>
            <label>
                <p className="text-2xl text-gray-800 font-bold my-2">
                    Your Message
                </p>
                <textarea
                    {...register("message")}
                    rows="6"
                    className="w-full p-2 font-bold text-gray-600 resize-none rounded focus:border focus:border-gray-500 focus:outline-none"
                ></textarea>
            </label>
            <div className="flex justify-end">
                <CustomButton text="Send Message" />
            </div>
        </form>
    );
};

export default ContactForm;
