"use client";

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth-context';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredKycLevel?: number;
}

export default function ProtectedRoute({ children, requiredKycLevel = 1 }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Redirect to login if not authenticated
      router.push('/modules/auth/login');
    } else if (!isLoading && isAuthenticated && user?.kyc_level && user.kyc_level < requiredKycLevel) {
      // Redirect to KYC upgrade page if KYC level is insufficient
      router.push('/modules/auth/kyc-upgrade');
    }
  }, [isLoading, isAuthenticated, user, requiredKycLevel, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If not authenticated or insufficient KYC level, don't render children
  if (!isAuthenticated || (user?.kyc_level && user.kyc_level < requiredKycLevel)) {
    return null;
  }

  // Render children if authenticated and KYC level is sufficient
  return <>{children}</>;
}
