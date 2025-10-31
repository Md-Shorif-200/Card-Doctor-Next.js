import { getToken } from "next-auth/jwt";

const { NextResponse } = require("next/server");

export const middleware = async (req) => {
  const token = await getToken({ req ,  
     secureCookie : process.env.NODE_ENV === "production" ? true : false
   });

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.rewrite(new URL("sign-in", req.url));
  }
};

export const config = {
  matcher: [
    "/my-bookings",
    "/my-bookings/:path*",
    "/services",
    "/services/:path*",
  ],
};
