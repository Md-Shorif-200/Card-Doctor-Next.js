import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2";


export default function ServiceCard({service}) {
  return (
    <div>
            <div
              key={service?._id}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {/* --- Image Section with Hover Zoom --- */}
              <div className="relative w-full h-60 bg-gray-100 overflow-hidden">
                <Image
                  src={service?.img}
                  alt={service?.title}
                  fill
                  className="object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* --- Overlay Effect on Hover --- */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  <Link
                    href={`/services/${service._id}`}
                    className="flex items-center gap-2 bg-[#FF3811] text-white px-4 py-2 rounded-full text-sm font-medium transition hover:bg-red-600"
                  >
                    View Details <HiArrowLongRight className="text-lg" />
                  </Link>
                </div>
              </div>

              {/* --- Content --- */}
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-gray-800 capitalize group-hover:text-[#FF3811] transition">
                  {service?.title}
                </h2>

                <p className="text-lg font-medium text-[#FF3811] mt-1 capitalize">
                  Price: ${service?.price}
                </p>
              </div>
            </div>
    </div>
  )
}
