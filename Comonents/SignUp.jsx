import Image from "next/image";
import Link from "next/link";
import Container from "@/Comonents/Container";
import Sign_Up_Form from "./Sign_Up_Form";
const sign_up_img = "/assets/images/login/login.svg";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container>
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-[60%]  mx-auto ">
            <Image src={sign_up_img} alt="Sign up img" fill className="" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 mb-8">
              Join us and start your journey today.
            </p>

            <Sign_Up_Form></Sign_Up_Form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-[#FF3811] font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
