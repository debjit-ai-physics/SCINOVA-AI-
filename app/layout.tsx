import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider
  signInFallbackRedirectUrl="/dashboard"
  signUpFallbackRedirectUrl="/dashboard"
  afterSignOutUrl="/"
>
      <html lang="en">
        <body className="bg-slate-950 text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}