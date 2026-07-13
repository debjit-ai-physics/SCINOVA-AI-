"use client";

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";

export default function PDFUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  async function upload(file: File) {
  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="rounded-3xl border-2 border-dashed border-cyan-500/40 p-16 text-center bg-slate-900">
      <h2 className="text-3xl font-bold mb-4">
        Upload your PDF
      </h2>

      <p className="opacity-70 mb-8">
        Drag & Drop or choose a PDF
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
        }}
      />

      <Button
        loading={loading}
        onClick={() => inputRef.current?.click()}
      >
        Choose PDF
      </Button>
    </div>
  );
}