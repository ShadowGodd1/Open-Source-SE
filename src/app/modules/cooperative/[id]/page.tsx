"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

interface Member {
  id: string;
  name: string;
  role: string;
  joinedDate: string;
  shares: number;
}

interface Transaction {
  id: string;
  type: 'contribution' | 'dividend' | 'expense';
  amount: number;
  date: string;
  description: string;
}

interface Cooperative {
  id: string;
  name: string;
  type: string;
  description: string;
  location: string;
  established: string;
  registrationNumber: string;
  memberCount: number;
  totalShares: number;
  shareValue: number;
  totalFunds: number;
  isPublic: boolean;
  members: Member[];
  transactions: Transaction[];
}

export default function CooperativeDetailPage() {
  const params = useParams();
  const cooperativeId = params.id;
  
  const [cooperative, setCooperative] = useState<Cooperative | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchCooperativeDetails = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // In a real application, this would call an API endpoint
        // For now, we'll simulate a successful response with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock cooperative data
        const mockCooperative: Cooperative = {
          id: cooperativeId as string,
          name: 'Kilimo Fresh Cooperative',
          type: 'Agricultural',
          description: 'A cooperative for small-scale farmers focusing on fresh produce. We help members access markets, share resources, and improve farming practices.',
          location: 'Nakuru County',
          established: '2018-05-15',
          registrationNumber: 'COOP/2018/12345',
          memberCount: 120,
          totalShares: 1200,
          shareValue: 1000,
          totalFunds: 1500000,
          isPublic: true,
          members: [
            {
              id: '1',
              name: 'John Doe',
              role: 'Chairperson',
              joinedDate: '2018-05-15',
              shares: 20,
            },
            {
              id: '2',
              name: 'Jane Smith',
              role: 'Treasurer',
              joinedDate: '2018-05-15',
              shares: 15,
            },
            {
              id: '3',
              name: 'Michael Johnson',
              role: 'Secretary',
              joinedDate: '2018-06-10',
              shares: 12,
            },
            {
              id: '4',
              name: 'Sarah Williams',
              role: 'Member',
              joinedDate: '2019-01-20',
              shares: 8,
            },
            {
              id: '5',
              name: 'David Brown',
              role: 'Member',
              joinedDate: '2019-03-15',
              shares: 10,
            },
          ],
          transactions: [
            {
              id: '101',
              type: 'contribution',
              amount: 50000,
              date: '2023-01-15',
              description: 'Monthly member contributions',
            },
            {
              id: '102',
              type: 'expense',
              amount: 25000,
              date: '2023-01-20',
              description: 'Purchase of farming equipment',
            },
            {
              id: '103',
              type: 'contribution',
              amount: 75000,
              date: '2023-02-15',
              description: 'Monthly member contributions',
            },
            {
              id: '104',
              type: 'dividend',
              amount: 100000,
              date: '2023-03-01',
              description: 'Quarterly dividend distribution',
            },
            {
              id: '105',
              type: 'expense',
              amount: 35000,
              date: '2023-03-10',
              description: 'Transportation costs for produce delivery',
            },
          ],
        };
        
        setCooperative(mockCooperative);
      } catch (err) {
        console.error('Error fetching cooperative details:', err);
        setError('Failed to load cooperative details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (cooperativeId) {
      fetchCooperativeDetails();
    }
  }, [cooperativeId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case 'contribution':
        return 'bg-green-100 text-green-800';
      case 'dividend':
        return 'bg-blue-100 text-blue-800';
      case 'expense':
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
              href="/modules/cooperative"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Cooperatives
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
          ) : cooperative ? (
            <>
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{cooperative.name}</h1>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                      {cooperative.type} Cooperative • Established {formatDate(cooperative.established)}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href={`/modules/cooperative/${cooperativeId}/invite`}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Invite Members
                    </Link>
                    <Link
                      href={`/modules/cooperative/${cooperativeId}/edit`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Edit Cooperative
                    </Link>
                  </div>
                </div>
                
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
                          Members ({cooperative.memberCount})
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
                        <button
                          onClick={() => setActiveTab('governance')}
                          className={`pb-2 text-sm font-medium ${
                            activeTab === 'governance'
                              ? 'border-b-2 border-blue-500 text-blue-600'
                              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                          }`}
                        >
                          Governance
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
                              Total Members
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {cooperative.memberCount}
                            </dd>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Total Shares
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {cooperative.totalShares}
                            </dd>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Total Funds
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              KSh {cooperative.totalFunds.toLocaleString()}
                            </dd>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About this Cooperative</h3>
                        <p className="text-gray-700 dark:text-gray-300">{cooperative.description}</p>
                        
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">{cooperative.location}</p>
                          </div>
                          
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Registration Number</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">{cooperative.registrationNumber || 'Not registered'}</p>
                          </div>
                          
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Share Value</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">KSh {cooperative.shareValue.toLocaleString()} per share</p>
                          </div>
                          
                          <div className="sm:col-span-3">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Visibility</h4>
                            <p className="mt-1 text-sm text-gray-900 dark:text-white">{cooperative.isPublic ? 'Public' : 'Private'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'members' && (
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Members</h3>
                        <Link
                          href={`/modules/cooperative/${cooperativeId}/invite`}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Invite New Member
                        </Link>
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
                                Shares
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Joined
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {cooperative.members.map((member) => (
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
                                  <div className="text-sm text-gray-900 dark:text-white">{member.shares}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(member.joinedDate)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                    View
                                  </a>
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
                        <div className="flex space-x-3">
                          <Link
                            href={`/modules/cooperative/${cooperativeId}/transactions/new`}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Record Transaction
                          </Link>
                          <Link
                            href={`/modules/cooperative/${cooperativeId}/transactions/export`}
                            className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Export
                          </Link>
                        </div>
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
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {cooperative.transactions.map((transaction) => (
                              <tr key={transaction.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(transaction.date)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTransactionTypeColor(transaction.type)}`}>
                                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                  KSh {transaction.amount.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  {transaction.description}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'governance' && (
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Governance</h3>
                        <Link
                          href={`/modules/cooperative/${cooperativeId}/governance/new-vote`}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Create New Vote
                        </Link>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg mb-6">
                        <div className="px-4 py-5 sm:p-6">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Votes</h4>
                          <div className="text-center py-8">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No active votes</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              There are no active votes at the moment.
                            </p>
                            <div className="mt-6">
                              <Link
                                href={`/modules/cooperative/${cooperativeId}/governance/new-vote`}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                Create New Vote
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Leadership</h4>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {cooperative.members
                              .filter(member => ['Chairperson', 'Treasurer', 'Secretary'].includes(member.role))
                              .map(leader => (
                                <div key={leader.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                                  <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                      <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                        {leader.name.charAt(0)}
                                      </div>
                                      <div className="ml-4">
                                        <h5 className="text-lg font-medium text-gray-900 dark:text-white">{leader.name}</h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{leader.role}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300">Cooperative not found.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
