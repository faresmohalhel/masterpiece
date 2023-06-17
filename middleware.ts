import jwt from "jsonwebtoken";
import * as jose from "jose";
import { getCookies, setCookie, getCookie, deleteCookie } from "cookies-next";

// import auth from "@/middleware/auth";

// export default [auth];

import { request } from "http";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
  // const body = await req.json();
  // // const token = body.token;
  // // console.log(token);

  // const token = req.cookies.get("token")?.value;
  // console.log(req.cookies.get("token")?.value);
  // // console.log(token);

  // if (!token) {
  //   console.log("inside if");
  //   return NextResponse.json({
  //     status: "fail",
  //     message: "a token is required for authentication",
  //   });
  // }

  // // const requestHeaders = new Headers(req.headers);

  // try {
  //   const decoded = jose.jwtVerify(token, process.env.TOKEN_KEY);
  //   console.log(jose.jwtVerify(token, process.env.TOKEN_KEY));
  //   // body.user = decoded;
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.json({ status: "fail", message: "fk u" });
  // }
  console.log("reached middle ware");
  // return NextResponse.redirect("/login");
  NextResponse.next();
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/login",
};
