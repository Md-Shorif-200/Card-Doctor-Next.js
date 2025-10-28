import Image from "next/image";
import { X } from "lucide-react";

export default function Service_Details_Modal({ service, setShowDetailsModal }) {
  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setShowDetailsModal(false)}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-fadeIn border border-gray-100">
          {/* Close button */}
          <button
            onClick={() => setShowDetailsModal(false)}
            className="absolute top-4 right-4 bg-white shadow-md rounded-full p-2 text-gray-500 hover:text-gray-800 transition"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="w-full h-[260px] relative">
            <Image
              src={service?.service_image}
              alt={service?.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-between p-4 text-white">
              <h2 className="text-xl font-semibold">{service?.title}</h2>
              <span className="bg-[#FF3811] text-white px-3 py-1 rounded-md text-sm font-medium shadow-md">
                ${service?.price}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed text-base">
              {service?.description || "No description available."}
            </p>

            {/* Facility Section */}
            {service?.facility?.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Facilities Included
                </h3>
                <ul className="space-y-2">
                  {service.facility.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-2 h-2 bg-[#FF3811] rounded-full mt-1"></span>
                      <div>
                        <p className="font-medium text-gray-800">{f.name}</p>
                        <p className="text-gray-500">{f.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">{service?.email}</p>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="bg-[#FF3811] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#e2330f] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
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
