// import React from 'react';

export default function ProgressBar({ value, label, smallLabel }) {
  return (
    <div className="mt-3">
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="h-2 rounded-full bg-blue-600" style={{ width: `${value}%` }} />
      </div>
      <p className="text-xs text-gray-500 mt-2">{value}% {smallLabel || label}</p>
    </div>
  );
}
