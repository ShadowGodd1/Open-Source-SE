import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-blue-800 dark:bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                OSEE Kenya
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`${
                    isActive('/') 
                      ? 'bg-blue-900 text-white' 
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/modules/auth"
                  className={`${
                    isActive('/modules/auth') 
                      ? 'bg-blue-900 text-white' 
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Authentication
                </Link>
                <Link
                  href="/modules/freelance"
                  className={`${
                    isActive('/modules/freelance') 
                      ? 'bg-blue-900 text-white' 
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Freelance
                </Link>
                <Link
                  href="/modules/microfinance"
                  className={`${
                    isActive('/modules/microfinance') 
                      ? 'bg-blue-900 text-white' 
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Microfinance
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/modules/auth/login"
                className="text-blue-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/modules/auth/register"
                className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`${
              isActive('/') 
                ? 'bg-blue-900 text-white' 
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href="/modules/auth"
            className={`${
              isActive('/modules/auth') 
                ? 'bg-blue-900 text-white' 
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Authentication
          </Link>
          <Link
            href="/modules/freelance"
            className={`${
              isActive('/modules/freelance') 
                ? 'bg-blue-900 text-white' 
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Freelance
          </Link>
          <Link
            href="/modules/microfinance"
            className={`${
              isActive('/modules/microfinance') 
                ? 'bg-blue-900 text-white' 
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Microfinance
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-blue-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <svg className="h-10 w-10 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Guest User</div>
              <div className="text-sm font-medium leading-none text-blue-200">guest@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              href="/modules/auth/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              href="/modules/auth/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
