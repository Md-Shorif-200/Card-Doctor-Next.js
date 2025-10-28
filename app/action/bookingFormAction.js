"use server";

export default async function bookingFormAction(formData) {
  const {
    service_id,
    title,
    price,
    img,
    name,
    email,
    address,
    phone,
    message,
  } = Object.fromEntries(formData.entries());

  const payload = {
    service_id,
    title,
    price,
    serviceImg: img,
    customerName: name,
    customerEmail: email,
    customerAddress: address,
    customerPhone: phone,
    message,
  };

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to post data: ${res.statusText}`);
    }

    const result = await res.json();
    console.log(" Data successfully posted:", result);

    return {
      success: true,
      message: "Checkout data posted successfully",
      result,
    };
  } catch (error) {
    console.error(" Error posting data:", error);
    return { success: false, message: "Failed to post checkout data" };
  }
}
