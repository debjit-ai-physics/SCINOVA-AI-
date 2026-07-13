"use client";

import AppLayout from "@/components/layout/AppLayout";
import Welcome from "@/components/dashboard/Welcome";
import StatCard from "@/components/dashboard/StatCard";
import QuickAction from "@/components/dashboard/QuickAction";
import RecentPDF from "@/components/dashboard/RecentPDF";

import { useDashboard } from "@/hook/useDashboard";

export default function DashboardPage() {
  const { stats, loading } = useDashboard();

  return (
    <AppLayout>
      <Welcome />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <StatCard
          title="PDFs"
          value={loading ? "..." : String(stats.pdfs)}
        />

        <StatCard
          title="Chats"
          value={loading ? "..." : String(stats.chats)}
        />

        <StatCard
          title="Notes"
          value={loading ? "..." : String(stats.notes)}
        />

        <StatCard
          title="Summaries"
          value={loading ? "..." : String(stats.summaries)}
        />

        <StatCard
          title="Quizzes"
          value={loading ? "..." : String(stats.quizzes)}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <QuickAction />

        <RecentPDF />

      </div>
    </AppLayout>
  );
}