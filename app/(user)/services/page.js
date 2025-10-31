export const dynamic = "force-dynamic";

import CommonBanner from "@/Comonents/CommonBanner";
import Container from "@/Comonents/Container";
import ServiceCard from "@/Comonents/User/Service/ServiceCard";
import { fetchServiceData } from "@/lib/fetchServiceData";
const service_bg_img = "/assets/images/checkout/checkout.png";


export default async function ServicesPage() {
  const servicesData = await fetchServiceData();

  return (
    <div>
      <CommonBanner
        Route="Home"
        Title="Services"
        Bg_img={service_bg_img}
      ></CommonBanner>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {servicesData?.map((data) => {
            return <ServiceCard key={data._id} service={data}></ServiceCard>;
          })}
        </div>
      </Container>
    </div>
  );
}
