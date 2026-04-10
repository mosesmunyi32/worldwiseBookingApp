"use client";
import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setOverflow] = useState(false);

  const words = String(children).split(" ");

  const truncated = words
    .slice(0, 20)
    .join(" ")
    .replace(/[.,!?;:]+$/, "");

  const isShort = words.length <= 20;

  const displayText = isExpanded || isShort ? children : truncated + "...";

  function handleClick() {
    setIsExpanded((isExpanded) => !isExpanded);
    setOverflow((isOverflow) => !isOverflow);
  }

  return (
    <span>
      {!isOverflow && displayText}

      {isOverflow && (
        <div className="overflow-y-scroll h-30">{displayText} </div>
      )}
      {!isShort && (
        <Button onClick={handleClick}>
          {!isExpanded ? "showmore" : "showless"}
        </Button>
      )}
    </span>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="link text-accent-300">
      {children}
    </button>
  );
}
