// // middleware.ts
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   // Fetch the token if available
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   // If no token and the route is not the login page, redirect to login
//   if (!token && req.nextUrl.pathname !== '/signin') {
//     return NextResponse.redirect(new URL('/signin', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!signin).*)'], 
// };


