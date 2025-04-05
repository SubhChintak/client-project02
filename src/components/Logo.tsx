
import React from 'react';

export function Logo({ className = "", size = "default" }: { className?: string, size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-6",
    default: "h-8",
    large: "h-10"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={`mr-2 ${sizeClasses[size]} text-primary`} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
      >
        <path 
          d="M20 6H4V18H20V6Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M15 3V6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M9 3V6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M9 11L11 13L15 9" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M4 10H20" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold text-xl">The Artistic Affinity</span>
    </div>
  );
}
