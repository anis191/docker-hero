
import React from "react";

export default function ErrorMessage({ error }) {
  if (!error) return null;

  return (
    <div className="mb-4 text-red-600 bg-red-50 p-3 rounded">
      Error: {error}
    </div>
  );
}