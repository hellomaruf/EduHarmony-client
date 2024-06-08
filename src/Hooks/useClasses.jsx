import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

function useClasses() {
  const { user, loading} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const {
    data: classes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const { data } = await axiosPublic.get("/allClassForHome");
      return data;
    },
  });
  return { classes, isLoading, refetch };
}

export default useClasses;
