import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ResourcesDropdown from "../components/ResourcesDropdown";
import SiteHeader from "../src/components/SiteHeader";
import KnowledgeSpotlightSection from "../src/components/KnowledgeSpotlightSection";

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
const FilePlusIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
);
const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
const FolderIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
);
const BookOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);
const CheckmarkIcon = ({ color = "green-500", ...props }) => (
  <svg className={`w-5 h-5 text-${color} mr-2 shrink-0`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
    <path d="M5 13l4 4L19 7"/>
  </svg>
);

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
                <button className="text-[11px] bg-orange-600 px-3 py-1 rounded">Save Entry</button>
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
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-600 rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
                        <p className="font-semibold">Custody Exchange Late</p>
                        <p className="text-slate-400">July 26, 2025 - 6:30 PM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3" /> Blockchain Verified</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-600 rounded-full"></div>
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
        <button className="text-[11px] bg-orange-600 text-white px-4 py-1.5 rounded-md mt-3">Download PDF</button>
    </div>
);

/* App screenshot mockups — faithful representations of the ThreadLock mobile & web app */
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
            <div>
                <div className="flex items-center gap-1 text-[11px] font-bold mb-1.5">
                    <span className="text-orange-400">⚡</span> Build Your Case
                </div>
                <div className="grid grid-cols-4 gap-1">
                    {[
                        { icon: '+', label: 'Add Evidence', sub: 'Upload photos, documents' },
                        { icon: '↑', label: 'Fill a Form', sub: 'Upload and complete a PDF form' },
                        { icon: '✎', label: 'Draft a Document', sub: 'Create declarations, chronologies' },
                        { icon: '📁', label: 'Start a Filing', sub: 'Prepare documents to submit to court' },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-2">
                            <div className="w-5 h-5 bg-slate-700 rounded flex items-center justify-center text-[10px] mb-1 text-slate-300">{item.icon}</div>
                            <div className="text-[9px] font-semibold text-white">{item.label}</div>
                            <div className="text-[8px] text-slate-400 leading-tight mt-0.5">{item.sub}</div>
                        </div>
                    ))}
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
            <span className="text-orange-600">Lock</span>
            <span className={`ml-0.5 align-text-top text-[0.5em] font-black ${darkText ? 'text-slate-500' : 'text-slate-300'}`}>™</span>
        </span>
    );
}

/* ---------------- Sections ---------------- */

