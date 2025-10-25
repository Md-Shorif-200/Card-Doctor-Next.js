"use client";
import signUpAction from "@/app/action/auth/signUpAction";
import { useState } from "react";
export default function Sign_Up_Form() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form action={signUpAction} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3811]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute  right-3 top-8 flex items-center text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF3811] hover:bg-[#e3330f] text-white font-semibold py-2 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
