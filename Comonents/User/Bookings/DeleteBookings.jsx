"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
const  baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function DeleteBookings({ id }) {
 const router = useRouter() 
  const handleDelete = async (id) => {
    const res = await fetch(`${baseUrl}/api/bookings/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
        router.refresh();
    console.log(data);
  };

  return (
    <div>
      <button
        onClick={() => handleDelete(id)}
        className="text-red-600 hover:text-[#FF3811] transition "
        title="Delete"
      >
        <FaTrashAlt size={18} />
      </button>
    </div>
  );
}
