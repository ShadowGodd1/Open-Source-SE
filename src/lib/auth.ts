import { createHash } from 'crypto';
import { supabase, getUserByEmail, getUserByPhone, createUser } from './supabase';

// Hash a password
export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

// Verify a password
export function verifyPassword(password: string, hashedPassword: string): boolean {
  const passwordHash = hashPassword(password);
  return passwordHash === hashedPassword;
}

// Login with email and password
export async function loginWithEmailPassword(email: string, password: string) {
  try {
    const user = await getUserByEmail(email);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    if (!verifyPassword(password, user.password_hash)) {
      return { success: false, message: 'Invalid password' };
    }
    
    // Update last login timestamp
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id);
    
    // Create a session token
    const token = createSessionToken(user.id);
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        kyc_level: user.kyc_level,
      },
      token,
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred during login' };
  }
}

// Login with phone and password
export async function loginWithPhonePassword(phone: string, password: string) {
  try {
    const user = await getUserByPhone(phone);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    if (!verifyPassword(password, user.password_hash)) {
      return { success: false, message: 'Invalid password' };
    }
    
    // Update last login timestamp
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id);
    
    // Create a session token
    const token = createSessionToken(user.id);
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        kyc_level: user.kyc_level,
      },
      token,
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred during login' };
  }
}

// Register a new user
export async function registerUser(userData: {
  name: string;
  email?: string;
  phone: string;
  password: string;
}) {
  try {
    // Check if user with email already exists
    if (userData.email) {
      const existingUserByEmail = await getUserByEmail(userData.email);
      if (existingUserByEmail) {
        return { success: false, message: 'Email already in use' };
      }
    }
    
    // Check if user with phone already exists
    const existingUserByPhone = await getUserByPhone(userData.phone);
    if (existingUserByPhone) {
      return { success: false, message: 'Phone number already in use' };
    }
    
    // Hash the password
    const password_hash = hashPassword(userData.password);
    
    // Create the user
    const newUser = await createUser({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password_hash,
    });
    
    if (!newUser) {
      return { success: false, message: 'Failed to create user' };
    }
    
    // Create a session token
    const token = createSessionToken(newUser.id);
    
    return {
      success: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        kyc_level: newUser.kyc_level,
      },
      token,
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: 'An error occurred during registration' };
  }
}

// Create a session token
function createSessionToken(userId: string): string {
  // In a real application, you would use a proper JWT library
  // This is a simplified example
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // Token expires in 7 days
  
  const tokenData = {
    user_id: userId,
    type: 'session',
    token: `${userId}_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
    expires_at: expiresAt.toISOString(),
  };
  
  // Store the token in the database
  supabase.from('auth_tokens').insert([tokenData]).then(({ error }) => {
    if (error) {
      console.error('Error storing token:', error);
    }
  });
  
  return tokenData.token;
}

// Verify a session token
export async function verifySessionToken(token: string) {
  try {
    const { data, error } = await supabase
      .from('auth_tokens')
      .select('*')
      .eq('token', token)
      .eq('type', 'session')
      .single();
    
    if (error || !data) {
      return { success: false, message: 'Invalid token' };
    }
    
    // Check if token is expired
    if (new Date(data.expires_at) < new Date()) {
      return { success: false, message: 'Token expired' };
    }
    
    // Get the user
    const user = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user_id)
      .single();
    
    if (user.error || !user.data) {
      return { success: false, message: 'User not found' };
    }
    
    return {
      success: true,
      user: {
        id: user.data.id,
        name: user.data.name,
        email: user.data.email,
        phone: user.data.phone,
        kyc_level: user.data.kyc_level,
      },
    };
  } catch (error) {
    console.error('Token verification error:', error);
    return { success: false, message: 'An error occurred during token verification' };
  }
}

// Logout (invalidate token)
export async function logout(token: string) {
  try {
    await supabase
      .from('auth_tokens')
      .delete()
      .eq('token', token);
    
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: 'An error occurred during logout' };
  }
}
