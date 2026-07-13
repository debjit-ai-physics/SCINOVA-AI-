"use client";

import { useEffect, useState } from "react";

interface PDFItem {
  id: string;
  title: string;
}

export default function SummaryPanel() {
  const [pdfs, setPdfs] = useState<PDFItem[]>([]);
  const [selectedPDF, setSelectedPDF] = useState("");

  const [summaryType, setSummaryType] = useState<
    "short" | "medium" | "detailed"
  >("medium");

  const [loading, setLoading] = useState(false);

  const [summary, setSummary] = useState("");

  useEffect(() => {
    loadPDFs();
  }, []);

  async function loadPDFs() {
    try {
      const res = await fetch("/api/library");

      const data = await res.json();

      if (data.pdfs) {
        setPdfs(data.pdfs);

        if (data.pdfs.length > 0) {
          setSelectedPDF(data.pdfs[0].id);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function generateSummary() {
    if (!selectedPDF) {
      alert("Please select a PDF");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfId: selectedPDF,
          type: summaryType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate summary");
      }

      setSummary(data.summary);

      alert("Summary Generated!");
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

      <h2 className="text-2xl font-bold mb-6">
        Choose a PDF
      </h2>

      <select
        value={selectedPDF}
        onChange={(e) => setSelectedPDF(e.target.value)}
        className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4"
      >
        {pdfs.map((pdf) => (
          <option
            key={pdf.id}
            value={pdf.id}
          >
            {pdf.title}
          </option>
        ))}
      </select>

      <div className="mt-10">

        <h3 className="font-semibold mb-3">
          Summary Type
        </h3>

        <div className="grid grid-cols-3 gap-4">

          <button
            onClick={() => setSummaryType("short")}
            className={`rounded-xl py-3 transition ${
              summaryType === "short"
                ? "bg-cyan-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            Short
          </button>

          <button
            onClick={() => setSummaryType("medium")}
            className={`rounded-xl py-3 transition ${
              summaryType === "medium"
                ? "bg-cyan-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            Medium
          </button>

          <button
            onClick={() => setSummaryType("detailed")}
            className={`rounded-xl py-3 transition ${
              summaryType === "detailed"
                ? "bg-cyan-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            Detailed
          </button>

        </div>

      </div>

      <button
        onClick={generateSummary}
        disabled={loading}
        className="mt-10 w-full rounded-xl bg-cyan-500 py-4 font-bold hover:bg-cyan-400 transition disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      {summary && (
        <div className="mt-10 rounded-2xl bg-slate-800 p-6">

          <h3 className="text-xl font-bold mb-4">
            Generated Summary
          </h3>

          <div className="whitespace-pre-wrap leading-8 text-slate-300">
            {summary}
          </div>

        </div>
      )}

    </div>
  );
}