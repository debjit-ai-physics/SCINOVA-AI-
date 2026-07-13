export const PROMPTS = {
  summary: (text: string) => `
You are an expert teacher.

Read the following study material and produce:

1. Detailed Summary
2. Important Points
3. Key Formulae (if any)
4. Revision Notes

Material:

${text}
`,

  notes: (text: string) => `
Create clean exam-ready notes from the following content.

${text}
`,

  flashcards: (text: string) => `
Generate at least 20 flashcards.

Return JSON only.

${text}
`,

  quiz: (text: string) => `
Generate 20 MCQs.

Each question must have:

Question
Option A
Option B
Option C
Option D
Correct Answer

Return JSON only.

${text}
`
};