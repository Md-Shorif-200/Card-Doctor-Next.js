"use client";

import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Image from "next/image";
import CommonBanner from "@/Comonents/CommonBanner";
const bookingImg = "/assets/images/checkout/checkout.png";


export default function MyBookings({ data = [] }) {
  const [bookings, setBookings] = useState(data);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookings(bookings.filter((b) => b._id !== id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleUpdate = (id) => {
    alert(`Update booking with ID: ${id}`);
  };

  return (
 <main>

     <CommonBanner
        Route="Home"
        Title="My Bookings"
        Bg_img={bookingImg}
      ></CommonBanner>

        <div className="min-h-screen bg-[#F3F3F3] py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
    

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th>#</th>
                  <th>Service Image</th>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 border-t border-gray-200"
                  >
                    <td className="text-gray-600">{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-200">
                          <Image
                            src={item.serviceImg}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="font-medium text-gray-800">{item.title}</td>
                    <td className="text-gray-700">${item.price}</td>
                    <td className="text-gray-700">{item.customerPhone}</td>
                    <td className="text-gray-700">{item.customerAddress}</td>
                    <td className="flex items-center gap-3  mt-5">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="Update"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-[#FF3811] transition"
                        title="Delete"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
 </main>
  );
}
