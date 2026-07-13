import { create } from "zustand";

interface PDFState {
  pdfId: string;
  filename: string;
  pages: number;
  preview: string;

  setPDF: (
    pdfId: string,
    filename: string,
    pages: number,
    preview: string
  ) => void;
}

export const usePDFStore = create<PDFState>((set) => ({
  pdfId: "",
  filename: "",
  pages: 0,
  preview: "",

  setPDF: (pdfId, filename, pages, preview) =>
    set({
      pdfId,
      filename,
      pages,
      preview,
    }),
}));