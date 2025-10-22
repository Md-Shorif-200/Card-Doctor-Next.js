import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
const logo = "/assets/logo.svg";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  const user = false;
  const navlinks = (
    <>
      <li className="capitalize text-[18px] text-[rgba(68, 68, 68, 1))] font-normal ">
        {" "}
        <Link href="/"> Home</Link>{" "}
      </li>
      <li className="capitalize text-[18px] text-[rgba(68, 68, 68, 1))] font-normal ">
        {" "}
        <Link href="/"> about</Link>{" "}
      </li>
      <li className="capitalize text-[18px] text-[rgba(68, 68, 68, 1))] font-normal ">
        {" "}
        <Link href="/"> services</Link>{" "}
      </li>
      <li className="capitalize text-[18px] text-[rgba(68, 68, 68, 1))] font-normal ">
        {" "}
        <Link href="/"> blog</Link>{" "}
      </li>
      <li className="capitalize text-[18px] text-[rgba(68, 68, 68, 1))] font-normal ">
        {" "}
        <Link href="/"> contact</Link>{" "}
      </li>
    </>
  );

  return (
    <>
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <Link href={"/"} className="">
              <Image alt="logo" src={logo} width={60} height={60}></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end flex justify-center items-center gap-6">
            <Link className="hidden sm:block" href={"/"}>
              <IoBagOutline className="text-xl"></IoBagOutline>
            </Link>
            <Link className="hidden sm:block" href={"/"}>
              <IoSearchOutline className="text-xl"></IoSearchOutline>
            </Link>

            <div>
              {user ? (
                <>
                  <Link
                    href={"/"}
                    className="btn border border-[#FF3811] text-[#FF3811] capitalize bg-white hover:bg-[#FF3811] hover:text-white transition-all "
                  >
                    appointment
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/sign-up"} className="primary_btn">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
