// This is a mock implementation of the Africa's Talking API
// In a real application, you would use the official Africa's Talking SDK

// Mock USSD session store (in a real app, this would be in a database)
const ussdSessions: Record<string, {
  sessionId: string;
  phoneNumber: string;
  text: string;
  level: number;
  data: Record<string, any>;
}> = {};

// Process USSD request
export async function processUssdRequest(params: {
  sessionId: string;
  serviceCode: string;
  phoneNumber: string;
  text: string;
}) {
  const { sessionId, serviceCode, phoneNumber, text } = params;
  
  // Check if this is a new session or existing one
  const isNewSession = !text || text === '';
  
  if (isNewSession) {
    // Create a new session
    ussdSessions[sessionId] = {
      sessionId,
      phoneNumber,
      text: '',
      level: 1,
      data: {},
    };
    
    // Return the main menu
    return {
      response: `CON Welcome to the Economic Empowerment Ecosystem
1. Check Account
2. Microfinance Services
3. Job Marketplace
4. Financial Education
5. Help`,
    };
  } else {
    // Get the existing session
    const session = ussdSessions[sessionId] || {
      sessionId,
      phoneNumber,
      text: '',
      level: 1,
      data: {},
    };
    
    // Update the session
    session.text = text;
    ussdSessions[sessionId] = session;
    
    // Process the request based on the text input
    return handleUssdMenu(session);
  }
}

// Handle USSD menu navigation
function handleUssdMenu(session: {
  sessionId: string;
  phoneNumber: string;
  text: string;
  level: number;
  data: Record<string, any>;
}) {
  const { text } = session;
  
  // Main menu options
  if (text === '1') {
    // Account menu
    return {
      response: `CON Account Information
1. View Profile
2. Update Profile
3. Back to Main Menu`,
    };
  } else if (text === '2') {
    // Microfinance menu
    return {
      response: `CON Microfinance Services
1. Check Chama Balance
2. Send Money
3. Apply for Loan
4. Back to Main Menu`,
    };
  } else if (text === '3') {
    // Job marketplace menu
    return {
      response: `CON Job Marketplace
1. View Available Jobs
2. Post a Job
3. View Applications
4. Back to Main Menu`,
    };
  } else if (text === '4') {
    // Financial education menu
    return {
      response: `CON Financial Education
1. Savings Tips
2. Investment Basics
3. Debt Management
4. Back to Main Menu`,
    };
  } else if (text === '5') {
    // Help menu
    return {
      response: `END For assistance, please call our customer service at 0700123456 or visit our website at www.osee-kenya.org`,
    };
  } else if (text === '1*1') {
    // View profile
    return {
      response: `END Your Profile:
Name: John Doe
Phone: ${session.phoneNumber}
Member Since: January 2023
Status: Active`,
    };
  } else if (text === '2*1') {
    // Check Chama balance
    return {
      response: `END Your Chama Balance:
Personal Savings: KSh 5,000
Group Contribution: KSh 15,000
Available Loan Amount: KSh 30,000`,
    };
  } else if (text === '3*1') {
    // View available jobs
    return {
      response: `END Available Jobs:
1. Delivery Driver - Nairobi
2. Data Entry Clerk - Remote
3. Farm Worker - Nakuru
4. Shop Assistant - Mombasa

Call 0700123456 to apply`,
    };
  } else {
    // Default response for unhandled inputs
    return {
      response: `END Invalid selection. Please try again.`,
    };
  }
}

// Send SMS
export async function sendSms(params: {
  to: string;
  message: string;
}) {
  const { to, message } = params;
  
  // In a real application, you would use the Africa's Talking SDK to send SMS
  console.log(`Sending SMS to ${to}: ${message}`);
  
  // Mock successful response
  return {
    success: true,
    messageId: `mock-${Date.now()}`,
  };
}

// Process incoming SMS
export async function processIncomingSms(params: {
  from: string;
  to: string;
  text: string;
  date: string;
  id: string;
}) {
  const { from, to, text, date, id } = params;
  
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
  
  // Send the response SMS
  await sendSms({
    to: from,
    message: responseMessage,
  });
  
  return {
    success: true,
    response: responseMessage,
  };
}
