"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const deleteServiceData = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/services/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    revalidatePath('/all-service')
    return data
     
  } catch (error) {
     console.log(error);
     return null
     
  }
};
