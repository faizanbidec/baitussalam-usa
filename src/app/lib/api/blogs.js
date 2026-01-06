import axiosClient from "./axiosClient";

export const blogsAPI = {
  getAll: () =>
      axiosClient.get('/blogs/list?status=1'),
};
