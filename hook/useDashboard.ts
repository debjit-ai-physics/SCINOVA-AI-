"use client";

import { useEffect, useState } from "react";

export function useDashboard() {
  const [stats, setStats] = useState({
    pdfs: 0,
    chats: 0,
    notes: 0,
    summaries: 0,
    quizzes: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard");
      const data = await res.json();

      if (data.success) {
        setStats(data.stats);
      }

      setLoading(false);
    }

    load();
  }, []);

  return {
    stats,
    loading,
  };
}