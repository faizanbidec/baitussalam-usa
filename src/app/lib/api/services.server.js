import axios from "axios";

export async function getServiceById(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}services/findby/${slug}`, {
      cache: "no-store", // always fetch fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch service data with slug ${slug}`);
    }

    const data = await res.json();
    return data?.data || data;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function getAllServices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}services/list`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch all services");

    const data = await res.json();

    
    // Normalize data like your previous code
    return data?.data || data || [];

    
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}


export async function getServicesBySlug(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}services/findby/${slug}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch service with slug: ${slug}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    return null;
  }
}
  
export async function getAllPrograms() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}programs/list`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch all programs");

    const data = await res.json();

    // Normalize data like your previous code
    return data?.data || data || [];
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}

export async function getGalleryImages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}galleries/list`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch all galleries");

    const data = await res.json();

    // Normalize data like your previous code
    return data?.data || data || [];
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return [];
  }
}

export async function createContact(formData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 👈 ensures JSON body
      },
      body: JSON.stringify(formData), // 👈 converts to JSON
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: error.message };
  }
}

export async function getAllDonationCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}categories/list`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch all donation categories");

    const data = await res.json();

    
    // Normalize data like your previous code
    return data?.data || data || [];

    
  } catch (error) {
    console.error("Error fetching donation categories:", error);
    return [];
  }
}