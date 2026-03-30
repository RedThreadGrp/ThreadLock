import React from "react";

export interface FactBoxProps {
  courtName: string;
  filingLimit?: string;
  filingFee?: string;
  responseDeadline?: string;
  hearingTimeline?: string;
  courtUrl?: string;
  statuteCitation?: string;
  lastVerified: string;
}

interface FactCell {
  label: string;
  value: string;
}

export default function FactBox({
  courtName,
  filingLimit,
  filingFee,
  responseDeadline,
  hearingTimeline,
  courtUrl,
  statuteCitation,
  lastVerified,
}: FactBoxProps) {
  const cells: FactCell[] = [
    { label: "Court Name", value: courtName },
    ...(filingLimit ? [{ label: "Filing Limit", value: filingLimit }] : []),
    ...(filingFee ? [{ label: "Filing Fee", value: filingFee }] : []),
    ...(responseDeadline ? [{ label: "Response Deadline", value: responseDeadline }] : []),
    ...(hearingTimeline ? [{ label: "Hearing Timeline", value: hearingTimeline }] : []),
    ...(statuteCitation ? [{ label: "Statute", value: statuteCitation }] : []),
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Key Filing Facts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="bg-white border border-slate-100 rounded-xl px-4 py-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              {cell.label}
            </p>
            <p className="text-base font-semibold text-slate-800">{cell.value}</p>
          </div>
        ))}
      </div>
      {courtUrl && (
        <a
          href={courtUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#fb7a1e] hover:underline mb-4"
        >
          Official Court Website →
        </a>
      )}
      <p className="text-xs text-slate-400 mt-2">
        ✓ Verified as of {lastVerified}
      </p>
    </div>
  );
}
