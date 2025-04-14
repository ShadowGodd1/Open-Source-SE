"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

export default function RequestLoanPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    interestRate: '',
    duration: '',
    durationUnit: 'months',
    purpose: '',
    collateral: '',
    repaymentSource: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/modules/microfinance/loans');
      }, 2000);
    } catch (err) {
      console.error('Error requesting loan:', err);
      setError('Failed to submit loan request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute requiredKycLevel={2}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/modules/microfinance/loans"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Loans
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Request a Loan</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                Fill out the form below to request a loan from the community
              </p>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
              {success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <p className="font-bold">Loan Request Submitted!</p>
                  <p className="text-sm">Your loan request has been submitted successfully. Redirecting to loans page...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Loan Title *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="e.g. Business Expansion Loan"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Loan Amount (KSh) *
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          required
                          min="1000"
                          max="500000"
                          value={formData.amount}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 50000"
                        />
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Min: KSh 1,000, Max: KSh 500,000
                      </p>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Interest Rate (%) *
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="interestRate"
                          id="interestRate"
                          required
                          min="5"
                          max="20"
                          step="0.5"
                          value={formData.interestRate}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 10"
                        />
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Min: 5%, Max: 20%
                      </p>
                    </div>
                    
                    <div className="sm:col-span-1">
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Duration *
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="duration"
                          id="duration"
                          required
                          min="1"
                          max="36"
                          value={formData.duration}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 6"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-1">
                      <label htmlFor="durationUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Unit *
                      </label>
                      <div className="mt-1">
                        <select
                          id="durationUnit"
                          name="durationUnit"
                          required
                          value={formData.durationUnit}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        >
                          <option value="weeks">Weeks</option>
                          <option value="months">Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Loan Purpose *
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="purpose"
                        name="purpose"
                        rows={4}
                        required
                        value={formData.purpose}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="Describe why you need this loan and how you plan to use it..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="collateral" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Collateral (if any)
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="collateral"
                        name="collateral"
                        rows={2}
                        value={formData.collateral}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="Describe any collateral you can offer for this loan..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="repaymentSource" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Repayment Source *
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="repaymentSource"
                        name="repaymentSource"
                        rows={2}
                        required
                        value={formData.repaymentSource}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="Describe how you plan to repay this loan..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link
                      href="/modules/microfinance/loans"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Loan Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
