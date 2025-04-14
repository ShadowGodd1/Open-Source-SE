import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
            </svg>
            Go to Homepage
          </Link>
          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Looking for something else?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <Link
            href="/modules/auth"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-blue-600 dark:text-blue-400">Authentication</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Login or register an account</p>
          </Link>
          <Link
            href="/modules/freelance"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-blue-600 dark:text-blue-400">Freelance Marketplace</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find or post freelance jobs</p>
          </Link>
          <Link
            href="/modules/microfinance"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-blue-600 dark:text-blue-400">Microfinance</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Access financial services</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
