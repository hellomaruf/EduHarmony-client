import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
