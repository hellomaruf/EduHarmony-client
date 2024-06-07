import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";

function useClasses() {
  const { user, loading} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const {
    data: classes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "classes",
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const { data } = await axiosSecure.get("/allClassesForAdmin");
      return data;
    },
  });
  return { classes, isLoading, refetch };
}

export default useClasses;
