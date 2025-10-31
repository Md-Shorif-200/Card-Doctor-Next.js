"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function DeleteBookings({ id }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be Deleted This Data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        try {
          const res = await fetch(`${baseUrl}/api/bookings/${id}`, {
            method: "DELETE",
          });

          const data = await res.json();

          if (data?.acknowledged && data?.deletedCount > 0) {
            router.refresh();
            return true;
          } else {
            throw new Error("Delete failed");
          }
        } catch (error) {
          Swal.showValidationMessage(` ${error.message}`);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Data deleted successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div>
      <button
        onClick={() => handleDelete(id)}
        className="text-red-600 hover:text-[#FF3811] transition mt-6.5"
        title="Delete"
      >
        <FaTrashAlt size={18} />
      </button>
    </div>
  );
}
