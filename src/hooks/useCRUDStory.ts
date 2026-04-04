import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface StoryData {
  title: string;
  author: string;
  image?: string;
}

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const listQuery = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const addStory = useMutation({
    mutationFn: async (data: StoryData) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateStory = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: StoryData }) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const deleteStory = useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    list: listQuery.data,
    listQuery,
    add: addStory.mutate,
    addStory,
    update: updateStory.mutate,
    updateStory,
    remove: deleteStory.mutate,
    deleteStory,
  };
};