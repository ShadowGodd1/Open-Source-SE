"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

export default function PostJobPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    isRemote: false,
    jobType: 'Full-time',
    salaryMin: '',
    salaryMax: '',
    salaryCurrency: 'KSh',
    skills: '',
    applicationDeadline: '',
    educationRequired: '',
    experienceRequired: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real application, this would call an API endpoint
      // For now, we'll simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/modules/freelance');
      }, 2000);
    } catch (err) {
      console.error('Error posting job:', err);
      setError('Failed to post job. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute requiredKycLevel={2}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/modules/freelance"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Job Listings
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post a New Job</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                Fill out the form below to post a new job listing
              </p>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
              {success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <p className="font-bold">Job Posted Successfully!</p>
                  <p className="text-sm">Your job has been posted. Redirecting to job listings...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Job Title *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="e.g. Web Developer, Graphic Designer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Job Description *
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="Provide a detailed description of the job..."
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Include responsibilities, requirements, and any other relevant information.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Location *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="location"
                          id="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. Nairobi, Mombasa"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-3">
                      <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Job Type *
                      </label>
                      <div className="mt-1">
                        <select
                          id="jobType"
                          name="jobType"
                          required
                          value={formData.jobType}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Internship">Internship</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="isRemote"
                        name="isRemote"
                        type="checkbox"
                        checked={formData.isRemote}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="isRemote" className="font-medium text-gray-700 dark:text-gray-300">
                        This is a remote job
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="salaryCurrency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Currency
                      </label>
                      <div className="mt-1">
                        <select
                          id="salaryCurrency"
                          name="salaryCurrency"
                          value={formData.salaryCurrency}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        >
                          <option value="KSh">KSh (Kenyan Shilling)</option>
                          <option value="USD">USD (US Dollar)</option>
                          <option value="EUR">EUR (Euro)</option>
                          <option value="GBP">GBP (British Pound)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="salaryMin" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Minimum Salary
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="salaryMin"
                          id="salaryMin"
                          value={formData.salaryMin}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 30000"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="salaryMax" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Maximum Salary
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="salaryMax"
                          id="salaryMax"
                          value={formData.salaryMax}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 50000"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Required Skills *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="skills"
                        id="skills"
                        required
                        value={formData.skills}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="e.g. JavaScript, React, Node.js"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Separate skills with commas.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Application Deadline
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="applicationDeadline"
                          id="applicationDeadline"
                          value={formData.applicationDeadline}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="educationRequired" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Education Required
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="educationRequired"
                          id="educationRequired"
                          value={formData.educationRequired}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. Bachelor's Degree"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="experienceRequired" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Experience Required
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="experienceRequired"
                          id="experienceRequired"
                          value={formData.experienceRequired}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="e.g. 2+ years"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link
                      href="/modules/freelance"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Posting...' : 'Post Job'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
