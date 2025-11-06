
import React from "react";

export default function AppFooter() {
  return (
    <footer className="mt-10 text-center text-sm text-slate-500">
      Data from{" "}
      <a
        href="https://dev.to"
        target="_blank"
        rel="noreferrer"
        className="text-sky-600"
      >
        dev.to
      </a>
      . Built with ❤️
    </footer>
  );
}