'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're sorry, but an error occurred while rendering this page.
            </p>
            {process.env.NODE_ENV !== 'production' && (
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-8 text-left overflow-auto max-h-64">
                <p className="text-red-800 dark:text-red-300 font-mono text-sm">
                  {error.message || 'An unknown error occurred'}
                </p>
                {error.stack && (
                  <pre className="text-xs text-red-700 dark:text-red-400 font-mono overflow-auto mt-2">
                    {error.stack}
                  </pre>
                )}
                {error.digest && (
                  <p className="text-xs text-red-700 dark:text-red-400 font-mono mt-2">
                    Error Digest: {error.digest}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
                  </svg>
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
