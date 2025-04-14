import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to get user by ID
export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}

// Helper function to get user by email
export async function getUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }

  return data;
}

// Helper function to get user by phone
export async function getUserByPhone(phone: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('phone', phone)
    .single();

  if (error) {
    console.error('Error fetching user by phone:', error);
    return null;
  }

  return data;
}

// Helper function to create a new user
export async function createUser(userData: {
  name: string;
  email?: string;
  phone: string;
  password_hash: string;
}) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select();

  if (error) {
    console.error('Error creating user:', error);
    return null;
  }

  return data[0];
}

// Helper function to update a user
export async function updateUser(userId: string, userData: Partial<{
  name: string;
  email: string;
  phone: string;
  password_hash: string;
  is_active: boolean;
  kyc_level: number;
  profile_image_url: string;
}>) {
  const { data, error } = await supabase
    .from('users')
    .update(userData)
    .eq('id', userId)
    .select();

  if (error) {
    console.error('Error updating user:', error);
    return null;
  }

  return data[0];
}

// Helper function to get user profile
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return data;
}

// Helper function to create or update user profile
export async function upsertUserProfile(profileData: {
  user_id: string;
  bio?: string;
  location?: string;
  skills?: string[];
  education?: string[];
  experience?: string[];
  interests?: string[];
}) {
  const { data, error } = await supabase
    .from('user_profiles')
    .upsert([profileData])
    .select();

  if (error) {
    console.error('Error upserting user profile:', error);
    return null;
  }

  return data[0];
}
