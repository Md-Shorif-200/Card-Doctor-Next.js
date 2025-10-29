"use client";
import signUpAction from "@/app/action/auth/signUpAction";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";
export default function Sign_Up_Form() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signUpAction, null);
    const [loadingToastId, setLoadingToastId] = useState(null);

  console.log(state);

    useEffect(() => {
    const autoLogin = async () => {
      if (state?.result?.acknowledged && state?.result?.insertedId) {
     const id = toast.loading("Creating account & logging in...");
        setLoadingToastId(id);

        const res = await signIn("credentials", {
          redirect: false,
          email: state.email, 
          password: state.password,
        });

        if (res?.ok) {
            toast.success("Logged in successfully!", { id });
          router.push("/");
        } else {
          toast.error("Auto login failed. Please login manually.");
        }
      }
    };

    autoLogin();
  }, [state, router]);


  return (
    <div>
      <form action={formAction} className="space-y-5">
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
          disabled={isPending}
          className="w-full flex justify-center items-center gap-4 bg-[#FF3811] hover:bg-[#e3330f] text-white font-semibold py-2 rounded-lg transition"
        >
          {isPending ? (
            <>
              {" "}
              <ImSpinner9 className="text-lg animate-spin" /> Processing...{" "}
            </>
          ) : (
            <> Sign Up </>
          )}
        </button>
      </form>
    </div>
  );
}
