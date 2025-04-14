"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProtectedRoute from '@/components/auth/protected-route';

interface Loan {
  id: string;
  title: string;
  amount: number;
  interestRate: number;
  duration: number;
  durationUnit: string;
  borrower: {
    id: string;
    name: string;
    rating: number;
  };
  purpose: string;
  status: 'open' | 'funded' | 'repaying' | 'completed' | 'defaulted';
  createdAt: string;
  fundingProgress: number;
}

export default function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    minAmount: '',
    maxAmount: '',
    searchTerm: '',
  });

  useEffect(() => {
    const fetchLoans = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // In a real application, this would call an API endpoint
        // For now, we'll simulate a successful response with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockLoans: Loan[] = [
          {
            id: '1',
            title: 'Business Expansion Loan',
            amount: 50000,
            interestRate: 10,
            duration: 6,
            durationUnit: 'months',
            borrower: {
              id: '101',
              name: 'John Doe',
              rating: 4.8,
            },
            purpose: 'Expanding my small grocery store with new inventory',
            status: 'open',
            createdAt: '2023-04-10T10:30:00Z',
            fundingProgress: 65,
          },
          {
            id: '2',
            title: 'Education Loan',
            amount: 25000,
            interestRate: 8,
            duration: 12,
            durationUnit: 'months',
            borrower: {
              id: '102',
              name: 'Jane Smith',
              rating: 4.5,
            },
            purpose: 'Paying for a professional certification course',
            status: 'funded',
            createdAt: '2023-04-08T14:15:00Z',
            fundingProgress: 100,
          },
          {
            id: '3',
            title: 'Agricultural Equipment',
            amount: 75000,
            interestRate: 12,
            duration: 9,
            durationUnit: 'months',
            borrower: {
              id: '103',
              name: 'Michael Johnson',
              rating: 4.2,
            },
            purpose: 'Purchasing farming equipment for increased productivity',
            status: 'repaying',
            createdAt: '2023-04-05T09:45:00Z',
            fundingProgress: 100,
          },
          {
            id: '4',
            title: 'Emergency Medical Expenses',
            amount: 15000,
            interestRate: 5,
            duration: 3,
            durationUnit: 'months',
            borrower: {
              id: '104',
              name: 'Sarah Williams',
              rating: 4.9,
            },
            purpose: 'Covering unexpected medical expenses for my child',
            status: 'completed',
            createdAt: '2023-03-20T16:20:00Z',
            fundingProgress: 100,
          },
          {
            id: '5',
            title: 'Motorcycle Purchase',
            amount: 35000,
            interestRate: 15,
            duration: 12,
            durationUnit: 'months',
            borrower: {
              id: '105',
              name: 'David Brown',
              rating: 3.7,
            },
            purpose: 'Buying a motorcycle for transportation and delivery business',
            status: 'defaulted',
            createdAt: '2023-03-15T11:10:00Z',
            fundingProgress: 100,
          },
        ];
        
        setLoans(mockLoans);
      } catch (err) {
        console.error('Error fetching loans:', err);
        setError('Failed to load loans. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredLoans = loans.filter(loan => {
    // Filter by status
    if (filters.status && loan.status !== filters.status) {
      return false;
    }
    
    // Filter by min amount
    if (filters.minAmount && loan.amount < Number(filters.minAmount)) {
      return false;
    }
    
    // Filter by max amount
    if (filters.maxAmount && loan.amount > Number(filters.maxAmount)) {
      return false;
    }
    
    // Filter by search term (title or purpose)
    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase();
      return (
        loan.title.toLowerCase().includes(searchTerm) ||
        loan.purpose.toLowerCase().includes(searchTerm) ||
        loan.borrower.name.toLowerCase().includes(searchTerm)
      );
    }
    
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'funded':
        return 'bg-yellow-100 text-yellow-800';
      case 'repaying':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'defaulted':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">P2P Loans Marketplace</h1>
            <Link
              href="/modules/microfinance/loans/request"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Request a Loan
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Filters</h2>
              <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Search
                  </label>
                  <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="Search loans..."
                    value={filters.searchTerm}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="sm:col-span-1">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="funded">Funded</option>
                    <option value="repaying">Repaying</option>
                    <option value="completed">Completed</option>
                    <option value="defaulted">Defaulted</option>
                  </select>
                </div>
                
                <div className="sm:col-span-1">
                  <label htmlFor="minAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Min Amount (KSh)
                  </label>
                  <input
                    type="number"
                    name="minAmount"
                    id="minAmount"
                    placeholder="Min"
                    value={filters.minAmount}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="sm:col-span-1">
                  <label htmlFor="maxAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Max Amount (KSh)
                  </label>
                  <input
                    type="number"
                    name="maxAmount"
                    id="maxAmount"
                    placeholder="Max"
                    value={filters.maxAmount}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          ) : filteredLoans.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300">No loans found matching your criteria.</p>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredLoans.map(loan => (
                  <li key={loan.id}>
                    <Link href={`/modules/microfinance/loans/${loan.id}`} className="block hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 truncate">{loan.title}</h3>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(loan.status)}`}>
                              {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                              {loan.borrower.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:ml-6">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {loan.borrower.rating} rating
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <p>
                              Posted on <time dateTime={loan.createdAt}>{formatDate(loan.createdAt)}</time>
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{loan.purpose}</p>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              <span className="font-medium">KSh {loan.amount.toLocaleString()}</span> at {loan.interestRate}% interest
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Duration: {loan.duration} {loan.durationUnit}
                            </p>
                          </div>
                          {loan.status === 'open' && (
                            <div className="w-1/3">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                  <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${loan.fundingProgress}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{loan.fundingProgress}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
