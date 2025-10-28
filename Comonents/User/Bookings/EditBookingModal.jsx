"use client";
import EditBookingActtion from "@/app/action/EditBookingActtion";
import { useActionState, useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function EditBookingModal({ booking, closeModal }) {
  const [formData, setFormData] = useState({
    name: booking.customerName || "",
    email: booking.customerEmail || "",
    price: booking.price || "",
    address: booking.customerAddress || "",
    phone: booking.customerPhone || "",
    message: booking.message || "",
  });

  const [state, formAction, isPending] = useActionState(EditBookingActtion, null);

   console.log(state);
   

useEffect(() => {
  if (state?.success) {
    closeModal();
  }
}, [state, closeModal]);


   




    // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-lg p-6 relative animate-fadeIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Edit Booking
          </h2>

          {/* Form */}
          <form action={formAction} className="space-y-6">
                           <input type="hidden" name="booking_id" value={booking._id} />
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                readOnly
                className={inputStyle}
                placeholder="Enter Your Name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  readOnly
                  className={inputStyle}
                  placeholder="price"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className={inputStyle}
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                  placeholder="Enter Your Address"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Your Message"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="w-1/2 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="w-1/2 bg-[#FF3811] hover:bg-[#e3330f] text-white font-semibold py-2 rounded-lg transition"
              >
                {isPending ? "Processing...." : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
