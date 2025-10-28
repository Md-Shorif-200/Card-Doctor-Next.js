"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import Container from "../../Container";
import FacilitySection from "./FacilitySection";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

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
  const { data: session } = useSession();
  const router = useRouter()
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

  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      const img_secure_url = data.secure_url;

    if (!response.ok) throw new Error("Image Upload failed");

      return img_secure_url;
    } catch (error) {
      console.log(error);
      toast.error("Somethings was wrong!");
      return null;
    }
  };

  const onSubmit = async (data) => {
    try {
      const file = data.service_image[0];
      const imgUrl = await uploadImageToCloudinary(file);

      if (!imgUrl) {
        toast.error("Image upload failed!");
        return;
      }

      const serviceData = {
        email: session.user.email,
        title: data.service_title,
        price: data.price,
        service_image: imgUrl,
        description: data.description,
        facility: data.facility,
      };

      const response = await fetch(`${baseUrl}/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });
      const result = await response.json();
       console.log(result);
         if(result.acknowledged == true && result.insertedId){
            toast.success('Sucessfully add service!')
            router.push('/all-service');
            reset()
         }
       
    } catch (error) {
      console.log(error);
    }finally{
      reset();
    }
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
                className="bg-gray-300 rounded-md  px-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="primary_btn flex items-center gap-1"
              >
                {isSubmitting ? <>
                  <ImSpinner9 className="animate-spin text-lg"/> Processing...
                </> : "Add Service"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
