import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split('=');
    if (key === name) return rest.join('=');
  }
  return undefined;
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
  cookies: {
    get(name) {
      return getCookie(name);
    },
    set(name, value, options) {
      if (typeof document === 'undefined') return;
      const maxAge = options?.maxAge ?? 60 * 60 * 24 * 180; // 180 days
      const path = options?.path ?? '/';
      const sameSite = (options?.sameSite as string) ?? 'Lax';
      const secure = true;
      document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=${path}; SameSite=${sameSite};${secure ? ' Secure' : ''}`;
    },
    remove(name, options) {
      if (typeof document === 'undefined') return;
      const path = options?.path ?? '/';
      const sameSite = (options?.sameSite as string) ?? 'Lax';
      const secure = true;
      document.cookie = `${name}=; Max-Age=0; Path=${path}; SameSite=${sameSite};${secure ? ' Secure' : ''}`;
    },
  },
});
