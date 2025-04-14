"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

interface Member {
  id: string;
  name: string;
  role: string;
  contributionStatus: 'paid' | 'pending' | 'late';
  joinedDate: string;
}

interface Transaction {
  id: string;
  type: 'contribution' | 'loan' | 'distribution';
  amount: number;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'failed';
}

interface Chama {
  id: string;
  name: string;
  description: string;
  contributionAmount: number;
  contributionFrequency: string;
  totalFunds: number;
  memberCount: number;
  maxMembers: number;
  createdAt: string;
  nextContributionDate: string;
  isPublic: boolean;
  members: Member[];
  transactions: Transaction[];
}

export default function ChamaDetailPage() {
  const params = useParams();
  const chamaId = params.id;
  
  const [chama, setChama] = useState<Chama | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isContributing, setIsContributing] = useState(false);
  const [contributionAmount, setContributionAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          description: 'A community savings group for small business owners in Nairobi.',
          contributionAmount: 1000,
          contributionFrequency: 'Monthly',
          totalFunds: 45000,
          memberCount: 9,
          maxMembers: 12,
          createdAt: '2023-01-15',
          nextContributionDate: '2023-05-01',
          isPublic: true,
          members: [
            {
              id: '1',
              name: 'John Doe',
              role: 'Admin',
              contributionStatus: 'paid',
              joinedDate: '2023-01-15',
            },
            {
              id: '2',
              name: 'Jane Smith',
              role: 'Treasurer',
              contributionStatus: 'paid',
              joinedDate: '2023-01-16',
            },
            {
              id: '3',
              name: 'Michael Johnson',
              role: 'Member',
              contributionStatus: 'pending',
              joinedDate: '2023-01-20',
            },
            {
              id: '4',
              name: 'Sarah Williams',
              role: 'Member',
              contributionStatus: 'paid',
              joinedDate: '2023-02-01',
            },
            {
              id: '5',
              name: 'David Brown',
              role: 'Member',
              contributionStatus: 'late',
              joinedDate: '2023-02-05',
            },
          ],
          transactions: [
            {
              id: '101',
              type: 'contribution',
              amount: 1000,
              date: '2023-04-01',
              description: 'Monthly contribution from John Doe',
              status: 'completed',
            },
            {
              id: '102',
              type: 'contribution',
              amount: 1000,
              date: '2023-04-01',
              description: 'Monthly contribution from Jane Smith',
              status: 'completed',
            },
            {
              id: '103',
              type: 'loan',
              amount: 5000,
              date: '2023-04-05',
              description: 'Loan to Sarah Williams',
              status: 'completed',
            },
            {
              id: '104',
              type: 'contribution',
              amount: 1000,
              date: '2023-04-10',
              description: 'Monthly contribution from David Brown',
              status: 'completed',
            },
            {
              id: '105',
              type: 'distribution',
              amount: 3000,
              date: '2023-04-15',
              description: 'Distribution to Michael Johnson',
              status: 'pending',
            },
          ],
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

  const handleContribute = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would call an API endpoint
      // For now, we'll simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update the chama data with the new contribution
      if (chama) {
        const newTransaction: Transaction = {
          id: `${Date.now()}`,
          type: 'contribution',
          amount: Number(contributionAmount),
          date: new Date().toISOString().split('T')[0],
          description: `Contribution from You`,
          status: 'completed',
        };
        
        setChama({
          ...chama,
          totalFunds: chama.totalFunds + Number(contributionAmount),
          transactions: [newTransaction, ...chama.transactions],
        });
      }
      
      setIsContributing(false);
      setContributionAmount('');
    } catch (err) {
      console.error('Error making contribution:', err);
      setError('Failed to make contribution. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'late':
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/modules/microfinance"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Microfinance
            </Link>
          </div>
          
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
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{chama.name}</h1>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                      Created on {formatDate(chama.createdAt)}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsContributing(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Make Contribution
                    </button>
                    <Link
                      href={`/modules/microfinance/chama/${chamaId}/invite`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Invite Members
                    </Link>
                  </div>
                </div>
                
                {isContributing && (
                  <div className="px-4 py-5 sm:px-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Make a Contribution</h3>
                    <form onSubmit={handleContribute} className="space-y-4">
                      <div>
                        <label htmlFor="contributionAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Amount (KSh)
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name="contributionAmount"
                            id="contributionAmount"
                            required
                            min={chama.contributionAmount}
                            value={contributionAmount}
                            onChange={(e) => setContributionAmount(e.target.value)}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                            placeholder={`Minimum: ${chama.contributionAmount}`}
                          />
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Minimum contribution: KSh {chama.contributionAmount}
                        </p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsContributing(false)}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Processing...' : 'Submit Contribution'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-8">
                        <button
                          onClick={() => setActiveTab('overview')}
                          className={`pb-2 text-sm font-medium ${
                            activeTab === 'overview'
                              ? 'border-b-2 border-blue-500 text-blue-600'
                              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => setActiveTab('members')}
                          className={`pb-2 text-sm font-medium ${
                            activeTab === 'members'
                              ? 'border-b-2 border-blue-500 text-blue-600'
                              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                          }`}
                        >
                          Members ({chama.memberCount})
                        </button>
                        <button
                          onClick={() => setActiveTab('transactions')}
                          className={`pb-2 text-sm font-medium ${
                            activeTab === 'transactions'
                              ? 'border-b-2 border-blue-500 text-blue-600'
                              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                          }`}
                        >
                          Transactions
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {activeTab === 'overview' && (
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Total Funds
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              KSh {chama.totalFunds.toLocaleString()}
                            </dd>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Members
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {chama.memberCount} / {chama.maxMembers}
                            </dd>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Next Contribution
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {formatDate(chama.nextContributionDate)}
                            </dd>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About this Chama</h3>
                        <p className="text-gray-700 dark:text-gray-300">{chama.description}</p>
                        
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Contribution Amount</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">KSh {chama.contributionAmount.toLocaleString()}</p>
                          </div>
                          
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Contribution Frequency</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">{chama.contributionFrequency}</p>
                          </div>
                          
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Visibility</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">{chama.isPublic ? 'Public' : 'Private'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'members' && (
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Members</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {chama.memberCount} / {chama.maxMembers} members
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Role
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Contribution Status
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Joined
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {chama.members.map((member) => (
                              <tr key={member.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                      {member.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                                        {member.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900 dark:text-white">{member.role}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.contributionStatus)}`}>
                                    {member.contributionStatus.charAt(0).toUpperCase() + member.contributionStatus.slice(1)}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(member.joinedDate)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'transactions' && (
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Transactions</h3>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Type
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Amount
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Description
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {chama.transactions.map((transaction) => (
                              <tr key={transaction.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(transaction.date)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    transaction.type === 'contribution'
                                      ? 'bg-green-100 text-green-800'
                                      : transaction.type === 'loan'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                  KSh {transaction.amount.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {transaction.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300">Chama not found.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
