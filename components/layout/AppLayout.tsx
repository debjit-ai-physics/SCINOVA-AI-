"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <Navbar />

      <main className="ml-72 pt-24 p-10">
        {children}
      </main>
    </>
  );
}