
import Sign_In_Form from "./Sign_In_Form";

export default function SignIn() {
  return (
    <div className="min-h-screen w-full sm:w-[70%]  lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 ">
      <Sign_In_Form></Sign_In_Form>

      <div className="hidden lg:block min-h-screen">
        <div className="bg-[#FF3811] h-full text-white flex flex-col justify-center items-center text-center p-10 ">
          <h2 className="text-4xl font-bold mb-4">Start your journey</h2>
          <p className="max-w-md text-gray-100 mb-6">
            Join thousands of users who are already managing their projects
            efficiently with our platform.
          </p>
          {/* <ul className="space-y-3 text-left">
          <li>✓ Secure & Fast Authentication</li>
          <li>✓ 24/7 Customer Support</li>
          <li>✓ Advanced Security Features</li>
        </ul> */}
        </div>
      </div>
    </div>
  );
}
