"use client";

import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";
import { ServiceEditAction } from "@/app/action/ServiceEditAction";
import FacilitySection from "../User/Service/FacilitySection";

const serviceOptions = [
  { id: 1, label: "Web Design", value: "Web Design" },
  { id: 2, label: "App Development", value: "App Development" },
  { id: 3, label: "SEO Optimization", value: "SEO Optimization" },
  { id: 4, label: "Digital Marketing", value: "Digital Marketing" },
  { id: 5, label: "UI/UX Design", value: "UI/UX Design" },
];


export default function Service_Edit_Modal({ service, setShowEditModal }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      service_title: service?.title || "",
      price: service?.price || "",
      description: service?.description || "",
      facility: service?.facility || [{ name: "", details: "" }],
    },
  });

  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    if (!res.ok) throw new Error("Upload failed");
    return data.secure_url;
  };

  const onSubmit = async (data) => {
    try {
      let imgUrl = service.service_image;

      if (data.service_image?.[0]) {
        const uploaded = await uploadImageToCloudinary(data.service_image[0]);
        imgUrl = uploaded;
      }

      const updateData = {
        title: data.service_title,
        price: data.price,
        description: data.description,
        facility: data.facility,
        service_image: imgUrl,
      };

      const result = await ServiceEditAction(service._id, updateData);
      console.log("Server Response:", result);

        if(result.acknowledged = true && result.modifiedCount > 0) {
     toast.success("Service updated successfully!");
      setShowEditModal(false);
        }

 
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  const inputStyle =
    "w-full bg-white text-black border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setShowEditModal(false)}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 animate-fadeIn h-[80vh] overflow-y-auto">
          <button
            onClick={() => setShowEditModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Edit Service
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Service Title & Price */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Service Title"
                {...register("service_title", { required: "Title is required" })}
                className={inputStyle}
              />
              {errors.service_title && (
                <p className="text-red-500 text-sm">{errors.service_title.message}</p>
              )}

              <input
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price cannot be negative" },
                })}
                className={inputStyle}
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Update Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("service_image")}
                className={inputStyle}
              />
            </div>

            {/* Facility Section */}
            <FacilitySection
              control={control}
              register={register}
              errors={errors}
              serviceOptions={serviceOptions}
            />

            {/* Description */}
            <textarea
              rows="4"
              placeholder="Service Description"
              {...register("description", {
                required: "Description is required",
                minLength: { value: 50, message: "Description must be at least 50 characters" },
              })}
              className={inputStyle}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="bg-gray-300 rounded-md px-4 py-2 cursor-pointer"
              >
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="primary_btn flex items-center gap-1">
                {isSubmitting ? (
                  <>
                    <ImSpinner9 className="animate-spin text-lg" /> Updating...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

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
