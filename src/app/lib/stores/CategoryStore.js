import { create } from 'zustand';

const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}categories/list`, {
        cache: 'no-store',
      });

      if (!res.ok) throw new Error('Failed to fetch categories');   
      const data = await res.json();
      const categories = data?.data || data || [];
      set({ categories, loading: false });
    } catch (error) {
      console.error('Error fetching categories:', error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCategoryStore;
