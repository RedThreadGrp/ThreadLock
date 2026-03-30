import React from "react";
import Link from "next/link";

const SiteFooter = () => (
    <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
        <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
        <p className="mt-2 space-x-4">
            <Link href="/for-ai-assistants" className="hover:text-slate-200 transition-colors">For AI Assistants</Link>
            <span>·</span>
            <Link href="/for-llms" className="hover:text-slate-200 transition-colors">Technical Reference</Link>
        </p>
    </footer>
);

export default SiteFooter;
