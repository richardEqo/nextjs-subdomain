import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTokenFromURL } from "./services/UtilService";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const token = getTokenFromURL(request.url);
  if (token) {
    response.cookies.set({
      name: "auth",
      value: token as string,
      path: "/",
    });
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/(.*)",
};
