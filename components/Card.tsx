import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, action }) => {
  return (
    <div className={`bg-white rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 flex flex-col ${className}`}>
      {(title || action) && (
        <div className="flex justify-between items-center mb-6">
          {title && <h3 className="text-zinc-900 font-semibold text-lg">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
};