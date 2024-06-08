import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Services/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

function useRole() {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: role,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      return data.role;
    },
  });
  return [role, isLoading, refetch];
}

export default useRole;
