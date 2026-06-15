import { useRef, useEffect, useState } from "react";

export default function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // measures the real content height to animate correctly
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">

      {/* trigger button */}
      <button
        className="accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="accordion-question"
          style={{ color: isOpen ? "#c8f564" : "#f0ede8" }}
        >
          {item.question}
        </span>

        {/* + icon that rotates into × */}
        <span
          className="accordion-icon"
          style={{
            borderColor: isOpen ? "#c8f564" : "rgba(255,255,255,0.15)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            color: isOpen ? "#c8f564" : "rgba(255,255,255,0.4)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1v8M1 5h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* animated content panel */}
      <div
        className="accordion-panel"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="accordion-answer">
          <p>{item.answer}</p>
        </div>
      </div>

    </div>
  );
}