const HeroSection = () => (
  <section data-testid="hero-section" className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center pb-24 md:pb-32" style={{ background: '#0d1520' }}>
    {/* Glow effects */}
    <div className="pointer-events-none absolute" style={{ top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(251,122,30,0.15) 0%, rgba(251,122,30,0) 70%)', borderRadius: '50%' }} />
    <div className="pointer-events-none absolute" style={{ bottom: '-80px', right: '20%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(251,122,30,0.08) 0%, rgba(251,122,30,0) 70%)', borderRadius: '50%' }} />

    <div className="relative container mx-auto max-w-7xl px-8 md:px-16 lg:px-20 py-10 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
      {/* Left: Text content */}
      <div className="space-y-5 z-10">
        <div className="space-y-3">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange-500">Civil Case Management</p>
          <h1 className="font-extrabold leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(36px, 5.5vw, 60px)' }}>
            Don&apos;t let the<br />
            <span className="text-orange-500">paperwork win.</span>
          </h1>
          <p className="text-base md:text-[17px] leading-relaxed max-w-[480px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            ThreadLock is legal case management software for self-represented litigants. Organize your evidence, document incidents, build a case timeline, and prepare court-ready exhibits—for family court, small claims, landlord-tenant, and other civil matters.<br />No legal background required.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-orange-600 text-white font-bold px-6 sm:px-10 py-[18px] rounded-xl shadow-lg hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300 text-base whitespace-nowrap w-full sm:w-auto"
            style={{ boxShadow: '0 4px 20px rgba(251,122,30,0.4)' }}
          >
            Start Your Free Trial
          </Link>
          <Link
            href="#showcase"
            className="hero-ghost-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-6 sm:px-10 py-[18px] rounded-xl transition-all duration-200 text-base whitespace-nowrap w-full sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            See How It Works
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex items-center gap-5 pt-1">
          <div className="flex -space-x-3">
            {[['JN','bg-slate-600'],['TR','bg-slate-700'],['AL','bg-slate-500']].map(([initials, bg]) => (
              <div key={initials} className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white ${bg}`} style={{ borderColor: '#0d1520' }}>
                {initials}
              </div>
            ))}
          </div>
          <p className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Trusted by <strong style={{ color: 'rgba(255,255,255,0.7)' }}>5,000+</strong> self-represented litigants
          </p>
        </div>

        <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.01em' }}>
          7 days free &nbsp;·&nbsp; No credit card required
        </p>
      </div>

      {/* Right: Dashboard visuals */}
      <div className="relative hidden lg:flex items-center justify-center" style={{ perspective: '1200px', height: '500px' }}>
        {/* Back card (Timeline) */}
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            width: '440px',
            height: '320px',
            top: '20px',
            right: '60px',
            zIndex: 1,
            transform: 'rotateY(-15deg) rotateX(10deg)',
            background: '#1a222c',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            opacity: 0.8,
            filter: 'brightness(0.8)',
          }}
        >
          <div className="w-full h-full p-3 text-white" style={{ background: '#111827' }}>
            <div className="flex items-center gap-2 mb-2 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <span className="text-[11px] font-bold text-slate-300">Timeline</span>
              <span className="text-[9px] text-slate-500 ml-1">Anchor events, data, and evidence to specific points in time.</span>
            </div>
            <div className="text-[9px] text-orange-400 mb-2 cursor-pointer">How do I use the Timeline? →</div>
            <div className="space-y-2">
              {[
                { date: 'Jul 26', title: 'Custody Exchange Late', verified: true },
                { date: 'Jul 25', title: 'Email Received', verified: true },
                { date: 'Jul 20', title: 'Court Hearing Notice', verified: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold text-white">{item.title}</p>
                    <p className="text-[9px] text-slate-500">{item.date}, 2025</p>
                    {item.verified && <span className="text-[8px] text-green-400">✓ Verified</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Front card (Case Overview) — animated float */}
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            width: '480px',
            height: '340px',
            bottom: '40px',
            right: '-20px',
            zIndex: 2,
            background: '#1a222c',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            animation: 'heroFloat 6s ease-in-out infinite',
          }}
        >
          <div className="w-full h-full" style={{ background: '#111827' }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-1.5" style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-1.5">
                <div className="bg-slate-700 rounded px-2 py-0.5 text-[9px] flex items-center gap-1 text-slate-300">Family Law Case – CA <span className="text-slate-500">▾</span></div>
              </div>
              <div className="flex gap-1">
                {[
                  { icon: '⌂', label: 'Home' },
                  { icon: '⌕', label: 'Search' },
                  { icon: '?', label: 'Help' },
                  { icon: '🔔', label: 'Notifications' },
                ].map(({ icon, label }) => (
                  <div key={label} className="w-5 h-5 bg-slate-700 rounded text-[10px] flex items-center justify-center text-slate-400" aria-label={label}>{icon}</div>
                ))}
                <div className="w-5 h-5 bg-orange-500 rounded-full text-[9px] flex items-center justify-center font-bold text-white">A</div>
              </div>
            </div>

            <div className="p-3">
              {/* Case Guides */}
              <div className="rounded-lg p-2.5 mb-2" style={{ background: '#1e2535', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1 mb-0.5">
                  <BookOpenIcon className="w-3 h-3 text-orange-400" />
                  <span className="text-[9px] font-bold text-orange-400 uppercase tracking-wide">Case Guides</span>
                  <span className="ml-auto text-[9px] text-slate-400">Suggested Next Steps</span>
                </div>
                <p className="text-[10px] font-semibold text-white mb-0.5">Start Here</p>
                <p className="text-[8px] text-slate-400 mb-1.5 leading-tight">If this process is unfamiliar to you, this is where to begin. Case Guides walk you through the typical steps for your type of case.</p>
                <div className="flex gap-2">
                  <button className="text-[8px] bg-orange-500 text-white px-2.5 py-1 rounded font-semibold">Open Case Guides →</button>
                  <div className="text-[8px] text-slate-400 space-y-0.5">
                    <div className="flex items-center gap-1"><span className="text-green-400">✓</span> Review your Case Guides</div>
                    <div className="flex items-center gap-1"><span className="text-green-400">✓</span> Add your first Journal entry</div>
                    <div className="flex items-center gap-1"><span className="text-green-400">✓</span> Upload a document</div>
                  </div>
                </div>
              </div>

              {/* Build Your Case */}
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold mb-1.5 text-white">
                  <span className="text-orange-400">⚡</span> Build Your Case
                </div>
                <p className="text-[8px] text-slate-400 mb-1.5">Start building your case with these common actions</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { icon: '+', label: 'Add Evidence', sub: 'Upload photos, documents, or record what happened', color: 'text-blue-400' },
                    { icon: '↑', label: 'Fill a Form', sub: 'Upload and complete a court PDF form', color: 'text-green-400' },
                    { icon: '✎', label: 'Draft a Document', sub: 'Create declarations, chronologies, or other documents', color: 'text-purple-400' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg p-2" style={{ background: '#1e2535', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className={`text-[14px] mb-1 ${item.color}`}>{item.icon}</div>
                      <div className="text-[9px] font-semibold text-white">{item.label}</div>
                      <div className="text-[8px] text-slate-400 leading-tight mt-0.5">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Float animation keyframes injected inline */}
    <style>{`
      @keyframes heroFloat {
        0%, 100% { transform: rotateY(-5deg) rotateX(2deg) translateY(0px); }
        50% { transform: rotateY(-5deg) rotateX(2deg) translateY(-15px); }
      }
      .hero-ghost-btn {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.12);
      }
      .hero-ghost-btn:hover {
        background: rgba(255,255,255,0.08);
        border-color: rgba(255,255,255,0.2);
      }
    `}</style>
  </section>
);

const DefinitionStrip = () => (
  <section className="py-12 bg-white border-b border-slate-200">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <p className="text-base md:text-lg text-slate-800 leading-relaxed mb-4">
        <strong>ThreadLock is a legal case management software platform for civil matters—family court, small claims, landlord-tenant disputes, custody proceedings, and more.</strong>
      </p>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3">
        It gives self-represented litigants and pro se filers a structured system to capture incident journals, organize digital evidence, build a chronological case timeline, scan and store court documents, and export court-ready exhibit packets—without needing a legal background.
      </p>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3">
        ThreadLock functions as a civil case evidence organizer, a case documentation manager, and a court preparation tool. It is not a law firm and does not provide legal advice.
      </p>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed">
        Designed to work independently or alongside an attorney. Starting at $29/month.
      </p>
    </div>
  </section>
);

const ValuePropositionSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-xl">
            <FolderIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Case Materials, One Place</h3>
          <p className="text-slate-600 leading-relaxed">
            Securely store documents, journal entries, and evidence so nothing gets lost or scattered.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-xl">
            <BookOpenIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Chronological Case Timeline</h3>
          <p className="text-slate-600 leading-relaxed">
            See your case as the court sees it—ordered by date, with sources attached.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-xl">
            <UsersIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Prepared to Share or Review</h3>
          <p className="text-slate-600 leading-relaxed">
            Share a clean, organized file with an attorney, mediator, or keep it for your own records.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SubscriptionBanner = () => (
  <section
    id="subscriptions"
    className="relative py-16 md:py-20 border-y border-slate-200 overflow-hidden"
    style={{
      backgroundImage: "url('/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-6 text-center relative">
      <div className="inline-block px-6 py-5 mb-10 border-2 border-orange-500 rounded-xl bg-white/60 backdrop-blur-sm shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-2 text-lg text-slate-800/90 max-w-2xl">
          Choose the plan that&apos;s right for you. All plans include our core features.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* ThreadLock Core - For Individuals */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-slate-200 hover:border-orange-500 transition-all shadow-lg text-left flex flex-col">
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
              <p className="text-2xl font-bold text-orange-600">
                +$19<span className="text-sm font-normal text-slate-500">/month per seat</span>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Add a secure, collaborative seat for your attorney.
              </p>
            </div>
          </div>
          <a
            href="https://app.threadlock.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
          >
            Get Started
          </a>
        </div>

        {/* ThreadLock Pro - For Professionals */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-500 p-8 shadow-xl flex flex-col relative">
          <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">
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
                  Upload & Assign Your Firm&apos;s Custom Forms <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">New</span>
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
            className="mt-8 block text-center bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
          >
            Get Started as Pro
          </a>
        </div>

        {/* ThreadLock for Benefits - For Employers */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-slate-200 hover:border-orange-500 transition-all shadow-lg text-left flex flex-col">
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
            className="mt-8 block text-center bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
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
        <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-xl">
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
      <FeatureCard icon={<FilePlusIcon className="w-8 h-8" />} title="Add Evidence">
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
                <div className="max-w-xl mx-auto">
                    <div className="bg-slate-200 rounded-2xl shadow-2xl p-3 md:p-4">
                        <div className="origin-center">{slides[idx].mockup}</div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-left md:w-1/2 md:pr-8 order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{slides[idx].title}</h3>
                            <p className="text-slate-600">{slides[idx].description}</p>
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
                                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${idx === i ? "bg-orange-600" : "bg-slate-300 hover:bg-slate-400"}`}
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

const FeaturedResearchSection = () => (
  <section
    id="featured-research"
    className="relative py-16 md:py-20 bg-gray-50"
  >
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-4">
          <FileTextIcon className="w-4 h-4" />
          Featured Research
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          The Verification Crisis in Family Court
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <p className="text-slate-700 leading-relaxed mb-6">
          Family courts face an unprecedented verification crisis as AI-generated citations, fabricated case law, 
          and unverifiable digital evidence undermine judicial trust. Without structural safeguards for citation 
          authentication and digital provenance, self-represented litigants and attorneys alike can inadvertently 
          submit plausible legal fiction.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          This research examines the verification bottleneck and proposes Evidence Passport standards for trusted 
          digital submissions in the AI era.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/resources/verification-crisis-family-court"
            className="flex-1 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center"
          >
            Read the Analysis
          </Link>
          <Link
            href="/resources/model-local-rule-ai-verification"
            className="flex-1 bg-white text-slate-700 font-semibold px-6 py-3 rounded-lg border-2 border-slate-200 hover:border-orange-600 hover:text-orange-600 transition-colors text-center"
          >
            View Policy Proposal
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const OurMissionSection = () => (
  <section
    id="mission"
    className="relative py-20 md:py-28 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
    <div className="pointer-events-none absolute inset-0 bg-black/20" />
    <div className="relative container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission: A Fair Shot for Everyone</h2>
      <div className="border-l-4 border-orange-500 pl-6 md:pl-8 text-left">
        <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
          The justice system doesn't fail because of one judge or one case. It fails when people, forced to represent
          themselves, are denied a voice because they lack the confidence and tools to be heard.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-orange-400 font-semibold">
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
                await import("../src/lib/firebase");
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
                const { subscribeLeadFn } = await import("../src/lib/firebase");
                await subscribeLeadFn({ email, name: '', origin: "threadlock.ai/landing" });
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
                            className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all disabled:bg-slate-400"
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
export default function Home() {
    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ThreadLock",
        "applicationCategory": "LegalTech",
        "description": "Court-compliant legal case management platform for self-represented litigants. Helps individuals in family court, small claims, and landlord-tenant cases organize court-ready evidence, document incidents, and prepare case materials.",
        "operatingSystem": "Web",
        "url": "https://threadlock.ai",
        "screenshot": "https://threadlock.ai/screenshot-1-request-pool.png",
        "offers": [
            {
                "@type": "Offer",
                "name": "ThreadLock Core",
                "description": "Individual plan with evidence management, journal, timeline, and document scanning",
                "price": "29",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                },
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "29",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                },
                "eligibleCustomerType": "https://schema.org/Enduser"
            },
            {
                "@type": "Offer",
                "name": "ThreadLock Pro",
                "description": "Professional plan for legal practitioners with review queue, client management, and Clio integration",
                "price": "300",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                },
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "300",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                },
                "eligibleCustomerType": "https://schema.org/Business"
            }
        ],
        "featureList": [
            "Evidence organization for legal cases",
            "Case documentation management",
            "Incident journal with AI",
            "Case timeline builder",
            "Court-compliant document scanning and OCR",
            "PDF exhibit export",
            "Secure document storage",
            "Exhibit preparation and labeling",
            "Case filings management",
            "Message and communication organization",
            "Case planner",
            "AI-assisted legal documentation",
            "Attorney review integration",
            "Collaborative attorney access"
        ],
        "audience": [
            {
                "@type": "Audience",
                "audienceType": "Self-Represented Litigants"
            },
            {
                "@type": "Audience",
                "audienceType": "Parents in Custody Disputes"
            },
            {
                "@type": "Audience",
                "audienceType": "Small Claims Filers"
            },
            {
                "@type": "Audience",
                "audienceType": "Landlord-Tenant Litigants"
            }
        ],
        "keywords": "legal case management software, evidence organization, court document management, self-represented litigant tools, small claims evidence, landlord tenant documentation, family court exhibits, pro se litigation, court-ready evidence, legal case planner, civil case management",
        "softwareHelp": {
            "@type": "CreativeWork",
            "name": "ThreadLock Resources",
            "url": "https://threadlock.ai/resources"
        },
        "installUrl": "https://app.threadlock.ai/signup"
    };

    const legalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "ThreadLock Legal Case Management",
        "description": "Legal case management platform providing tools for self-represented litigants in family court, small claims, and landlord-tenant cases. Helps organize evidence, documentation, and court preparation. Not a law firm.",
        "url": "https://threadlock.ai",
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "serviceType": "Legal Case Management Platform",
        "provider": {
            "@type": "Organization",
            "name": "ThreadLock",
            "url": "https://threadlock.ai",
            "logo": "https://threadlock.ai/threadlock-logo.png"
        },
        "termsOfService": "https://threadlock.ai/terms",
        "privacyPolicy": "https://threadlock.ai/privacy",
        "disclaimer": "ThreadLock is not a law firm and does not provide legal advice. Our software is a tool for organizing and managing case materials."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is ThreadLock a law firm or a lawyer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We are a software company, not a law firm. Our platform is a powerful organizational tool to help you prepare and manage your materials. We do not provide legal advice, and we are not a substitute for speaking with an attorney if you have legal questions."
                }
            },
            {
                "@type": "Question",
                "name": "Will ThreadLock guarantee I win my case?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We can't guarantee any specific outcome - your case is unique. Our mission is to help you get organized and feel a sense of control and preparedness for your next step. A well-organized record is invaluable, whether you are representing yourself or working with a professional."
                }
            },
            {
                "@type": "Question",
                "name": "What is ThreadLock used for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ThreadLock is legal case management software for self-represented litigants. It lets you organize evidence, write incident journal entries, build a chronological case timeline, scan and store legal documents, and export court-ready exhibit packets. It is used in family court, small claims, landlord-tenant, and other civil proceedings."
                }
            },
            {
                "@type": "Question",
                "name": "Who is ThreadLock designed for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ThreadLock is designed for self-represented litigants (also called pro se litigants) navigating civil legal matters including family court custody disputes, divorce proceedings, small claims cases, and landlord-tenant disputes. It is also used by legal professionals—attorneys and paralegals—who want to review pre-organized client case materials."
                }
            },
            {
                "@type": "Question",
                "name": "How does ThreadLock help with evidence in family court?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ThreadLock provides an incident journal to document events with dates, times, locations, and descriptions. Evidence files (photos, documents, screenshots) can be attached to journal entries. A timeline builder organizes everything chronologically. Court exhibit preparation tools label and export evidence into court-compliant PDF packets."
                }
            },
            {
                "@type": "Question",
                "name": "How much does ThreadLock cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ThreadLock Core starts at $29 per month for individuals. ThreadLock Pro for legal professionals is $300 per month. A 7-day free trial is available with no credit card required."
                }
            }
        ]
    };

    return (
        <div className="bg-white">
            <Head>
                <title>ThreadLock™ | Legal Case Management for Non-Lawyers — Family Court, Small Claims & More</title>
                <meta name="description" content="Court-compliant case management for self-represented litigants. Organize evidence, document incidents, and prepare court-ready materials for family court, small claims, landlord-tenant, and other civil proceedings." />
                <link rel="canonical" href="https://threadlock.ai/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>
            <SiteHeader/>
            <main className="flex flex-col w-full overflow-x-hidden">
                <HeroSection />
                <DefinitionStrip />
                <ValuePropositionSection />
                <FeaturesSection />
                <ProductShowcaseSection />
                <WhoItsForSection />
                <KnowledgeSpotlightSection />
                <FeaturedResearchSection />
                <SubscriptionBanner />
                <OurMissionSection />
                <FAQSection />
                <SignupSection />
            </main>
        </div>
    );
}

