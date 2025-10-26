import AddServiceForm from "@/Comonents/AddServiceForm";
import CommonBanner from "@/Comonents/CommonBanner";


const addServiceImg = "/assets/images/checkout/checkout.png";

export default function AddService() {
  return (
    <div>
      <CommonBanner Route="Home" Title="Add Service" Bg_img={addServiceImg} />

      <AddServiceForm></AddServiceForm>
    </div>
  );
}
