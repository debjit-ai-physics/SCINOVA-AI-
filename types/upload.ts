export interface UploadResponse {
  success: boolean;
  pdfId: string;
  filename: string;
  pages: number;
  preview: string;
}