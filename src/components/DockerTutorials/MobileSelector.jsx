
// import React from 'react';
import ProgressBar from './ProgressBar';
import LanguageToggle from './LanguageToggle';

export default function MobileSelector({ steps, index, setIndex, language, toggleLanguage, progress }) {
  return (
    <div className="lg:hidden mt-13">
      <div className="flex items-center justify-between mb-2">
        <div className="">
          <div>
            <div className="text-sm font-semibold">Docker Steps</div>
            <div className="text-xs text-gray-500">{language === 'en' ? 'Tap a step' : 'স্টেপে ট্যাপ করুন'}</div>
          </div>
        </div>

        <LanguageToggle language={language} onToggle={toggleLanguage} className="px-3 py-1 rounded bg-blue-600 text-white text-xs" />
      </div>

      <div className="overflow-x-auto -mx-2 px-2 pb-2">
        <div className="flex gap-2">
          {steps.map((s, i) => (
            <button
              key={s.id + i}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg border ${i === index ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-sm text-gray-700'}`}
              aria-current={i === index}
            >
              <div className="whitespace-nowrap text-xs font-medium">{i + 1}. {s.title}</div>
            </button>
          ))}
        </div>
      </div>

      <ProgressBar value={progress} label={language === 'en' ? 'complete' : 'সম্পন্ন'} />
    </div>
  );
}
