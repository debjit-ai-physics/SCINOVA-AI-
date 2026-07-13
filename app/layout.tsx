import "./globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SciNova AI",
  description: "AI Powered Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}