"use server"

import { revalidatePath } from "next/cache";

export const ServiceEditAction =   async (id,updateData) => {
    try {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/services/${id}`, {
      method: "PATCH",
        headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify(updateData),
    });

    const data = await res.json();
    revalidatePath('/all-service')
    return data
    } catch (error) {
         console.log(error);
         
    }
}