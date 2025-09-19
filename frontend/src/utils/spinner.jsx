import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-slow"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-medium"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-fast"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;