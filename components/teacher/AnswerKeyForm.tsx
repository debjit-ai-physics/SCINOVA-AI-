"use client";

import React, { useState, ChangeEvent } from "react";
import Button from "@/components/ui/Button";

export default function AnswerKeyForm() {
  const [paper, setPaper] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/answer-key", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paper,
      }),
    });

    const data = await res.json();

    setAnswerKey(data.answerKey || "");

    setLoading(false);
  }

  return (
    <div className="space-y-5">

      <textarea
        value={paper}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setPaper(e.target.value)
        }
        rows={12}
        placeholder="Paste Question Paper Here..."
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <Button
        loading={loading}
        onClick={generate}
      >
        Generate Answer Key
      </Button>

      {answerKey && (
        <div className="rounded-xl bg-slate-900 p-6 whitespace-pre-wrap">
          {answerKey}
        </div>
      )}

    </div>
  );
}