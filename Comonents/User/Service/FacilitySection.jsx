"use client";
import { useFieldArray, Controller } from "react-hook-form";
import Select from "react-select";

const inputStyle =
  "w-full bg-white text-black border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]";

export default function FacilitySection({
  control,
  register,
  errors,
  serviceOptions,
}) {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "facility",
  });

  const selectedValues = fields.map((f) => f.name);

  const getAvailableOptions = (index) =>
    serviceOptions.filter(
      (option) =>
        !selectedValues.includes(option.value) ||
        fields[index].name === option.value
    );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Facilities</h3>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="p-4 border border-gray-200 rounded-lg space-y-3 bg-gray-50"
        >
          {/* Service Select */}
          <Controller
            name={`facility.${index}.name`}
            control={control}
            rules={{ required: "Service name is required" }}
            render={({ field: { onChange, value } }) => (
              <Select
                options={getAvailableOptions(index)}
                placeholder="Select Service"
                value={
                  serviceOptions.find((opt) => opt.value === value) || null
                }
                onChange={(selected) => {
                  onChange(selected?.value || "");
                  update(index, {
                    ...fields[index],
                    name: selected?.value || "",
                  });
                }}
                className="text-black"
              />
            )}
          />
          {errors.facility?.[index]?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.facility[index].name.message}
            </p>
          )}

          {/* Facility Details */}
          <textarea
            rows="3"
            placeholder="Enter facility details"
            {...register(`facility.${index}.details`, {
              required: "Details are required",
            })}
            className={inputStyle}
          />
          {errors.facility?.[index]?.details && (
            <p className="text-red-500 text-sm mt-1">
              {errors.facility[index].details.message}
            </p>
          )}

          {/* Remove Button */}
           <div className="flex justify-end">
             {index > 0 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600 text-sm font-medium hover:underline"
            >
              Remove
            </button>
          )}
           </div>
        </div>
      ))}

      {/* Add More Facility Button */}
      <div className="flex justify-end">
          <button
        type="button"
        onClick={() => append({ name: "", details: "" })}
        disabled={selectedValues.length >= serviceOptions.length}
        className={`bg-[#FF3811] w-[50px] text-3xl text-white rounded-md transition ${
          selectedValues.length >= serviceOptions.length
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#e3330f]"
        }`}
      >
        +  
      </button>
      </div>
    </div>
  );
}
