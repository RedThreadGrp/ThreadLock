import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ---------------- Icons ---------------- */
const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

/* ---------------- Text Brand ---------------- */
function BrandWordmark({ className = "", darkText = true }) {
    return (
        <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
            <span className={darkText ? "text-slate-800" : "text-white"}>Thread</span>
            <span className="text-orange-600">Lock</span>
            <span className={`ml-0.5 align-text-top text-[0.5em] font-black ${darkText ? 'text-slate-500' : 'text-slate-300'}`}>™</span>
        </span>
    );
}

/* ---------------- Resources Dropdown Component ---------------- */
function ResourcesDropdown({ darkText = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonId = 'resources-menu-button';

    const textClasses = darkText ? "text-slate-700" : "text-white";

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

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                id={buttonId}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 ${textClasses} hover:text-orange-600 transition-colors focus:outline-none`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Resources
                <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50" role="menu" aria-labelledby={buttonId}>
                    <Link
                        href="/resources"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                        role="menuitem"
                    >
                        Resources
                    </Link>
                    <Link
                        href="/pricing"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                        role="menuitem"
                    >
                        Pricing
                    </Link>
                    <a
                        href="https://app.threadlock.ai/readiness"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                        role="menuitem"
                    >
                        Before You Act
                    </a>
                </div>
            )}
        </div>
    );
}

/* ---------------- Stories Dropdown Component ---------------- */
function StoriesDropdown({ darkText = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonId = 'stories-menu-button';

    const textClasses = darkText ? "text-slate-700" : "text-white";

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

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                id={buttonId}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 ${textClasses} hover:text-orange-600 transition-colors focus:outline-none`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Stories
                <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50" role="menu" aria-labelledby={buttonId}>
                    <Link
                        href="/founder-story"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                        role="menuitem"
                    >
                        Our Story
                    </Link>
                    <Link
                        href="/sarahs-story"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                        role="menuitem"
                    >
                        Sarah's Story
                    </Link>
                </div>
            )}
        </div>
    );
}

/* ---------------- Header: MODIFIED ---------------- */
// Constants
const MOBILE_MENU_MAX_HEIGHT = '32rem'; // Height to accommodate expanded Stories section

const SiteHeader = ({ theme = 'auto' }) => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if we should use dark text based on theme prop and scroll state
    // theme = 'light' means light background (use dark text)
    // theme = 'dark' means dark background (use light text)
    // theme = 'auto' means use scroll-based detection
    const shouldUseDarkText = theme === 'light' ? true : theme === 'dark' ? false : isScrolled;

    const headerClasses = isScrolled
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200"
        : "bg-transparent";
    
    const navTextClasses = shouldUseDarkText ? "text-slate-700" : "text-white";

    return (
        <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${headerClasses}`}>
            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                <Link href="/"><BrandWordmark darkText={shouldUseDarkText} /></Link>

                <nav className={`hidden md:flex items-center space-x-6 font-semibold ${navTextClasses}`}>
                    <ResourcesDropdown darkText={shouldUseDarkText} />
                    <StoriesDropdown darkText={shouldUseDarkText} />
                    <Link href="/professionals" className="hover:text-orange-600 transition-colors">Attorneys</Link>
                    <Link href="/benefits" className="hover:text-orange-600 transition-colors">Employers</Link>
                    <Link href="/sovereign" className="hover:text-orange-600 transition-colors">Tribal</Link>
                    <Link href="/edu/clinics" className="hover:text-orange-600 transition-colors">Students</Link>
                    <Link href="/login" className="hover:text-orange-600 transition-colors">Login</Link>
                    <Link href="/signup" className="bg-orange-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all">
                        Sign Up
                    </Link>
                </nav>

                <button
                    className={`md:hidden p-2 ${navTextClasses}`}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? `max-h-[${MOBILE_MENU_MAX_HEIGHT}]` : "max-h-0"}`}>
                <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-slate-200">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 py-1">Resources</p>
                        <Link href="/resources" onClick={() => setOpen(false)} className="block py-2 pl-4 text-slate-800 hover:text-orange-600">Resources</Link>
                        <Link href="/pricing" onClick={() => setOpen(false)} className="block py-2 pl-4 text-slate-800 hover:text-orange-600">Pricing</Link>
                        <a href="https://app.threadlock.ai/readiness" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block py-2 pl-4 text-slate-800 hover:text-orange-600">Before You Act</a>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 py-1">Stories</p>
                        <Link href="/founder-story" onClick={() => setOpen(false)} className="block py-2 pl-4 text-slate-800 hover:text-orange-600">Our Story</Link>
                        <Link href="/sarahs-story" onClick={() => setOpen(false)} className="block py-2 pl-4 text-slate-800 hover:text-orange-600">Sarah's Story</Link>
                    </div>
                    <Link href="/professionals" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Attorneys</Link>
                    <Link href="/benefits" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Employers</Link>
                    <Link href="/sovereign" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Tribal</Link>
                    <Link href="/edu/clinics" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Students</Link>
                    <Link href="/login" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Login</Link>
                    <Link href="/signup" onClick={() => setOpen(false)} className="w-full mt-2 bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all block text-center">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
