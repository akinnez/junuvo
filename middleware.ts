import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pattern to match /personal/... or /business/...
  // Adjust this regex if your path structure is different (e.g., /dashboard/personal)
  const segments = pathname.split('/');
  const appType = segments[1]; 

  console.log(appType);
  

  const validTypes:userType[] = ['CUSTOMER_INDIVIDUAL', 'CUSTOMER_BUSINESS'];

  if (validTypes.includes(appType.toUpperCase() as userType)) {
    return NextResponse.next();
  }

  // Redirect to a default or error page if the type is invalid
  return NextResponse.redirect(new URL('/login', request.url));
}

// Only run middleware on the dynamic routes
export const config = {
  matcher: [`/customer_individual/:path*`, `/customer_business/:path*`],
};