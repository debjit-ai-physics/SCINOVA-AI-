"use client";

import AppLayout from "@/components/layout/AppLayout";
import PDFUploader from "@/components/upload/PDFUploader";

export default function UploadPage() {
  return (
    <AppLayout>

      <h1 className="text-5xl font-bold mb-10">
        Upload PDF
      </h1>

      <PDFUploader />

    </AppLayout>
  );
}