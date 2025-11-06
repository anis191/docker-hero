
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function ActionsFooter({ loading, onRefresh, onLoadMore }) {
  if (loading) {
    return (
      <div className="mt-8 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex gap-3">
        <button
          onClick={onRefresh}
          className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-sm"
        >
          Refresh
        </button>
        <button
          onClick={onLoadMore}
          className="px-4 py-2 rounded-full bg-slate-900 text-white hover:opacity-95 text-sm"
        >
          Load more
        </button>
      </div>
    </div>
  );
}