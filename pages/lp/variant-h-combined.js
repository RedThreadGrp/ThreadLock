import React, { useState, useEffect } from "react";
import Link from "next/link";
import LandingPageHead from "../../components/LandingPageHead";
import PromoModal from "../../components/PromoModal";
import AppDownloadButtons from "../../components/AppDownloadButtons";
import TrustBar from "../../components/TrustBar";

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
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.23"/><path d="M18.668 15.65a3 3 0 1 0-5.993.23"/><path d="M12 12a3 3 0 1 0-5.993.23"/><path d="M12 19a3 3 0 1 0-5.993.23"/><path d="M18.668 8.65a3 3 0 1 0-5.993.23"/><path d="M12 5a3 3 0 1 0 5.993.23"/><path d="m12 12 2.5 2.5"/><path d="m12 5-2.5 2.5"/><path d="m18.5 8.5 2.5 2.5"/><path d="m12 19 2.5-2.5"/><path d="m6.5 8.5-2.5 2.5"/></svg>
);
const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
const FolderIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
);
const BookOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);
const CheckmarkIcon = ({ color = "green-500", ...props }) => {
  const colorClass = color === "green-600" ? "text-green-600" : "text-green-500";
  return (
    <svg className={`w-5 h-5 ${colorClass} mr-2 shrink-0`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path d="M5 13l4 4L19 7"/>
    </svg>
  );
};

/* ---------------- UI Mockups (scaled down) ---------------- */
const JournalUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-3 md:p-4 flex flex-col md:flex-row gap-3 text-white">
        <div className="w-full md:w-1/3 bg-slate-700/50 rounded-lg p-3">
            <h4 className="font-bold mb-2 text-xs md:text-sm">AI Suggestions</h4>
            <ul className="space-y-2 text-[11px] md:text-xs text-slate-300">
                <li className="bg-slate-600/50 p-2 rounded">Who was present?</li>
                <li className="bg-slate-600/50 p-2 rounded">What was the date and time?</li>
                <li className="bg-slate-600/50 p-2 rounded">Is there photo evidence?</li>
            </ul>
        </div>
        <div className="w-full md:w-2/3 bg-slate-700/50 rounded-lg p-3 flex flex-col">
            <h4 className="font-bold mb-2 text-xs md:text-sm">New Journal Entry</h4>
            <div className="flex-grow bg-slate-600/40 rounded p-2 text-[11px] md:text-xs text-slate-400">
                On Friday evening, the other party was 30 minutes late for the custody exchange...
            </div>
            <div className="flex justify-end gap-2 mt-2">
                <button className="text-[11px] bg-slate-600 px-3 py-1 rounded">Attach File</button>
                <button className="text-[11px] bg-[#006a4d] px-3 py-1 rounded">Save Entry</button>
            </div>
        </div>
    </div>
);

const TimelineUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-3 md:p-4 flex flex-col text-white">
        <h4 className="font-bold text-xs md:text-sm mb-3 text-center">Evidence Timeline</h4>
        <div className="relative flex-grow pl-6 pr-3">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600"></div>
            <div className="space-y-3">
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-[#006a4d] rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
                        <p className="font-semibold">Custody Exchange Late</p>
                        <p className="text-slate-400">July 26, 2025 - 6:30 PM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3" /> Blockchain Verified</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-[#006a4d] rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
                        <p className="font-semibold">Email Received</p>
                        <p className="text-slate-400">July 25, 2025 - 9:15 AM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3" /> Blockchain Verified</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PdfExportUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-white">
        <h4 className="font-bold text-xs md:text-sm mb-3">Court-Ready PDF Export</h4>
        <div className="w-4/5 md:w-3/4 h-56 md:h-64 bg-white rounded-md shadow-lg p-3 text-black flex flex-col">
            <h5 className="text-[11px] font-bold border-b pb-1">Case Summary: Sarah M.</h5>
            <p className="text-[9px] mt-2 text-slate-700 leading-tight">
                <strong>July 26, 2025:</strong> Custody Exchange Late. On Friday evening, the other party was 30 minutes late...
            </p>
            <p className="text-[9px] mt-2 text-slate-700 leading-tight">
                <strong>July 25, 2025:</strong> Email Received. Received a hostile email regarding scheduling...
            </p>
            <div className="flex-grow" />
            <p className="text-[8px] text-center text-slate-500">Page 1 of 5</p>
        </div>
        <button className="text-[11px] bg-[#006a4d] text-white px-4 py-1.5 rounded-md mt-3">Download PDF</button>
    </div>
);

