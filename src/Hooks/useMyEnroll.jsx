import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";

function useMyEnroll() {
  const {user}= useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const {
    data: myEnrollClasses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "MyEnroll",
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myEnroll/${user?.email}`);
      return data;
    },
  });
  return { myEnrollClasses, isLoading, refetch };
}

export default useMyEnroll;