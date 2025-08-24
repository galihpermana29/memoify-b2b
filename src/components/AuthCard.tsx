import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  logo: React.ReactNode;
  classNameTitle?: string;
  classNameSubtitle?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ children, title, subtitle, logo, classNameTitle, classNameSubtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-[456px] p-6 space-y-6 bg-white rounded-lg shadow-md">
        {logo}
        <div className="text-center">
          <h2 className={cn("text-[28px] leading-[120%] font-semibold text-[#121212]", classNameTitle)}>{title}</h2>
          <p className={cn("mt-1 text-base font-normal text-[#666D80]", classNameSubtitle)}>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