const AppCaseHubMockup = () => (
    <div className="w-full bg-[#111827] rounded-xl p-3 md:p-4 text-white">
        <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400">‹ Cases</span>
            <span className="text-xs border border-slate-600 px-2 py-0.5 rounded text-slate-300">Share ↗</span>
        </div>
        <h4 className="text-sm md:text-base font-bold mb-1">Family Law Case – CA</h4>
        <div className="flex gap-2 mb-2">
            <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded-full text-slate-300">Family</span>
            <span className="text-[10px] border border-green-500 text-green-400 px-2 py-0.5 rounded-full">Active</span>
        </div>
        <div className="mb-3">
            <div className="flex justify-between text-[10px] mb-1">
                <span className="text-slate-400">Documentation Score</span>
                <span className="text-orange-400 font-semibold">74%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{width:'74%'}}></div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
            <button className="bg-orange-500 text-white text-[11px] py-1.5 rounded-lg font-semibold">+ Journal Entry</button>
            <button className="bg-slate-700 text-slate-200 text-[11px] py-1.5 rounded-lg">Scan / Upload</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-800 p-2.5 rounded-lg">
                <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center mb-1.5">
                    <FileTextIcon className="w-3 h-3 text-slate-300" />
                </div>
                <p className="text-[11px] font-bold">Journal</p>
                <p className="text-[10px] text-slate-400">Chronological notes</p>
                <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded-full mt-1 inline-block">28 entries</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg">
                <div className="w-6 h-6 bg-green-900/60 rounded-lg flex items-center justify-center mb-1.5">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <p className="text-[11px] font-bold">Timeline</p>
                <p className="text-[10px] text-slate-400">Chronological events</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg">
                <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center mb-1.5">
                    <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
                <p className="text-[11px] font-bold">Research Hub</p>
                <p className="text-[10px] text-slate-400">Statutes &amp; case law</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg">
                <div className="w-6 h-6 bg-orange-900/60 rounded-lg flex items-center justify-center mb-1.5">
                    <FolderIcon className="w-3 h-3 text-orange-400" />
                </div>
                <p className="text-[11px] font-bold">Organizer</p>
                <p className="text-[10px] text-slate-400">AI-powered insights</p>
                <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded-full mt-1 inline-block">AI</span>
            </div>
        </div>
    </div>
);

const AppJournalEntryMockup = () => (
    <div className="w-full bg-[#1e2535] rounded-xl p-3 md:p-4 text-white">
        <div className="flex justify-between items-center mb-3 border-b border-slate-700 pb-2">
            <h4 className="text-sm md:text-base font-bold">New Journal Entry</h4>
            <span className="text-slate-400 text-xl leading-none cursor-pointer">×</span>
        </div>
        <div className="space-y-2 text-[11px]">
            <div>
                <label className="text-slate-400 block mb-0.5">Title *</label>
                <div className="bg-[#2a3448] rounded p-2 text-slate-500 border border-slate-700">Brief summary of what happened</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="text-slate-400 block mb-0.5">Event Date *</label>
                    <div className="bg-[#2a3448] rounded p-2 text-slate-300 border border-slate-700">03/22/2026</div>
                </div>
                <div>
                    <label className="text-slate-400 block mb-0.5">Time (optional)</label>
                    <div className="bg-[#2a3448] rounded p-2 text-slate-500 border border-slate-700">--:-- --</div>
                </div>
            </div>
            <div>
                <label className="text-slate-400 block mb-0.5">Description *</label>
                <div className="bg-[#2a3448] rounded p-2 text-slate-500 h-12 border border-slate-700">Describe what happened in detail...</div>
            </div>
            <div>
                <label className="text-slate-400 block mb-0.5">Issue Types <span className="text-purple-400 text-[9px]">✦ AI suggestions available after saving</span></label>
                <div className="flex gap-1">
                    <div className="flex-1 bg-[#2a3448] rounded p-2 text-slate-500 border border-slate-700">e.g., custody, evidence (press Enter)</div>
                    <button className="bg-slate-600 px-2 rounded text-white text-[10px]">Add</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 items-end">
                <div>
                    <label className="text-slate-400 block mb-0.5">Severity</label>
                    <div className="bg-[#2a3448] rounded p-2 text-slate-200 border border-slate-700 flex justify-between items-center">Medium <span className="text-slate-400">▾</span></div>
                </div>
                <div className="pb-0.5">
                    <label className="flex items-center gap-1 text-slate-300 text-[10px] cursor-pointer">
                        <span className="w-3 h-3 border border-slate-500 rounded-sm inline-block shrink-0"></span> Flag for review
                    </label>
                </div>
            </div>
        </div>
        <div className="flex gap-2 mt-3 pt-2 border-t border-slate-700">
            <button className="bg-orange-500 text-white px-4 py-1.5 rounded text-[11px] font-semibold">Create Entry</button>
            <button className="bg-slate-600 text-white px-4 py-1.5 rounded text-[11px]">Cancel</button>
        </div>
    </div>
);

