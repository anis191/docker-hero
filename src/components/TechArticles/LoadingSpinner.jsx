
import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 text-slate-600">
      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
      </svg>
      Loading articles...
    </div>
  );
}