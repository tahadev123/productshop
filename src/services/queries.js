import { useQuery } from "@tanstack/react-query";

import api from "../configs/api";

const useProducts = () => {
  const queryFn = () => api.get("products?page=1&limit=8");

  return useQuery({ queryKey: ["products"], queryFn });
};

export { useProducts };
