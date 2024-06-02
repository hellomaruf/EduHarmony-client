import { useContext } from "react";
import { AuthContext } from "../../../Services/AuthProvider";

function AddClass() {
  const { user } = useContext(AuthContext);
  const handleAddClass = () => {};
  return (
    <div className=" mr-8 h-[600px] flex items-center justify-center">
      <form
        onSubmit={handleAddClass}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-sm  border-2 bg-base-100 border-[#7330ff]">
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-medium">
                Name
              </label>
              <input
                required
                name="name"
                type="text"
                disabled
                defaultValue={user?.displayName}
                className="w-full border focus:bg-base-200 focus:border-[#7330ff]  rounded-md p-2 outline-none  "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-medium">
                Email
              </label>
              <input
                required
                name="bookName"
                defaultValue={user?.email}
                disabled
                type="text"
                placeholder="Enter Book Name"
                className="w-full border focus:bg-base-200 focus:border-[#7330ff]  rounded-md p-2 outline-none  "
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-lg font-medium">
                Title
              </label>
              <input
                required
                name="title"
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
                type="number"
                placeholder="Enter Price"
                className="w-full focus:bg-base-200 focus:border-[#7330ff] rounded-md p-2 outline-none border "
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full ">
              <div className="">
                <label htmlFor="firstname" className="text-lg font-medium">
                  Short Description
                </label>
                <textarea
                  required
                  name="description"
                  type="text"
                  placeholder="Enter a Short Description"
                  className="w-full focus:bg-base-200 focus:border-[#7330ff] rounded-md  p-2 outline-none border"
                />
              </div>
              <input
                type="file"
                name="image"
                className="file-input mt-4 file-input-ghost bg-gray-100 rounded-full"
              />
            </div>

            <div className="">
              <input
                className="bg-[#7330ff] rounded-full hover:bg-[#8b56ff] btn text-white   py-2 font-bold"
                type="submit"
                value="Add Book"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddClass;
