"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from './auth/auth-context';

export default function Navigation() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsMobileMenuOpen(false);
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

                {isAuthenticated && (
                  <>
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
                    <Link
                      href="/modules/cooperative"
                      className={`${
                        isActive('/modules/cooperative')
                          ? 'bg-blue-900 text-white'
                          : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Cooperatives
                    </Link>
                    <Link
                      href="/modules/job-matching"
                      className={`${
                        isActive('/modules/job-matching')
                          ? 'bg-blue-900 text-white'
                          : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Jobs
                    </Link>
                  </>
                )}

                <Link
                  href="/modules/financial-literacy"
                  className={`${
                    isActive('/modules/financial-literacy')
                      ? 'bg-blue-900 text-white'
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Financial Literacy
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoading ? (
                <div className="animate-pulse h-8 w-20 bg-blue-700 rounded-md"></div>
              ) : isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/modules/auth/profile"
                    className="text-blue-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {user?.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${
              isActive('/')
                ? 'bg-blue-900 text-white'
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </Link>

          {isAuthenticated && (
            <>
              <Link
                href="/modules/freelance"
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive('/modules/microfinance')
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Microfinance
              </Link>
              <Link
                href="/modules/cooperative"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive('/modules/cooperative')
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Cooperatives
              </Link>
              <Link
                href="/modules/job-matching"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive('/modules/job-matching')
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Jobs
              </Link>
            </>
          )}

          <Link
            href="/modules/financial-literacy"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${
              isActive('/modules/financial-literacy')
                ? 'bg-blue-900 text-white'
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Financial Literacy
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-blue-700">
          {isLoading ? (
            <div className="px-5 py-3 animate-pulse">
              <div className="h-4 bg-blue-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-blue-700 rounded w-1/2"></div>
            </div>
          ) : isAuthenticated && user ? (
            <>
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {user.profile_image_url ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.profile_image_url}
                      alt={user.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.name}</div>
                  <div className="text-sm font-medium leading-none text-blue-200">{user.email || user.phone}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  href="/modules/auth/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
                >
                  Your Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="mt-3 px-2 space-y-1">
              <Link
                href="/modules/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                href="/modules/auth/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
