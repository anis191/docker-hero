import React from "react";

export default function TagButtons({ tags, currentTag, onTagClick }) {
  return (
    <div className="flex flex-wrap gap-2 bg-white/80 p-1 rounded-2xl shadow-sm">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onTagClick(t)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-shadow duration-150 focus:outline-none ${
            currentTag === t
              ? "bg-slate-900 text-white shadow-2xl"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}


