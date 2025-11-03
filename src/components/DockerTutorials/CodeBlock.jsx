// import React from 'react';

export default function CodeBlock({ code }) {
  if (!code) return null;

  return (
    <div className="mt-6 bg-gray-50 border border-cyan-600 rounded-lg p-4 font-mono text-xs">
      {Array.isArray(code.examples) ? (
        code.examples.map((c, i) => (
          <div key={i} className="mb-3">
            <code className="block p-3 rounded bg-white border border-cyan-500 break-words">{c}</code>
          </div>
        ))
      ) : (
        <code className="block p-3 rounded bg-white border border-cyan-500 break-words">{code.cmd || JSON.stringify(code)}</code>
      )}

      {code.note && (
        <div className="mt-2 text-xs text-gray-500">{code.note}</div>
      )}
    </div>
  );
}
