import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const from = formData.get('from') as string; // The phone number that sent the message
    const to = formData.get('to') as string; // The phone number that received the message
    const text = formData.get('text') as string; // The message content
    const date = formData.get('date') as string; // The date the message was sent
    const id = formData.get('id') as string; // The message ID

    console.log('SMS Received:', { from, to, text, date, id });

    // Process the SMS based on the content
    // This is a simple keyword-based system
    const lowerText = text.toLowerCase().trim();
    let responseMessage = '';

    if (lowerText.startsWith('balance')) {
      // Check balance command
      responseMessage = `Your current balance is KSh 5,000. You have 1 active loan of KSh 2,000 due on 15/05/2023.`;
    } else if (lowerText.startsWith('jobs')) {
      // Job search command
      responseMessage = `Latest jobs: 1. Delivery Driver in Nairobi, 2. Data Entry Clerk (Remote), 3. Farm Worker in Nakuru. Reply with JOB <number> for details.`;
    } else if (lowerText.startsWith('job 1') || lowerText.startsWith('job1')) {
      // Job details command
      responseMessage = `Job: Delivery Driver in Nairobi. Pay: KSh 200 per delivery. Requirements: Motorcycle, license. Contact: 0700123456 to apply.`;
    } else if (lowerText.startsWith('save')) {
      // Savings command
      const parts = lowerText.split(' ');
      if (parts.length >= 2 && !isNaN(Number(parts[1]))) {
        const amount = Number(parts[1]);
        responseMessage = `You have successfully saved KSh ${amount} to your account. Your new balance is KSh ${5000 + amount}.`;
      } else {
        responseMessage = `Invalid format. To save money, send: SAVE <amount>`;
      }
    } else if (lowerText.startsWith('help')) {
      // Help command
      responseMessage = `Available commands: BALANCE, JOBS, JOB <number>, SAVE <amount>, LOAN <amount>, REPAY <amount>, CHAMA <group_id>, HELP`;
    } else {
      // Default response
      responseMessage = `Thank you for your message. For assistance, send HELP for a list of commands or call our support at 0700123456.`;
    }

    // In a real implementation, you would use Africa's Talking or another SMS gateway to send the response
    console.log('SMS Response:', responseMessage);

    return NextResponse.json(
      {
        success: true,
        message: 'SMS processed successfully',
        response: responseMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('SMS processing error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
