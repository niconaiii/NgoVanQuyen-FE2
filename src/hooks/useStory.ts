import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useStory = (id:any) => {
  return useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });
};