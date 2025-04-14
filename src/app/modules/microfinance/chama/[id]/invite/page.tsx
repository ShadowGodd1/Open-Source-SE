"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

interface Chama {
  id: string;
  name: string;
  memberCount: number;
  maxMembers: number;
}

export default function InviteMembersPage() {
  const params = useParams();
  const router = useRouter();
  const chamaId = params.id;
  
  const [chama, setChama] = useState<Chama | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [inviteMethod, setInviteMethod] = useState('phone');
  const [inviteData, setInviteData] = useState({
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchChamaDetails = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // In a real application, this would call an API endpoint
        // For now, we'll simulate a successful response with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock chama data
        const mockChama: Chama = {
          id: chamaId as string,
          name: 'Umoja Savings Group',
          memberCount: 9,
          maxMembers: 12,
        };
        
        setChama(mockChama);
      } catch (err) {
        console.error('Error fetching chama details:', err);
        setError('Failed to load chama details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (chamaId) {
      fetchChamaDetails();
    }
  }, [chamaId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInviteData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real application, this would call an API endpoint
      // For now, we'll simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      
      // Reset form
      setInviteData({
        phone: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error('Error sending invitation:', err);
      setError('Failed to send invitation. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href={`/modules/microfinance/chama/${chamaId}`}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Chama
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Invite Members</h1>
              {chama && (
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  Invite new members to join {chama.name} ({chama.memberCount}/{chama.maxMembers} members)
                </p>
              )}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              ) : chama ? (
                <>
                  {success && (
                    <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                      <p className="font-bold">Invitation Sent!</p>
                      <p className="text-sm">Your invitation has been sent successfully.</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => setInviteMethod('phone')}
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          inviteMethod === 'phone'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        Invite by Phone
                      </button>
                      <button
                        type="button"
                        onClick={() => setInviteMethod('email')}
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          inviteMethod === 'email'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        Invite by Email
                      </button>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {inviteMethod === 'phone' ? (
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone Number *
                        </label>
                        <div className="mt-1">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={inviteData.phone}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                            placeholder="e.g. 0712345678"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Enter the phone number of the person you want to invite.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={inviteData.email}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                            placeholder="e.g. example@email.com"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Enter the email address of the person you want to invite.
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Personal Message (Optional)
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={inviteData.message}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="Add a personal message to your invitation..."
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                      <Link
                        href={`/modules/microfinance/chama/${chamaId}`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Invitation'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-700 dark:text-gray-300">Chama not found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
