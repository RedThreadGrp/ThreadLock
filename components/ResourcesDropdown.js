import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

export default function ResourcesDropdown({ darkText = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const textClasses = darkText ? "text-slate-700" : "text-white";
  const hoverClasses = "hover:text-orange-600";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 ${textClasses} ${hoverClasses} transition-colors focus:outline-none`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Resources
        <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          <Link
            href="/resources"
            onClick={handleItemClick}
            className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
          >
            Resources
          </Link>
          <a
            href="https://app.threadlock.ai/readiness"
            onClick={handleItemClick}
            className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
          >
            Before you act
          </a>
          <Link
            href="/sarahs-story"
            onClick={handleItemClick}
            className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
          >
            Her Story
          </Link>
          <Link
            href="/founder-story"
            onClick={handleItemClick}
            className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
          >
            Our Story
          </Link>
        </div>
      )}
    </div>
  );
}