const AppCaseOverviewMockup = () => (
    <div className="w-full bg-[#111827] rounded-xl text-white overflow-hidden">
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#0d1117] border-b border-slate-800">
            <div className="flex items-center gap-1.5">
                <div className="bg-slate-700 rounded px-2 py-0.5 text-[9px] flex items-center gap-1 text-slate-300">Family Law Case – CA <span className="text-slate-500">▾</span></div>
            </div>
            <div className="flex gap-1">
                {['⌂','⌕','?','🔔'].map((icon, i) => (
                    <div key={i} className="w-5 h-5 bg-slate-700 rounded text-[10px] flex items-center justify-center text-slate-400">{icon}</div>
                ))}
                <div className="w-5 h-5 bg-orange-500 rounded-full text-[9px] flex items-center justify-center font-bold">A</div>
            </div>
        </div>
        <div className="p-3">
            <h4 className="text-sm font-bold mb-2">Case Overview</h4>
            <div className="bg-slate-800 rounded-lg p-2 mb-2 border border-slate-700">
                <div className="flex justify-between items-center mb-1">
                    <div>
                        <div className="text-[10px] font-semibold text-white">Start Here</div>
                        <div className="text-[9px] text-slate-400">Not sure where to begin? Here are the most useful places to get started.</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 mt-1">
                    {[
                        { label: 'Case Guides', sub: 'Step-by-step guides for your case type', color: 'text-orange-400' },
                        { label: 'Research Hub', sub: 'Toolkits, resources, and research aids', color: 'text-teal-400' },
                        { label: 'Add Documents', sub: 'Upload and organize your case files', color: 'text-blue-400' },
                        { label: 'Journal', sub: 'Document what happened, as it happened', color: 'text-green-400' },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-700/60 rounded p-1.5">
                            <div className={`text-[9px] font-semibold ${item.color} mb-0.5`}>{item.label}</div>
                            <div className="text-[8px] text-slate-400 leading-tight">{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-2 mb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-[10px] font-semibold">Family Law Case – CA</div>
                        <div className="text-[9px] text-slate-400">Jurisdiction: California</div>
                    </div>
                    <div className="flex gap-1">
                        <button className="text-[8px] border border-slate-600 px-1.5 py-0.5 rounded text-slate-300">? Help</button>
                        <button className="text-[8px] border border-slate-600 px-1.5 py-0.5 rounded text-slate-300">✎ Edit case info</button>
                    </div>
                </div>
                <div className="flex gap-3 mt-1.5">
                    <div className="flex-1">
                        <div className="text-[9px] text-teal-400 font-semibold">📖 Your Case Guides</div>
                        <div className="text-[8px] text-slate-400 mt-0.5 leading-tight">Guides for family in California — tailored to your situation</div>
                        <button className="text-[8px] bg-teal-700 text-white px-2 py-0.5 rounded mt-1">Open Case Guides ›</button>
                    </div>
                    <div className="text-[9px] shrink-0">
                        <div className="font-semibold text-slate-300 mb-0.5">Suggested Next Steps</div>
                        <div className="space-y-0.5 text-[8px]">
                            <div className="flex items-center gap-1 text-slate-400"><span className="text-green-400">✓</span> Review your Case Guides</div>
                            <div className="flex items-center gap-1 text-slate-400"><span className="text-green-400">✓</span> Add your first Journal entry</div>
                            <div className="flex items-center gap-1 text-slate-400"><span className="text-green-400">✓</span> Upload a document or evidence</div>
                            <div className="flex items-center gap-1 text-slate-500"><span>○</span> Connect with an attorney</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ---------------- Text Brand ---------------- */
function BrandWordmark({ className = "", darkText = true }) {
    return (
        <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
            <span className={darkText ? "text-slate-800" : "text-white"}>Thread</span>
            <span className="text-blue-600">Lock</span>
            <span className={`ml-0.5 align-text-top text-[0.5em] font-black ${darkText ? 'text-slate-500' : 'text-slate-300'}`}>™</span>
        </span>
    );
}

/* ---------------- Header: MODIFIED ---------------- */
const Header = ({ onCTAClick }) => {
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
                <a href="/"><BrandWordmark darkText={isScrolled} /></a>

                <nav className={`hidden md:flex items-center space-x-6 font-semibold ${navTextClasses}`}>
                    <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                    <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
                    <Link href="/professionals" className="hover:text-blue-600 transition-colors">For Pros</Link>
                    <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
                    <Link href="/login" className="hover:text-blue-600 transition-colors">Login</Link>
                    <button
                        onClick={onCTAClick}
                        className="bg-[#006a4d] text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-[#005a40] transform hover:-translate-y-0.5 transition-all"
                    >
                        Sign Up
                    </button>
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
                    <a href="#features" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-blue-600">Features</a>
                    <Link href="/resources" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-blue-600">Resources</Link>
                    <Link href="/professionals" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-blue-600">For Pros</Link>
                    <Link href="/pricing" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-blue-600">Pricing</Link>
                    <Link href="/login" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-blue-600">Login</Link>
                    <button
                        onClick={() => { setOpen(false); onCTAClick(); }}
                        className="w-full mt-2 bg-[#006a4d] text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-[#005a40] transition-all block text-center"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

/* ---------------- Sections ---------------- */

const HeroSection = ({ onCTAClick }) => (
  <section
    className="relative text-slate-900 bg-gradient-to-br from-slate-50 to-slate-100 min-h-[500px] flex items-center"
  >
    <div className="relative container mx-auto px-6 py-24 text-center w-full">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="block">Finally, an Easy Way to</span>
        <span className="block mt-2 text-green-700">Organize Your Case Evidence.</span>
        <span className="block mt-4">
          Take Control.
        </span>
      </h1>
      <p className="mt-8 text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
        The All-in-One Custody Battle &amp; Divorce Journal. Securely track documents, texts, and events for court.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onCTAClick}
          className="bg-[#006a4d] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-[#005a40] transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center"
        >
          Create Your Secure Timeline
        </button>
        <Link
          href="/login"
          className="bg-slate-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-800 transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center"
        >
          Login
        </Link>
      </div>
    </div>
  </section>
);

const ValuePropositionSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-100 to-green-200 text-[#006a4d] flex items-center justify-center rounded-xl">
            <FolderIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Your Private Divorce Document Hub</h3>
          <p className="text-slate-600 leading-relaxed">
            Stop the chaos of messy folders and lost notes. Securely upload documents, add journal entries, and track events in one place.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-100 to-green-200 text-[#006a4d] flex items-center justify-center rounded-xl">
            <BookOpenIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Build Your Court-Ready Timeline</h3>
          <p className="text-slate-600 leading-relaxed">
            See your case chronologically. Our new timeline automatically populates from your entries, giving you a clear view of your story.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-100 to-green-200 text-[#006a4d] flex items-center justify-center rounded-xl">
            <UsersIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Organize Texts &amp; Emails for Court</h3>
          <p className="text-slate-600 leading-relaxed">
            Save and organize text messages, emails, and communications as evidence. Securely share your organized file with a professional, mediator, or co-parent.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SubscriptionBanner = ({ onCTAClick }) => (
  <section
    id="subscriptions"
    className="relative py-16 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100 border-y border-slate-200 overflow-hidden"
  >
    <div className="container mx-auto px-6 text-center relative">
      <div className="inline-block px-6 py-5 mb-10 border-2 border-[#006a4d] rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-2 text-lg text-slate-800/90 max-w-2xl">
          Choose the plan that&apos;s right for you. All plans include our core features.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* ThreadLock Core - For Individuals */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-slate-200 hover:border-[#006a4d] transition-all shadow-lg text-left flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock Core</h3>
            <p className="text-slate-600">For Individuals</p>
          </div>
          <div className="mb-6">
            <p className="text-5xl font-bold text-slate-900">
              $29
              <span className="text-lg font-normal text-slate-500">/month</span>
            </p>
            <p className="text-sm text-slate-600 mt-2">Annual plan available with 2 months free</p>
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-slate-900 mb-4">Features:</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckmarkIcon />
                <span className="text-slate-700">Guided 5-Step Workflow</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon />
                <span className="text-slate-700">Journal & Evidence Manager</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon />
                <span className="text-slate-700">Document Scanning & OCR</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon />
                <span className="text-slate-700">Timeline Builder (with KML/ICS Import)</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">Add-on:</h5>
              <p className="text-sm text-slate-700 mb-1">
                <strong>Attorney Seat</strong>
              </p>
              <p className="text-2xl font-bold text-blue-600">
                +$19<span className="text-sm font-normal text-slate-500">/month per seat</span>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Add a secure, collaborative seat for your attorney.
              </p>
            </div>
          </div>
          <button
            onClick={onCTAClick}
            className="mt-8 block text-center bg-[#006a4d] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#005a40] transition-all"
          >
            Get Started
          </button>
        </div>

        {/* ThreadLock Pro - For Professionals */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-[#006a4d] p-8 shadow-xl flex flex-col relative">
          <div className="absolute top-0 right-0 bg-[#006a4d] text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">
            POPULAR
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock Pro</h3>
            <p className="text-slate-700">For Legal Professionals</p>
          </div>
          <div className="mb-6">
            <p className="text-5xl font-bold text-slate-900">
              $300
              <span className="text-lg font-normal text-slate-600">/month</span>
            </p>
            <p className="text-sm text-slate-700 mt-2">Includes five client seats</p>
            <p className="text-sm text-slate-700 mt-1">Annual plan: $3,300/year (one month free)</p>
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-slate-900 mb-4">Features:</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">Professional Dashboard</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">Access to the &quot;Review Queue&quot;</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">Built-in Privacy & Conflict Check Flow</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">
                  Upload & Assign Your Firm&apos;s Custom Forms <span className="bg-[#006a4d] text-white text-xs px-2 py-0.5 rounded-full ml-1">New</span>
                </span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">5 Client Seats Included</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">Additional seats available (bulk or individual)</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">1-Click &quot;Sync to Clio&quot;</span>
              </li>
              <li className="flex items-center">
                <CheckmarkIcon color="green-600" />
                <span className="text-slate-800">Full Annotation & Redaction Tools</span>
              </li>
            </ul>
          </div>
          <a
            href="https://app.threadlock.ai/pro/register"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center bg-[#006a4d] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#005a40] transition-all"
          >
            Get Started as Pro
          </a>
        </div>

        {/* ThreadLock for Benefits - For Employers */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-slate-200 hover:border-[#006a4d] transition-all shadow-lg text-left flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock for Benefits</h3>
            <p className="text-slate-600">For Employers</p>
          </div>
          <div className="mb-6">
            <p className="text-5xl font-bold text-slate-900">Custom</p>
            <p className="text-sm text-slate-600 mt-2">Contact us for pricing</p>
          </div>
          <div className="flex-grow">
            <p className="text-slate-700 mb-6">
              Offer ThreadLock as a powerful, affordable legal benefit to your employees. Support your team through life&apos;s most stressful events.
            </p>
            <p className="text-slate-800 font-semibold">Contact us at info@threadlock.ai</p>
          </div>
          <Link
            href="/contact"
            className="mt-8 block text-center bg-[#006a4d] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#005a40] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-green-100 to-green-200 text-[#006a4d] flex items-center justify-center rounded-xl">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{children}</p>
        </div>
    </div>
);

const FeaturesSection = () => (
  <section
    id="features"
    className="relative py-20 md:py-28 bg-fixed bg-cover bg-center"
    style={{
      backgroundImage: "url('/getty-images-1mEcRkmEXBM-unsplash.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
    <div className="relative container mx-auto px-6 text-center z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
      <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-16">
        Our platform is designed to make evidence organization simple, secure, and stress-free.
      </p>
    </div>
    <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-8 z-10">
      <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="Add Evidence">
        Securely upload, scan, or journal entries. AI automatically tags and organizes your evidence chronologically, so you can focus on what matters.
      </FeatureCard>
      <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Find & Fill Forms">
        Access our library of jurisdictional legal forms. Our smart editor helps you populate them with your saved case information, saving you from repetitive data entry.
      </FeatureCard>
      <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Prepare & Share">
        Create drafts, organize your timeline, and securely share your case. You control who sees your information - grant access to an attorney for a final review, share documents with a co-parent, or keep it all for your own records.
      </FeatureCard>
    </div>
  </section>
);

const ProductShowcaseSection = () => {
    const slides = [
        {
            title: "Your Entire Case, In Your Pocket",
            description: "The ThreadLock mobile app keeps your case organized wherever you are. Log incidents the moment they happen, scan documents on the go, and access your Journal, Timeline, Research Hub, and Organizer — all from your phone.",
            mockup: <AppCaseHubMockup />
        },
        {
            title: "Document Every Detail, Right When It Happens",
            description: "Capture incidents with rich detail — title, date, time, description, location, people involved, and severity — directly from the app. AI issue-type suggestions help you categorize entries after saving, and you can link entries to your case timeline with one tap.",
            mockup: <AppJournalEntryMockup />
        },
        {
            title: "Complete Case Overview at a Glance",
            description: "See your entire case in one structured view. Start with guided next steps, access step-by-step Case Guides tailored to your situation, and take action with one click — add evidence, fill a form, draft a document, or start a court filing.",
            mockup: <AppCaseOverviewMockup />
        },
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
    const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));

    return (
        <section id="showcase" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">See ThreadLock in Action</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">A quick look at how key features help you stay organized and prepared.</p>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-200 rounded-2xl shadow-2xl p-3 md:p-4">
                        <div className="origin-center">{slides[idx].mockup}</div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-left md:w-1/2 md:pr-8 order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{slides[idx].title}</h3>
                            <p className="text-slate-600">{slides[idx].description}</p>
                            <AppDownloadButtons />
                        </div>
                        <div className="flex items-center justify-center gap-4 shrink-0 order-1 md:order-2">
                            <button onClick={prev} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                                <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
                            </button>
                            <div className="flex gap-2">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setIdx(i)}
                                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${idx === i ? "bg-[#006a4d]" : "bg-slate-300 hover:bg-slate-400"}`}
                                    />
                                ))}
                            </div>
                            <button onClick={next} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                                <ChevronRightIcon className="h-6 w-6 text-slate-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OurMissionSection = () => (
  <section
    id="mission"
    className="relative py-20 md:py-28 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
    <div className="pointer-events-none absolute inset-0 bg-black/20" />
    <div className="relative container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission: A Fair Shot for Everyone</h2>
      <div className="border-l-4 border-[#006a4d] pl-6 md:pl-8 text-left">
        <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
          The justice system doesn't fail because of one judge or one case. It fails when people, forced to represent
          themselves, are denied a voice because they lack the confidence and tools to be heard.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-blue-400 font-semibold">
          We built the tools to give you that voice.
        </p>
      </div>
    </div>
  </section>
);

const WhoItsForSection = () => (
  <section id="who-its-for" className="py-20 md:py-28 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Who It&apos;s For</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Navigating on your own? Get a clear path.</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most people navigating the legal system represent themselves. We built ThreadLock for you. It&apos;s your personal case manager to keep you on track, organized, and in control.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Stop feeling overwhelmed and start feeling prepared.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Save time and money with professionals.</h3>
          <p className="text-slate-600 leading-relaxed">
            If you choose to get legal help - for a 30-minute consultation or a full review - you&apos;ll be ready. Hand them a perfectly organized file, saving you hours in legal fees and getting you to the right answers, faster.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Our Commitment to You</h2>
      <div className="space-y-8">
        <div className="bg-gray-50 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Is ThreadLock a law firm or a lawyer?</h3>
          <p className="text-slate-700 leading-relaxed">
            No. We are a software company, not a law firm. Our platform is a powerful organizational tool to help you prepare and manage your materials. We do not provide legal advice, and we are not a substitute for speaking with an attorney if you have legal questions.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Will ThreadLock guarantee I win my case?</h3>
          <p className="text-slate-700 leading-relaxed">
            No. We can&apos;t guarantee any specific outcome - your case is unique. Our mission is to help you get organized and feel a sense of control and preparedness for your next step. A well-organized record is invaluable, whether you are representing yourself or working with a professional.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SignupSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const [firebaseReady, setFirebaseReady] = useState(false);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const cfg = {
                    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
                    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                };
                if (Object.values(cfg).some(v => !v)) {
                    console.warn("Firebase configuration incomplete");
                    return;
                }
                await import("../../src/lib/firebase");
                if (mounted) setFirebaseReady(true);
            } catch (e) {
                console.error('Firebase initialization error:', e);
            }
        })();
        return () => { mounted = false; };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            if (firebaseReady) {
                const { subscribeLeadFn } = await import("../../src/lib/firebase");
                await subscribeLeadFn({ email, name: '', origin: "threadlock.ai/lp/variant-h-combined" });
            } else {
                console.warn("Firebase not ready, email not saved:", email);
            }
            
            setStatus('success');
            setMessage('Thanks for joining! We\'ll be in touch soon.');
            setEmail('');
        } catch (error) {
            console.error("Failed to save email:", error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="signup" className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Stay Informed</h2>
                <p className="text-lg text-slate-600 mb-8">
                    Join our mailing list to access free resources and other ThreadLock updates.
                </p>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <button 
                            type="submit" 
                            className="bg-[#006a4d] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#005a40] transition-all disabled:bg-slate-400"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Joining...' : 'Join'}
                        </button>
                    </div>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    );
};

/* ---------------- Main Page ---------------- */
export default function VariantHCombined() {
    const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

    return (
        <div className="bg-slate-50">
            <LandingPageHead 
                title="ThreadLock™ | Finally, an Easy Way to Organize Your Case Evidence"
                description="The All-in-One Custody Battle & Divorce Journal. Securely track documents, texts, and events for court."
                noIndex={true}
            />
            <style jsx global>{`
                @media (max-width: 640px) {
                    body {
                        font-size: 16px;
                        line-height: 1.6;
                    }
                    p {
                        font-size: 16px !important;
                        line-height: 1.6 !important;
                    }
                }
                /* Light theme overrides with green CTA */
                .btn-primary {
                    background-color: #006a4d !important;
                }
                .btn-primary:hover {
                    background-color: #005a40 !important;
                }
            `}</style>
            <Header onCTAClick={() => setIsPromoModalOpen(true)} />
            <TrustBar />
            <main className="flex flex-col w-full overflow-x-hidden">
                <HeroSection onCTAClick={() => setIsPromoModalOpen(true)} />
                <ValuePropositionSection />
                <OurMissionSection />
                <FeaturesSection />
                <ProductShowcaseSection />
                <WhoItsForSection />
                <SubscriptionBanner onCTAClick={() => setIsPromoModalOpen(true)} />
                <FAQSection />
                <SignupSection />
            </main>
            <PromoModal 
                isOpen={isPromoModalOpen} 
                onClose={() => setIsPromoModalOpen(false)} 
            />
        </div>
    );
}
