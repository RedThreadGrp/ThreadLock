import { useState, useEffect } from 'react';

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MinusIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function FloatingRiskReviewCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if user has minimized the card in this session
    const wasMinimized = sessionStorage.getItem('riskReviewMinimized');
    
    if (wasMinimized === 'true') {
      setIsMinimized(true);
      setIsVisible(true);
    } else {
      // Show the card after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4000); // 4 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleMinimize = () => {
    setIsMinimized(true);
    sessionStorage.setItem('riskReviewMinimized', 'true');
  };

  const handleRestore = () => {
    setIsMinimized(false);
    sessionStorage.setItem('riskReviewMinimized', 'false');
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <button
        onClick={handleRestore}
        className="fixed bottom-6 right-6 bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 ease-in-out z-40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Restore risk review card"
      >
        Pause before you act
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 max-w-sm z-40 transition-all duration-300 ease-in-out"
      role="dialog"
      aria-labelledby="risk-review-title"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 id="risk-review-title" className="text-lg font-bold text-slate-900">
          Before you act
        </h3>
        <button
          onClick={handleMinimize}
          className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1"
          aria-label="Minimize card"
        >
          <MinusIcon />
        </button>
      </div>
      
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        A short review to help you pause, assess risk, and manage expectations before taking action in family court.
      </p>
      
      <a
        href="https://app.threadlock.ai/readiness"
        className="block w-full bg-orange-600 text-white text-center font-semibold px-4 py-2.5 rounded-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Check where you are
      </a>
    </div>
  );
}
