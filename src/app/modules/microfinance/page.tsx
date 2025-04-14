import React from 'react';
import Link from 'next/link';

export default function MicrofinancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Peer-to-Peer Microfinance Platform
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Digital Chama Management</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Create and manage digital chamas (savings groups) with transparent governance and automated record-keeping.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Create a Chama →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">P2P Lending</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Lend and borrow directly with other users with customizable interest rates and repayment terms.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Browse Loan Listings →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Group Savings</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Participate in revolving funds (table banking) with your community or create your own savings group.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Join a Savings Group →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Credit Scoring</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Build a credit history through your activities on the platform, even if you're unbanked.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        View Your Credit Score →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dispute Resolution</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Access fair and transparent dispute resolution mechanisms for financial disagreements.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Learn About Dispute Resolution →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Financial Education</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Access educational resources about saving, borrowing, and managing finances responsibly.
                    </p>
                    <div className="mt-4">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Browse Learning Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
