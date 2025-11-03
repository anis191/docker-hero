
import { stepsContent } from './stepsContent';

export function getLocalizedSteps(lang) {
  const en = stepsContent.en;
  const loc = stepsContent[lang] || [];
  return en.map((enStep, i) => {
    const l = loc[i] || {};
    return {
      id: l.id || enStep.id,
      title: l.title || enStep.title,
      summary: l.summary || enStep.summary,
      details: l.details || enStep.details,
      code: l.code || enStep.code
    };
  });
}
