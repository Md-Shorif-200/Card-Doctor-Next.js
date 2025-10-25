
import MyBookings from "@/Comonents/Service/MyBookings";
import { headers } from "next/headers";
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const fetchBookings = async () => {
    const res = await fetch(`${baseUrl}/api/services`,{
        headers : headers(),
    });

    const data = await res.json();
    return data
}
export default async function Page() {

    const  bookings = await fetchBookings();
     console.log(bookings);
     


  return <MyBookings data={bookings} />;
}
