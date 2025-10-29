import { NextResponse, type NextRequest } from 'next/server';
import { createServerSupabaseClient } from './utils/supabase-server';

export async function proxy(request: NextRequest) {
  const supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = await createServerSupabaseClient();
  // Refresh session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Define protected routes
  const protectedRoutes: string[] = [
    'dashboard',
    'settings',
    'accounts',
    'features',
  ];
  const authRoutes: string[] = [
    '/sign-in',
    '/sign-up',
    '/verification',
    '/auth/callback',
  ];

  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect logic
  if (isProtectedRoute && !user) {
    // Redirect to sign-in if trying to access protected route without auth
    const redirectUrl = new URL('/sign-in', request.url);
    redirectUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthRoute && user) {
    // Redirect to dashboard if trying to access auth routes while logged in
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Handle root path redirect
  if (request.nextUrl.pathname === '/') {
    if (user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    // If not logged in, let them stay on homepage
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
