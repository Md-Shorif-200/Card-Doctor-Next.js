"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditBookingModal from "./EditBookingModal";


export default function EditBookinsButton({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="text-blue-600 hover:text-blue-800 transition"
        title="Update"
      >
        <FaEdit size={18} />
      </button>

      {/* Modal */}
      {isOpen && (
        <EditBookingModal
          booking={item}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
