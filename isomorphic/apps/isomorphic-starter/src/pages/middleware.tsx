import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token exists and user tries to access a protected page, redirect to /signin
  if (!token && req.nextUrl.pathname !== '/signin') {
    const signInUrl = new URL('/signin', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Apply middleware to all routes except the signin page
export const config = {
  matcher: ['/((?!signin).*)'],
};
