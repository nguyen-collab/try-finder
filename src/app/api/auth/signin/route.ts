import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/utils/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          error: 'Email and password are required',
        },
        { status: 400 }
      );
    }

    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        user: data.user,
        session: data.session,
        message: 'Sign in successful',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sign in error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
