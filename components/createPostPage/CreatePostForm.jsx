import {CustomButton,CustomInput} from "../../components";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";


const CreatePostForm = () => {

  const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        toast.promise(
            axios
                .post("/api/posts", data),
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
            <h1 className="mx-4 text-center text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 ">
                Create New Post
            </h1>
            <div className="flex gap-2 mt-4 sm:flex-row flex-col ">
                <div className="w-full sm:w-1/2">
                    <CustomInput
                        className=""
                        register={register}
                        name="title"
                        type="text"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <CustomInput
                        className=""
                        register={register}
                        name="image"
                        type="text"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <CustomInput
                        className=""
                        register={register}
                        name="date"
                        type="date"
                    />
                </div>
            </div>
            <label>
                <p className="text-2xl text-gray-800 font-bold my-2">
                    post excerpt
                </p>
                <textarea
                    {...register("excerpt")}
                    rows="6"
                    className="w-full p-2 font-bold text-gray-600 resize-none rounded focus:border focus:border-gray-500 focus:outline-none"
                ></textarea>
            </label>
            <div className="flex justify-end">
                <CustomButton text="Save Post" />
            </div>
        </form>
  )
}

export default CreatePostForm