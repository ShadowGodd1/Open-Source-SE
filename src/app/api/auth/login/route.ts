import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // This is a mock implementation
    // In a real application, you would validate the credentials against a database
    if (email === 'user@example.com' && password === 'password') {
      return NextResponse.json(
        {
          success: true,
          message: 'Login successful',
          user: {
            id: '1',
            name: 'Test User',
            email: 'user@example.com',
          },
          token: 'mock-jwt-token',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
