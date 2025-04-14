import { NextResponse } from 'next/server';
import { loginWithEmailPassword, loginWithPhonePassword } from '@/lib/auth';
import { z } from 'zod';

// Define validation schema
const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or phone number is required'),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: result.error.errors,
        },
        { status: 400 }
      );
    }

    const { identifier, password } = result.data;

    // Determine if identifier is email or phone
    const isEmail = identifier.includes('@');

    // Call appropriate login function
    const loginResult = isEmail
      ? await loginWithEmailPassword(identifier, password)
      : await loginWithPhonePassword(identifier, password);

    if (loginResult.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Login successful',
          user: loginResult.user,
          token: loginResult.token,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: loginResult.message || 'Invalid credentials',
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
