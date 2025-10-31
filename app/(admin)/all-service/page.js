export const dynamic = "force-dynamic";
import CommonBanner from "@/Comonents/CommonBanner";
import Container from "@/Comonents/Container";

import Component from "@/components/comp-471";
import { fetchServiceData } from "@/lib/fetchServiceData";
const allServiceImg = "/assets/images/checkout/checkout.png";

export default async function ServicesPage() {
  const servicesData = await fetchServiceData();

  return (
    <div>
      <CommonBanner
        Route="Home"
        Title="Services"
        Bg_img={allServiceImg}
      ></CommonBanner>

      <Container>
            <div className="py-20">
                 <Component servicesData={servicesData}></Component>
            </div>
      </Container>
    </div>
  );
}
