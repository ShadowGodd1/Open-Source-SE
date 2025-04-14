import React from 'react';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Authentication & Profile System
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Universal digital identity with tiered KYC levels
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Features</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                <li>Universal digital identity with tiered KYC levels</li>
                <li>Integration with existing ID systems (Huduma Namba)</li>
                <li>Reputation management across modules</li>
                <li>Offline authentication capabilities</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">
                  Return to Home
                </Link>
              </div>
              <div className="text-sm">
                <Link href="/modules/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
