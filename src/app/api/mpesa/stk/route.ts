import { NextResponse } from 'next/server';
import { initiateSTKPush } from '@/lib/mpesa';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phoneNumber, amount, reference, description } = body;

    // Validate required fields
    if (!phoneNumber || !amount || !reference) {
      return NextResponse.json(
        {
          success: false,
          message: 'Phone number, amount, and reference are required',
        },
        { status: 400 }
      );
    }

    // Initiate STK Push
    const result = await initiateSTKPush({
      phoneNumber,
      amount,
      reference,
      description: description || 'Payment',
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('M-Pesa STK Push error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
