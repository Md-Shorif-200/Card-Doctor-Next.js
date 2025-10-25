"use client"
import { useState } from "react";
import Link from "next/link";
import {FaLock, FaEnvelope } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import SocailLogIn from "@/Comonents/SocailLogIn";


export default function Sign_In_Form() {
      const [showPassword, setShowPassword] = useState(false);
      const router =  useRouter();

       const signInAction = async (formData) => {
           const {email,password} = Object.fromEntries(formData.entries());

            try {
              const response =  await signIn("credentials",{email,password,callbackUrl : "/",redirect : false});
               if(response.ok){
                 router.push('/')
               }
              
            } catch (error) {
               console.log(error);
               alert('Something is wrong')
            }
            
       }

  return (
    <div>
           <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white py-10  lg:py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome back!</h2>
     
            <SocailLogIn></SocailLogIn>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or continue with email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form  action={signInAction} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"

                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
      
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 top-1 flex items-center text-gray-500 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <Link href="/forgot-password" className="text-[#FF3811] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign in →
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-[#FF3811] font-medium hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  )
}
