import { NextResponse } from 'next/server';
import { logout } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: 'Token is required',
        },
        { status: 400 }
      );
    }

    const logoutResult = await logout(token);

    if (logoutResult.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Logout successful',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: logoutResult.message || 'Logout failed',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
