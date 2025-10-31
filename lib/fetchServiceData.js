// "use server"
// import { revalidatePath } from "next/cache";

export async function fetchServiceData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/services`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }

    const data = await response.json();
    //  revalidatePath('/services')
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
}
