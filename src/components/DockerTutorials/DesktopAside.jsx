// import React from 'react';
import { FaDocker } from 'react-icons/fa';
import LanguageToggle from './LanguageToggle';
import ProgressBar from './ProgressBar';

export default function DesktopAside({ steps, index, setIndex, language, toggleLanguage, progress }) {
  return (
    <aside className="hidden lg:block lg:col-span-4 bg-white rounded-2xl p-6 shadow sticky top-8 h-[calc(100vh-4rem)] overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaDocker className="text-3xl text-blue-600 mr-3" />
          <div>
            <h3 className="text-lg font-bold">Docker Step-by-Step</h3>
            <p className="text-sm text-gray-500">{language === 'en' ? 'Follow steps in order' : 'ধাপে ধাপে অনুসরণ করুন'}</p>
          </div>
        </div>
        <LanguageToggle language={language} onToggle={toggleLanguage} />
      </div>

      <ProgressBar value={progress} label={language === 'en' ? 'complete' : 'সম্পন্ন'} />

      <nav className="space-y-2 mt-4">
        {steps.map((s, i) => (
          <button
            key={s.id + i}
            onClick={() => setIndex(i)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-start ${i === index ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-semibold text-blue-700 bg-blue-100">{i + 1}</div>
            <div>
              <div className="font-medium text-sm text-gray-800">{s.title}</div>
              <div className="text-xs text-gray-500">{s.summary}</div>
            </div>
          </button>
        ))}
      </nav>

      <div className="mt-6 text-center text-xs text-gray-400">{language === 'en' ? 'Tip: Click a step to jump.' : 'টিপ: ধাপে ক্লিক করে যান।'}</div>
    </aside>
  );
}
