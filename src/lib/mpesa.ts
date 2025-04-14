// This is a mock implementation of the M-Pesa API
// In a real application, you would use the official Safaricom Daraja API

// Mock transaction store (in a real app, this would be in a database)
const transactions: Record<string, {
  transactionId: string;
  phoneNumber: string;
  amount: number;
  reference: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
}> = {};

// Initiate STK Push
export async function initiateSTKPush(params: {
  phoneNumber: string;
  amount: number;
  reference: string;
  description: string;
}) {
  const { phoneNumber, amount, reference, description } = params;
  
  // Validate phone number format (should be 254XXXXXXXXX)
  if (!phoneNumber.match(/^254\d{9}$/)) {
    return {
      success: false,
      message: 'Invalid phone number format. Use 254XXXXXXXXX',
    };
  }
  
  // Validate amount (minimum 1)
  if (amount < 1) {
    return {
      success: false,
      message: 'Amount must be at least 1',
    };
  }
  
  // In a real application, you would call the M-Pesa API here
  console.log(`Initiating STK Push to ${phoneNumber} for KSh ${amount}: ${description}`);
  
  // Generate a mock transaction ID
  const transactionId = `MPESA${Date.now()}${Math.floor(Math.random() * 1000)}`;
  
  // Store the transaction
  transactions[transactionId] = {
    transactionId,
    phoneNumber,
    amount,
    reference,
    status: 'pending',
    timestamp: new Date().toISOString(),
  };
  
  // Mock successful response
  return {
    success: true,
    transactionId,
    message: 'STK Push initiated successfully. Please check your phone to complete the transaction.',
  };
}

// Check transaction status
export async function checkTransactionStatus(transactionId: string) {
  // In a real application, you would call the M-Pesa API to check the status
  const transaction = transactions[transactionId];
  
  if (!transaction) {
    return {
      success: false,
      message: 'Transaction not found',
    };
  }
  
  // For demo purposes, randomly complete or fail the transaction if it's pending
  if (transaction.status === 'pending') {
    const random = Math.random();
    if (random > 0.3) {
      transaction.status = 'completed';
    } else {
      transaction.status = 'failed';
    }
    transactions[transactionId] = transaction;
  }
  
  return {
    success: true,
    status: transaction.status,
    transaction,
  };
}

// Process M-Pesa callback
export async function processCallback(callbackData: any) {
  // In a real application, you would validate the callback data
  // and update the transaction status in your database
  
  const { Body } = callbackData;
  
  if (!Body || !Body.stkCallback) {
    return {
      success: false,
      message: 'Invalid callback data',
    };
  }
  
  const { MerchantRequestID, ResultCode, ResultDesc } = Body.stkCallback;
  
  // Find the transaction by MerchantRequestID
  // In this mock implementation, we'll just use a random transaction
  const transactionIds = Object.keys(transactions);
  if (transactionIds.length === 0) {
    return {
      success: false,
      message: 'No transactions found',
    };
  }
  
  const transactionId = transactionIds[0];
  const transaction = transactions[transactionId];
  
  // Update the transaction status based on the result code
  if (ResultCode === 0) {
    transaction.status = 'completed';
  } else {
    transaction.status = 'failed';
  }
  
  transactions[transactionId] = transaction;
  
  return {
    success: true,
    message: ResultDesc,
    transaction,
  };
}

// B2C Payment (Business to Customer)
export async function b2cPayment(params: {
  phoneNumber: string;
  amount: number;
  reference: string;
  occasion: string;
}) {
  const { phoneNumber, amount, reference, occasion } = params;
  
  // Validate phone number format (should be 254XXXXXXXXX)
  if (!phoneNumber.match(/^254\d{9}$/)) {
    return {
      success: false,
      message: 'Invalid phone number format. Use 254XXXXXXXXX',
    };
  }
  
  // Validate amount (minimum 1)
  if (amount < 1) {
    return {
      success: false,
      message: 'Amount must be at least 1',
    };
  }
  
  // In a real application, you would call the M-Pesa API here
  console.log(`Sending B2C payment to ${phoneNumber} for KSh ${amount}: ${occasion}`);
  
  // Generate a mock transaction ID
  const transactionId = `B2C${Date.now()}${Math.floor(Math.random() * 1000)}`;
  
  // Store the transaction
  transactions[transactionId] = {
    transactionId,
    phoneNumber,
    amount,
    reference,
    status: 'completed', // For simplicity, we'll assume B2C payments are always successful
    timestamp: new Date().toISOString(),
  };
  
  // Mock successful response
  return {
    success: true,
    transactionId,
    message: 'B2C payment sent successfully',
  };
}
