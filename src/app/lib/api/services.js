import axiosClient from "./axiosClient";

export const servicesAPI = {
  getAll: () =>
        axiosClient.get('/services/list'),
  getBySlug: (id) =>
        axiosClient.get(`/services/findby${id}`),
};
