import { create } from 'zustand';

const useProgramsStore = create((set) => ({
  programs: [],
  loading: false,
  error: null,
  fetchPrograms: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}programs/list`, {
        cache: 'no-store',
      });

      if (!res.ok) throw new Error('Failed to fetch programs');

      const data = await res.json();
      const programs = data?.data || data || [];
      set({ programs, loading: false });
    } catch (error) {
      console.error('Error fetching programs:', error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProgramsStore;

