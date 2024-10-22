import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../assets/Images/google.png";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import toast from "react-hot-toast";
import { ImageUpload } from "../Utils";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
function SignUp() {
  const { loading, setLoading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const { createUser, SignUpWithGoogle, updateUserProfile, saveUser } =
    useContext(AuthContext);
  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const image = form.image.files[0];
    const photo = await ImageUpload(image);
    const password = form.password?.value;
    const userInfo = {
      name,
      email,
      photo,
      role: "student",
      status: "verified",
    };
    await axiosPublic
      .post(`/users`, userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    createUser(email, password)
      .then((res) => {
        updateUserProfile(name, photo);
        if (res.user) {
          toast.success("Successfully Sign Up!!");
          setLoading(false);
          saveUser(res.user);
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignUp = () => {
    SignUpWithGoogle().then((res) => {
      if (res.user) {
        toast.success("Successfully Sign Up!!");
        saveUser(res.user);
        navigate(from);
      }
    });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sign Up!</h1>

          <p className="mt-4 text-gray-500">
            To continue enjoying our services, please sign in to your account.
          If you are new here, consider signing up to join our community.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleSignUp}
            action="#"
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label className="sr-only">Name</label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <input
              type="file"
              name="image"
              className="file-input file-input-ghost bg-gray-100 w-full rounded-full"
            />

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <Link
                  to="/signIn"
                  className="underline text-[#7330FF]"
                  href="#"
                >
                  Sign In
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="inline-block w-full  bg-[#7330FF] rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin mx-auto  " />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <button
            onClick={handleGoogleSignUp}
            className="btn w-full mt-4 rounded-full"
          >
            Sign Up with Google
            <img src={google} className="w-6" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
