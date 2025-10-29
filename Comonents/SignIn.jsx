import Image from "next/image";
import Sign_In_Form from "./Sign_In_Form";
const img = '/assets/images/login/Sign_in_Bg_Img-min.png'


export default function SignIn() {
  return (
    <div className="min-h-screen w-full sm:w-[70%]  lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 ">
      <Sign_In_Form></Sign_In_Form>

      <div className="hidden lg:block min-h-screen">
            <div className="relative w-ful h-full">
               <Image src={img} alt="sign in Image" fill ></Image>
            </div>
      </div>
    </div>
  );
}
