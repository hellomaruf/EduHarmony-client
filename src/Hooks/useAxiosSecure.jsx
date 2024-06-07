import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";

const useAxiosSecure = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stoped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptops", status);
      if (status === 401) {
        // await logout();
        // navigate("/signin");
      }
      return Promise.reject(error);
    }
  );
  // useEffect(() => {
  //   axiosSecure.interceptors.response.use(
  //     (res) => {
  //       return res;
  //     },
  //     (error) => {
  //       console.log("error tracked in the interceptor", error.response);
  //       if (error.response.status === 401 || error.response.status === 403) {
  //         logout();
  //         navigate("/login");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
