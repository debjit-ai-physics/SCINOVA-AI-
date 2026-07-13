"use client";

import AppLayout from "@/components/layout/AppLayout";
import SummaryPanel from "@/components/summary/SummaryPanel";

export default function SummaryPage() {
  return (
    <AppLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            AI Summary
          </h1>

          <p className="text-slate-400 mt-2">
            Generate beautiful AI-powered summaries from your PDFs.
          </p>
        </div>

        <SummaryPanel />

      </div>
    </AppLayout>
  );
}