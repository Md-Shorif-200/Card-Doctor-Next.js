"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import Container from "./Container";
import FacilitySection from "./Service/FacilitySection";
// carDoctor_preset
const inputStyle =
  "w-full bg-white text-black border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]";

const serviceOptions = [
  { id: 1, label: "Web Design", value: "Web Design" },
  { id: 2, label: "App Development", value: "App Development" },
  { id: 3, label: "SEO Optimization", value: "SEO Optimization" },
  { id: 4, label: "Digital Marketing", value: "Digital Marketing" },
  { id: 5, label: "UI/UX Design", value: "UI/UX Design" },
];

export default function AddServiceForm() {
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      facility: [{ name: "", details: "" }],
    },
  });

  const onSubmit = async (formData) => {
    console.log("✅ Final Form Data:", formData);
  };

  return (
    <div className="bg-[#F3F3F3] py-20">
      <Container>
        <div className="w-full max-w-3xl mx-auto rounded-2xl p-8 md:p-12 bg-white shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <input
                type="text"
                placeholder="Service Title"
                {...register("service_title", {
                  required: "Title is required",
                })}
                className={inputStyle}
              />
              {errors.service_title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service_title.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <input
                type="number"
                placeholder="Service Price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price cannot be negative" },
                  valueAsNumber: true,
                })}
                className={`${inputStyle} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Upload Service Image
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("service_image", {
                  required: "Image is required",
                })}
                className={inputStyle}
              />
              {errors.service_image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service_image.message}
                </p>
              )}
            </div>

            {/* Facility Section */}
            <FacilitySection
              control={control}
              register={register}
              errors={errors}
              serviceOptions={serviceOptions}
            />

            {/* Description */}
            <div>
              <textarea
                rows="4"
                placeholder="Service Description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 50,
                    message: "Description must be at least 50 characters",
                  },
                })}
                className={inputStyle}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="reset"
                className="bg-gray-500 rounded-xs text-white px-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="primary_btn"
              >
                {isSubmitting ? "Submitting..." : "Add Service"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
