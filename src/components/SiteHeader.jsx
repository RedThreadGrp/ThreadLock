import React, { useState, useEffect } from "react";
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

/* ---------------- Header: MODIFIED ---------------- */
const SiteHeader = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = isScrolled
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200"
        : "bg-transparent";
    
    const navTextClasses = isScrolled ? "text-slate-700" : "text-white";

    return (
        <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${headerClasses}`}>
            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                <Link href="/"><BrandWordmark darkText={isScrolled} /></Link>

                <nav className={`hidden md:flex items-center space-x-6 font-semibold ${navTextClasses}`}>
                    <Link href="/resources" className="hover:text-orange-600 transition-colors">Resources</Link>
                    <Link href="/sarahs-story" className="hover:text-orange-600 transition-colors">Her Story</Link>
                    <Link href="/founder-story" className="hover:text-orange-600 transition-colors">Our Story</Link>
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

            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
                <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-slate-200">
                    <Link href="/resources" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Resources</Link>
                    <Link href="/sarahs-story" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Her Story</Link>
                    <Link href="/founder-story" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Our Story</Link>
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
