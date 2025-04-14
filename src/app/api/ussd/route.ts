import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const sessionId = formData.get('sessionId') as string;
    const serviceCode = formData.get('serviceCode') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const text = formData.get('text') as string;

    console.log('USSD Request:', { sessionId, serviceCode, phoneNumber, text });

    let response = '';

    // Handle different menu levels based on the text input
    if (text === '') {
      // First request, show the main menu
      response = `CON Welcome to the Economic Empowerment Ecosystem
1. Check Account
2. Microfinance Services
3. Job Marketplace
4. Financial Education
5. Help`;
    } else if (text === '1') {
      // Account menu
      response = `CON Account Information
1. View Profile
2. Update Profile
3. Back to Main Menu`;
    } else if (text === '2') {
      // Microfinance menu
      response = `CON Microfinance Services
1. Check Chama Balance
2. Send Money
3. Apply for Loan
4. Back to Main Menu`;
    } else if (text === '3') {
      // Job marketplace menu
      response = `CON Job Marketplace
1. View Available Jobs
2. Post a Job
3. View Applications
4. Back to Main Menu`;
    } else if (text === '4') {
      // Financial education menu
      response = `CON Financial Education
1. Savings Tips
2. Investment Basics
3. Debt Management
4. Back to Main Menu`;
    } else if (text === '5') {
      // Help menu
      response = `END For assistance, please call our customer service at 0700123456 or visit our website at www.osee-kenya.org`;
    } else if (text === '1*1') {
      // View profile
      response = `END Your Profile:
Name: John Doe
Phone: ${phoneNumber}
Member Since: January 2023
Status: Active`;
    } else if (text === '2*1') {
      // Check Chama balance
      response = `END Your Chama Balance:
Personal Savings: KSh 5,000
Group Contribution: KSh 15,000
Available Loan Amount: KSh 30,000`;
    } else if (text === '3*1') {
      // View available jobs
      response = `END Available Jobs:
1. Delivery Driver - Nairobi
2. Data Entry Clerk - Remote
3. Farm Worker - Nakuru
4. Shop Assistant - Mombasa

Call 0700123456 to apply`;
    } else {
      // Default response for unhandled inputs
      response = `END Invalid selection. Please try again.`;
    }

    return new NextResponse(response, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('USSD error:', error);
    return new NextResponse('END An error occurred. Please try again later.', {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
