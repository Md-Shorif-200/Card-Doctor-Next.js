"use client"
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLock, FaEnvelope } from "react-icons/fa";

export default function Sign_In_Form() {
      const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div>
           <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome back!</h2>
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FcGoogle className="mr-2 text-lg" /> Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FaGithub className="mr-2 text-lg" /> Continue with GitHub
          </button>
        </div>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or continue with email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
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
