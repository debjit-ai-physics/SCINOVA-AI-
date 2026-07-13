"use client";

import { useEffect, useState } from "react";

interface PDFItem {
  id: string;
  title: string;
  createdAt: string;
}

export default function RecentPDF() {
  const [pdfs, setPdfs] = useState<PDFItem[]>([]);

  useEffect(() => {
    async function load() {
     const res = await fetch("/api/library");
      const data = await res.json();

      if (data.pdfs) {
        setPdfs(data.pdfs);
      }
    }

    load();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-700 p-6 bg-slate-900">
      <h2 className="text-2xl font-bold mb-6">
        Recent PDFs
      </h2>

      <div className="space-y-4">
        {pdfs.length === 0 && (
          <p className="text-slate-400">
            No PDFs uploaded yet.
          </p>
        )}

        {pdfs.map((pdf) => (
          <div
            key={pdf.id}
            className="rounded-lg bg-slate-800 p-4"
          >
            <h3 className="font-semibold">
              {pdf.title}
            </h3>

            <p className="text-sm text-slate-400">
              {new Date(pdf.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}