import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

function useAllEnroll() {
  const axiosPublic = useAxiosPublic();
  const { data: allEnroll, refetch } = useQuery({
    queryKey: "allPayment",
    queryFn: async () => {
      const { data } = await axiosPublic.get("/allPayments");
      return data;
    },
  });
 
  return { allEnroll, refetch };
}

export default useAllEnroll;
