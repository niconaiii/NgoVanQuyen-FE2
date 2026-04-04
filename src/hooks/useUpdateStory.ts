import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

interface StoryData {
  title: string;
  author: string;
}

export const useUpdateStory = () => {
  const queryClient = useQueryClient();
  const {id} = useParams()

  return useMutation({
    mutationFn: async (data: StoryData) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};
