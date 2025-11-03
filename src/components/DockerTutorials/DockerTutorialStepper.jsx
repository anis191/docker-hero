// DockerTutorialStepper.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { getLocalizedSteps } from './getLocalizedSteps';
import MobileSelector from './MobileSelector';
import DesktopAside from './DesktopAside';
import MainContent from './MainContent';

export default function DockerTutorialStepper() {
  const [language, setLanguage] = useState('en');
  const steps = useMemo(() => getLocalizedSteps(language), [language]);
  const [index, setIndex] = useState(0);

  // Clamp index if steps length changes (or on language change)
  useEffect(() => {
    if (index > steps.length - 1) {
      setIndex(steps.length - 1);
    }
    if (index < 0) setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, steps.length]);

  const next = () => setIndex(i => Math.min(i + 1, steps.length - 1));
  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const progress = Math.round(((index + 1) / steps.length) * 100);
  const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'bn' : 'en'));

  return (
    <div className="min-h-screen  bg-slate-200 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <MobileSelector
          steps={steps}
          index={index}
          setIndex={setIndex}
          language={language}
          toggleLanguage={toggleLanguage}
          progress={progress}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 md:mt-14">
          <DesktopAside
            steps={steps}
            index={index}
            setIndex={setIndex}
            language={language}
            toggleLanguage={toggleLanguage}
            progress={progress}
          />

          <MainContent
            steps={steps}
            index={index}
            language={language}
            prev={prev}
            next={next}
          />
        </div>
      </div>
    </div>
  );
}
