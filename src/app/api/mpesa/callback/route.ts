import { NextResponse } from 'next/server';
import { processCallback } from '@/lib/mpesa';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Process the callback
    const result = await processCallback(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Callback processed successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('M-Pesa callback error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
