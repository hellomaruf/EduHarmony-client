import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useClasses() {
  const axiosSecure = useAxiosSecure();
  const {
    data: classes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "classes",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allClassesForAdmin");
      return data;
    },
  });
  return { classes, isLoading, refetch };
}

export default useClasses;
