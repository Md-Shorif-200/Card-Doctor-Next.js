"use client";
import bookingFormAction from "@/app/action/bookingFormAction";
import CommonBanner from "@/Comonents/CommonBanner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
const checkoutOutImg = "/assets/images/checkout/checkout.png";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";

const inputStyle =
  "w-full bg-white text-black border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]";

export default function Bookings_Form({ serviceData }) {
    console.log(serviceData);
    
  const { service_id, title, service_image, price, description, facility } = serviceData;
  const { data, status } = useSession();
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    bookingFormAction,
    null
  );



  useEffect(() => {
    if (state?.success && state?.result?.acknowledged && state?.result?.insertedId) {
      toast.success(state?.message);
      router.push("/my-bookings");
    } else if (state?.success === false) {
      toast.error(state?.message || "Something went wrong!");
    }
  }, [state, router]);
  
   



  return (
    <div>
      <CommonBanner
        Route="Home"
        Title="Booking form"
        Bg_img={checkoutOutImg}
      ></CommonBanner>
      <div className="bg-[#F3F3F3] py-20">
        <div className="w-full max-w-3xl mx-auto  rounded-2xl  p-8 md:p-12">
          <form action={formAction} className="space-y-6">
            <input type="hidden" name="service_id" value={service_id} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="price" value={price} />
            <input type="hidden" name="service_image" value={service_image} />

            <div>
              <input
                type="text"
                name="name"
                value={data?.user?.name}
                readOnly
                className={inputStyle}
                placeholder="Enter Your Name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="price"
                  value={price}
                  readOnly
                  className={inputStyle}
                  placeholder="price"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={data?.user?.email}
                  readOnly
                  className={inputStyle}
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  required
                  className={inputStyle}
                  placeholder="Enter Your Address"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  className={inputStyle}
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                className={inputStyle}
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex justify-center items-center gap-3 bg-[#FF3811] hover:bg-[#e3330f] text-white font-semibold py-2 rounded-lg transition"
            >
              {isPending ? (
                <>
                  <ImSpinner9 className="text-lg animate-spin" /> Processing...
                </>
              ) : (
                <>Confirm Book</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
