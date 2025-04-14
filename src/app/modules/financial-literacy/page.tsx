import React from 'react';
import Link from 'next/link';

export default function FinancialLiteracyPage() {
  // Sample learning modules
  const learningModules = [
    {
      id: 1,
      title: 'Budgeting Basics',
      description: 'Learn how to create and maintain a personal or family budget',
      level: 'Beginner',
      duration: '30 minutes',
      progress: 75,
      image: '💰',
    },
    {
      id: 2,
      title: 'Saving Strategies',
      description: 'Discover effective ways to save money even with a limited income',
      level: 'Beginner',
      duration: '45 minutes',
      progress: 50,
      image: '🏦',
    },
    {
      id: 3,
      title: 'Understanding Loans',
      description: 'Learn about different types of loans and how to manage debt responsibly',
      level: 'Intermediate',
      duration: '1 hour',
      progress: 25,
      image: '📝',
    },
    {
      id: 4,
      title: 'Introduction to Investing',
      description: 'Explore the basics of investing and growing your wealth',
      level: 'Intermediate',
      duration: '1.5 hours',
      progress: 0,
      image: '📈',
    },
    {
      id: 5,
      title: 'Planning for Emergencies',
      description: 'How to build an emergency fund and prepare for financial uncertainties',
      level: 'Beginner',
      duration: '45 minutes',
      progress: 0,
      image: '🚨',
    },
    {
      id: 6,
      title: 'Business Financial Management',
      description: 'Financial management basics for small business owners and entrepreneurs',
      level: 'Advanced',
      duration: '2 hours',
      progress: 0,
      image: '🏪',
    },
  ];

  // Sample financial goals
  const financialGoals = [
    {
      id: 1,
      title: 'Emergency Fund',
      target: 'KSh 30,000',
      current: 'KSh 12,000',
      progress: 40,
      deadline: 'December 2023',
    },
    {
      id: 2,
      title: 'Business Startup',
      target: 'KSh 100,000',
      current: 'KSh 25,000',
      progress: 25,
      deadline: 'June 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Financial Literacy Application
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Build your financial knowledge and skills through interactive learning
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Dashboard Summary */}
          <div className="px-4 py-6 sm:px-0 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-blue-50 dark:bg-blue-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                            Learning Progress
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900 dark:text-white">
                              2 of 6 modules completed
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                            Savings Progress
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900 dark:text-white">
                              KSh 37,000 saved
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                            Financial Health Score
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900 dark:text-white">
                              68/100 (Good)
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Modules */}
          <div className="px-4 sm:px-0 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Modules</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learningModules.map((module) => (
                <div key={module.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 text-3xl mr-3">
                        {module.image}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{module.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">
                            {module.level}
                          </span>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {module.description}
                    </p>
                    <div className="mt-2">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                              {module.progress}% Complete
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-800">
                          <div style={{ width: `${module.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {module.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Goals */}
          <div className="px-4 sm:px-0 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Financial Goals</h2>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add New Goal
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {financialGoals.map((goal) => (
                  <li key={goal.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-blue-800 dark:text-blue-200 font-semibold">{goal.progress}%</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{goal.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Target: {goal.target}</p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <button
                            type="button"
                            className="ml-3 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Add Funds
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            Current: {goal.current}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:ml-6">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Deadline: {goal.deadline}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-800">
                            <div style={{ width: `${goal.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Financial Tools */}
          <div className="px-4 sm:px-0 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Financial Tools</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Budget Calculator</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Create a personalized budget based on your income and expenses
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Create a budget →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Loan Calculator</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Calculate loan payments and interest for different loan types
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Calculate a loan →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Savings Planner</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Plan your savings goals and track your progress over time
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Plan your savings →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Expense Tracker</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Track your daily expenses and identify spending patterns
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Track expenses →
                    </Link>
                  </div>
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
      </main>
    </div>
  );
}
