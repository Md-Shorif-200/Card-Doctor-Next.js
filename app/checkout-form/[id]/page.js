import CheckOutForm from '@/Comonents/CheckOutForm'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function checkoutForm({params}) {

     const serviceId = await params.id;
   const res = await fetch(`${baseUrl}/api/services/${serviceId}`);
   const serviceData = await res.json();


  return (
    <div>
       <CheckOutForm serviceData={serviceData}></CheckOutForm>
    </div>
  )
}
