import Image from "next/image";
import Link from "next/link";
const navLogo = '/assets/logo.svg'
export default function Logo() {
  return (
         <Link href='/' className="">
            <div className="relative w-[50px] h-[50px] ">

             <Image src={navLogo} alt="logo"  fill></Image>
            </div>
       </Link>
  );
}
