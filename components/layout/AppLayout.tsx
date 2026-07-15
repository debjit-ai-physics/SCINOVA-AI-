"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-950 text-white">

      <Sidebar />

      <div className="ml-72 min-h-screen">

        <Topbar />

        <main className="pt-24 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}