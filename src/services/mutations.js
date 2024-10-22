import { useMutation } from "@tanstack/react-query";

import api from "../configs/api";

const useAddProduct = () => {
  const mutationFn = (data) => api.post("/products", data);

  return useMutation({ mutationFn });
};

export { useAddProduct };
