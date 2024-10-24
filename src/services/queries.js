import { useQuery } from "@tanstack/react-query";

import api from "../configs/api";

const useProducts = (steps) => {
  const queryFn = () => api.get(`products?page=${steps}&limit=6`);

  return useQuery({
    queryKey: ["products", steps],
    queryFn,
    keepPreviousData: true,
  });
};

export { useProducts };
