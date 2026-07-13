"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function QuestionPaperForm() {
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [chapter, setChapter] = useState("");
  const [marks, setMarks] = useState("40");
  const [difficulty, setDifficulty] = useState("Medium");
  const [loading, setLoading] = useState(false);
  const [paper, setPaper] = useState("");

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/question-paper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        className,
        chapter,
        marks,
        difficulty,
      }),
    });

    const data = await res.json();

    setPaper(data.paper || "");

    setLoading(false);
  }

  return (
    <div className="space-y-5">

      <Input
        placeholder="Class"
        value={className}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setClassName(e.target.value)
}
      />

      <Input
        placeholder="Subject"
        value={subject}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setSubject(e.target.value)
}
      />

      <Input
        placeholder="Chapter"
        value={chapter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setChapter(e.target.value)
}
      />

      <Input
        placeholder="Marks"
        value={marks}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setMarks(e.target.value)
}
      />

      <select
        className="w-full rounded-xl bg-slate-900 p-3"
        value={difficulty}
        onChange={(e)=>setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <Button
        loading={loading}
        onClick={generate}
      >
        Generate Question Paper
      </Button>

      {paper && (
        <div className="rounded-xl bg-slate-900 p-6 whitespace-pre-wrap">
          {paper}
        </div>
      )}

    </div>
  );
}