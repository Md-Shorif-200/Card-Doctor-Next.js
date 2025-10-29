import Image from "next/image";
import CommonBanner from "@/Comonents/CommonBanner";
import EditBookinsButton from "../Bookings/EditBookinsButton";
import DeleteBookings from "../Bookings/DeleteBookings";

const bookingImg = "/assets/images/checkout/checkout.png";

export default function MyBookings({ data }) {
     console.log(data);
     
  return (
    <main>
      <CommonBanner
        Route="Home"
        Title="My Bookings"
        Bg_img={bookingImg}
      ></CommonBanner>

      <div className="min-h-screen bg-[#F3F3F3] py-10">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
          {data?.length === 0 ? (
            <p className="text-center text-gray-500">No bookings found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full border border-gray-200">
                <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                  <tr>
                    <th>#</th>
                    <th>Service Image</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 border-t border-gray-200"
                    >
                      <td className="text-gray-600">{index + 1}</td>
                      <td>
                        <div className="avatar">
                          <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-200">
                            <Image
                              src={item.service_image}
                              alt={item.title}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="font-medium text-gray-800">
                        {item.title}
                      </td>
                      <td className="text-gray-700">${item.price}</td>
                      <td className="text-gray-700">{item.customerPhone}</td>
                      <td className="text-gray-700">{item.customerAddress}</td>
                      <td className="flex items-center gap-3  ">
                        <EditBookinsButton item={item}></EditBookinsButton>

                        <DeleteBookings id={item._id}></DeleteBookings>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
