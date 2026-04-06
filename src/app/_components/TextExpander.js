"use client";
import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = String(children).split(" ");

  const truncated = words
    .slice(0, 20)
    .join(" ")
    .replace(/[.,!?;:]+$/, "");

  const isShort = words.length <= 20;

  const displayText = isExpanded || isShort ? children : truncated + "...";

  return (
    <span>
      {displayText}

      {!isShort && (
        <button
          className="link text-accent-300"
          onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        >
          {isExpanded ? "show less" : "show more"}
        </button>
      )}
    </span>
  );
}
