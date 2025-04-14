import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, password } = body;

    // Validate required fields
    if (!name || !phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, phone, and password are required',
        },
        { status: 400 }
      );
    }

    // This is a mock implementation
    // In a real application, you would store the user in a database
    // and handle password hashing, duplicate email/phone checks, etc.
    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        user: {
          id: '2',
          name,
          email,
          phone,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
