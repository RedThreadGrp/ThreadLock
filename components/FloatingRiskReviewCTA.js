import { useState, useEffect } from 'react';

const MinusIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function FloatingRiskReviewCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user has minimized the CTA in this session
    const wasMinimized = sessionStorage.getItem('riskReviewMinimized');
    
    if (wasMinimized === 'true') {
      setIsMinimized(true);
    }

    const handleScroll = () => {
      const scrollThreshold = window.innerWidth >= 1024 ? 120 : 80;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMinimize = () => {
    setIsMinimized(true);
    sessionStorage.setItem('riskReviewMinimized', 'true');
  };

  const handleRestore = () => {
    setIsMinimized(false);
    sessionStorage.setItem('riskReviewMinimized', 'false');
  };

  if (!isVisible || isMobileMenuOpen) return null;

  // Determine text based on screen size
  const getDisplayText = () => {
    if (typeof window === 'undefined') return 'Before you act: Check where you are';
    const width = window.innerWidth;
    if (width >= 1024) return 'Before you act: Check where you are';
    if (width >= 640) return 'Before you act';
    return 'Check where you are';
  };

  const shouldShowMinimizedByDefault = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 640;
  };

  // Mobile devices show minimized by default
  const displayMinimized = isMinimized || shouldShowMinimizedByDefault();

  if (displayMinimized) {
    return (
      <button
        onClick={handleRestore}
        className="fixed top-20 left-4 bg-slate-800/90 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-all duration-300 ease-in-out z-30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-sm"
        aria-label="Restore risk review prompt"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        Check where you are
      </button>
    );
  }

  return (
    <div
      className="fixed top-20 left-4 bg-slate-800/90 text-white px-4 py-3 rounded-lg flex items-center gap-3 z-30 shadow-sm max-w-md"
      style={{ backdropFilter: 'blur(4px)' }}
      role="complementary"
      aria-label="Risk review prompt"
    >
      <a
        href="https://app.threadlock.ai/readiness"
        className="text-sm font-medium hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
      >
        <span className="hidden lg:inline">{getDisplayText()}</span>
        <span className="hidden sm:inline lg:hidden">Before you act</span>
        <span className="sm:hidden">Check where you are</span>
      </a>
      <button
        onClick={handleMinimize}
        className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1 ml-auto"
        aria-label="Minimize prompt"
      >
        <MinusIcon />
      </button>
    </div>
  );
}
