"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLock, FaEnvelope } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default  function SocailLogIn() {
     const router = useRouter();

     const handleSocialLogIn = async (providerName) => {

        const result = await signIn(providerName,{redirect :false})
         
        if(result.ok){
              router.push('/')
        }

         
     }
  return (
       <div className="space-y-3">
          <button onClick={() => handleSocialLogIn("google")} className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FcGoogle className="mr-2 text-lg" /> Continue with Google
          </button>
          <button onClick={() => handleSocialLogIn("github")} className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FaGithub className="mr-2 text-lg" /> Continue with GitHub
          </button>
        </div>
  )
}
