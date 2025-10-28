"use client";
import { deleteServiceData } from "@/app/action/deleteService";
import { useRouter } from "next/navigation";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function All_Service_Action({ service }) {
  const router = useRouter();

  const handleServiceDelete = async (id) => {
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
          const res = await deleteServiceData(id);
          if (res?.acknowledged && res?.deletedCount > 0) {
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
    <div className="flex mt-3 gap-5">
      <FaEye
        title="See Details"
        className="text-4xl cursor-pointer text-blue-600 hover:bg-blue-200 p-2 rounded-full "
      />
      <FaEdit
        title="Edit Service Data"
        className="text-4xl cursor-pointer text-green-600 hover:bg-green-200 p-2 rounded-full "
      />
      <MdDelete
        onClick={() => handleServiceDelete(service._id)}
        title="Delete Service Data"
        className="text-4xl cursor-pointer text-red-600 hover:bg-red-200 p-2 rounded-full "
      />
    </div>
  );
}
