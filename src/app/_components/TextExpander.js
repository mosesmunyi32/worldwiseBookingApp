"use client";
import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? String(children)
    : String(children).split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}
      <button
        className="link text-accent-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "showless" : "showmore"}
      </button>
    </span>
  );
}
