import { NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth';
import { z } from 'zod';

// Define validation schema
const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').optional(),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Confirm password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = registerSchema.safeParse(body);
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

    const { name, email, phone, password } = result.data;

    // Register the user
    const registerResult = await registerUser({
      name,
      email,
      phone,
      password,
    });

    if (registerResult.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Registration successful',
          user: registerResult.user,
          token: registerResult.token,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: registerResult.message || 'Registration failed',
        },
        { status: 400 }
      );
    }
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
