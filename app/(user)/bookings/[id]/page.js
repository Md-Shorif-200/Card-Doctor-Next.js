import Bookings_Form from "@/Comonents/User/Bookings/Bookings_Form";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function checkoutForm({params}) {

     const serviceId = await params.id;
   const res = await fetch(`${baseUrl}/api/services/${serviceId}`);
   const serviceData = await res.json();


  return (
    <div>
       <Bookings_Form serviceData={serviceData}></Bookings_Form>
    </div>
  )
}
