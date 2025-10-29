"use client";
import { useState } from "react";
import Link from "next/link";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import SocailLogIn from "@/Comonents/SocailLogIn";
import { toast } from "sonner";
import { ImSpinner9 } from "react-icons/im";

export default function Sign_In_Form() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Logged in successfully!");
        router.push("/");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white py-10 lg:py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome back!</h2>

      <SocailLogIn />

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500 text-sm">Or continue with email</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3811] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3811] ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 top-1 flex items-center text-gray-500 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between text-sm">
          <Link href="/forgot-password" className="text-[#FF3811] hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 bg-[#FF3811] hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          {isSubmitting ? (
            <>
              <ImSpinner9 className="text-lg animate-spin"/> Signing in...
            </>
          ) : (
            "Sign in "
          )}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6 text-center">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="text-[#FF3811] font-medium hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  );
}
