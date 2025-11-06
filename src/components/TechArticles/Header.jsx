import React from "react";
import TagButtons from "./TagButtons";

export default function Header({ tag, onTagClick, tags }) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Tech Articles • Docker / Linux / DevOps</h1>
        <p className="mt-1 text-sm text-slate-500">
          Trending articles from Dev.to. Click a tag to filter articles.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <TagButtons 
          tags={tags} 
          currentTag={tag} 
          onTagClick={onTagClick} 
        />
      </div>
    </header>
  );
}


