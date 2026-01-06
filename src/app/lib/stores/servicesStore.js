import { create } from 'zustand';

const normalizeServiceResponse = (apiResponse) => {
  //  centralized mapper 
  if (!apiResponse) return [];

  
  if (Array.isArray(apiResponse.data)) return apiResponse.data;

  
  return Array.isArray(apiResponse) ? apiResponse : [];
};

const useServicesStore = create((set) => ({
  services: [],
  loading: false,
  error: null,

  fetchServices: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}services/list?status=1`,
        { cache: 'no-store' }
      );

      if (!res.ok) throw new Error('Failed to fetch services');

      const data = await res.json();
      const services = data?.data || data || [];


      set({ services, loading: false });
    } catch (error) {
      console.error('Error fetching services:', error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useServicesStore;
