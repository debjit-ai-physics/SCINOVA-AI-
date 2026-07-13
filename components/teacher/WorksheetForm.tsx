"use client";

import React, { useState, ChangeEvent } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function WorksheetForm() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [worksheet, setWorksheet] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/worksheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        className,
        subject,
        chapter,
      }),
    });

    const data = await res.json();

    setWorksheet(data.worksheet || "");

    setLoading(false);
  }

  return (
    <div className="space-y-5">

      <Input
        placeholder="Class"
        value={className}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setClassName(e.target.value)
        }
      />

      <Input
        placeholder="Subject"
        value={subject}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSubject(e.target.value)
        }
      />

      <Input
        placeholder="Chapter"
        value={chapter}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChapter(e.target.value)
        }
      />

      <Button
        loading={loading}
        onClick={generate}
      >
        Generate Worksheet
      </Button>

      {worksheet && (
        <div className="rounded-xl bg-slate-900 p-6 whitespace-pre-wrap">
          {worksheet}
        </div>
      )}

    </div>
  );
}