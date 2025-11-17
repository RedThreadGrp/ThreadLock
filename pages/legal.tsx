import LegalLayout from "@/components/legal/LegalLayout";
import Link from "next/link";

export default function LegalCenter() {
  return (
    <LegalLayout 
      title="Legal Center"
      description="All policies and disclosures in one place - ThreadLock legal documentation hub"
    >
      <p className="text-slate-600 mb-6">All policies and disclosures in one place.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/terms">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/cookies">
            Cookie Policy
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/disclaimer">
            Legal &amp; AI Disclaimer
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/security">
            Security Statement
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/dmca">
            DMCA Policy
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/accessibility">
            Accessibility
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="underline text-orange-600 hover:text-orange-700" href="/dpa">
            Data Processing Addendum
          </Link>
        </li>
      </ul>
    </LegalLayout>
  );
}
