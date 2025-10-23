"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./Footer"


export function MainLayout({ children }) {
  const pathname = usePathname()

  const hideLayout =
    pathname === "/sign-in"  || pathname === "/sign-up"

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}
