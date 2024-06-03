import { useLoaderData } from "react-router-dom";
import { ImageUpload } from "../../../Utils";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

function UpdateClass() {
  const loadedData = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const id = loadedData?._id;
  console.log(loadedData);
  const mutation = useMutation({
    mutationFn: (NewClass) => {
      return axiosSecure.patch(`/updateClass/${id}`, NewClass);
    },
    onSuccess: (data) => {
      // Boom baby!
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Class Update Successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.files[0];
    const photo = await ImageUpload(image);
    console.log(id, title, price, photo);
    const updateInfo = {
      title,
      price,
      photo,
    };
    mutation.mutate(updateInfo);
  };
  return (
    <div>
      <h2 className="text-3xl mb-8 font-semibold">Update Your Class</h2>
      <form onSubmit={handleUpdate} action="">
        <div className="grid grid-cols-6 gap-4 col-span-full ">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-lg font-medium">
              Title
            </label>
            <input
              required
              name="title"
              defaultValue={loadedData?.title}
              type="text"
              placeholder="Enter a Title"
              className="w-full focus:bg-base-200 focus:border-[#7330ff]  rounded-md  p-2 outline-none border"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-lg font-medium">
              Price
            </label>
            <input
              required
              name="price"
              defaultValue={loadedData?.price}
              type="number"
              placeholder="Enter Price"
              className="w-full focus:bg-base-200 focus:border-[#7330ff] rounded-md p-2 outline-none border "
            />
          </div>
        </div>
        <input
          type="file"
          name="image"
          //   defaultValue={loadedData?.photo}
          className="file-input mt-4 file-input-ghost bg-gray-100 rounded-full"
        />
        <div className="mt-4">
          <input
            className="bg-[#7330ff] rounded-full hover:bg-[#8b56ff] btn text-white   py-2 font-bold"
            type="submit"
            value="Update Class"
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateClass;
