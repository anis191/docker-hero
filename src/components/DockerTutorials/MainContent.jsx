// import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CodeBlock from './CodeBlock';

export default function MainContent({ steps, index, language, prev, next }) {
  const step = steps[index];

  return (
    <main className="lg:col-span-8">
      <div className="bg-white rounded-2xl p-6 shadow">
        <header className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{step.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{step.summary}</p>
          </div>

          <div className="text-right">
            <div className="text-xs text-cyan-600">{index + 1}/{steps.length}</div>
          </div>
        </header>

        <section className="prose max-w-none text-sm whitespace-pre-line">{step.details}</section>

        <CodeBlock code={step.code} />

        <div className="mt-6 flex">
          <div className="">
            <button
              onClick={prev}
              className={`flex items-center px-4 py-2 rounded-lg border ${index === 0 ? 'opacity-40 pointer-events-none' : 'hover:bg-gray-50'}`}>
              <FaChevronLeft className="mr-2" /> {language === 'en' ? 'Previous' : 'পূর্ববর্তী'}
            </button>
          </div>

          <div className="ml-auto">
            <button
              onClick={next}
              className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              {language === 'en' ? 'Next' : 'পরবর্তী'} <FaChevronRight className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
