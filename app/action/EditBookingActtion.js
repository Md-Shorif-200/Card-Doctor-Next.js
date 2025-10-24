"use server";

import { revalidatePath } from "next/cache";

export default async function EditBookingActtion(prevState,formData) {
  const booking_id = formData.get("booking_id");

  const payload = {
    customerPhone: formData.get("phone"),
    customerAddress: formData.get("address"),
    message: formData.get("message"),
  };

  console.log(payload);

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/my-bookings/${booking_id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    revalidatePath('/my-bookings')
    console.log("✅ Data successfully posted:", result);

    return {
      success: true,
      message: "data Updated  successfully",
      result,
    };
  } catch (error) {
    console.error("❌ Error posting data:", error);
    return { success: false, message: "Failed to update  data" };
  }
}
