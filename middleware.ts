import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pattern to match /personal/... or /business/...
  // Adjust this regex if your path structure is different (e.g., /dashboard/personal)
  const segments = pathname.split('/');
  const appType = segments[1]; 

  const validTypes = ['personal', 'business'];

  if (validTypes.includes(appType)) {
    return NextResponse.next();
  }

  // Redirect to a default or error page if the type is invalid
  return NextResponse.redirect(new URL('/personal/dashboard', request.url));
}

// Only run middleware on the dynamic routes
export const config = {
  matcher: ['/personal/:path*', '/business/:path*'],
};