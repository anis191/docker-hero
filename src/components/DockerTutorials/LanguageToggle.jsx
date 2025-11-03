// import React from 'react';

export default function LanguageToggle({ language, onToggle, className = 'px-3 py-1 rounded bg-blue-600 text-white text-sm' }) {
  return (
    <button
      onClick={onToggle}
      className={className}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'বাংলা' : 'EN'}
    </button>
  );
}
