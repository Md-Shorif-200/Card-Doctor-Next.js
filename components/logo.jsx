import Image from "next/image";
import Link from "next/link";

export default function Logo({navLogo}) {
  return (
         <Link href={"/"} className="">
            <div className="relative w-[50px] h-[50px] ">

             <Image alt="logo" src={navLogo} fill></Image>
            </div>
       </Link>
  );
}
