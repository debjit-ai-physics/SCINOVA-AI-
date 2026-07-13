"use client";

import { useEffect, useState } from "react";

interface PDFItem {
  id: string;
  title: string;
  pages: number;
  createdAt: string;
}

export default function PDFLibrary() {
  const [pdfs, setPdfs] = useState<PDFItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPDFs() {
      try {
        const res = await fetch("/api/pdf");
        const data = await res.json();

        if (data.success) {
          setPdfs(data.pdfs);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadPDFs();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">📚 PDF Library</h1>

      {loading ? (
        <p>Loading...</p>
      ) : pdfs.length === 0 ? (
        <p>No PDFs uploaded yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pdfs.map((pdf) => (
            <div
              key={pdf.id}
              className="rounded-xl border border-slate-700 bg-slate-900 p-5"
            >
              <h2 className="text-xl font-semibold">{pdf.title}</h2>

              <p className="text-slate-400 mt-2">
                {pdf.pages} Pages
              </p>

              <p className="text-sm text-slate-500 mt-2">
                {new Date(pdf.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}