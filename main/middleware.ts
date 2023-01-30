import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/(.*)",
};