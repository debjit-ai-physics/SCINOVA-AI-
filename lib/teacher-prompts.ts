export const TeacherPrompts = {
  questionPaper: (
    subject: string,
    className: string,
    chapter: string,
    marks: number
  ) => `
You are an experienced school teacher.

Generate a professional examination paper.

Subject: ${subject}
Class: ${className}
Chapter: ${chapter}
Total Marks: ${marks}

Include:
- MCQ
- Very Short Questions
- Short Questions
- Long Questions
- Case Study
- Application Based Questions

Format the paper professionally.
`,

  worksheet: (
    subject: string,
    className: string,
    chapter: string
  ) => `
Generate a printable worksheet.

Subject: ${subject}
Class: ${className}
Chapter: ${chapter}

Include:
- Fill in the blanks
- MCQ
- True/False
- Match the Following
- Short Questions
- Long Questions
- Activity Based Questions
`,

  answerKey: (paper: string) => `
Generate a complete answer key.

Question Paper:

${paper}
`,

  lessonPlan: (
    subject: string,
    className: string,
    chapter: string
  ) => `
Create a detailed lesson plan.

Subject: ${subject}
Class: ${className}
Chapter: ${chapter}

Include:
- Learning Objectives
- Prior Knowledge
- Teaching Materials
- Classroom Activities
- Questions to Ask
- Assessment
- Homework
- Time Distribution
`,

  homework: (
    subject: string,
    className: string,
    chapter: string
  ) => `
Generate a homework assignment.

Subject: ${subject}
Class: ${className}
Chapter: ${chapter}

Include:
- Easy Questions
- Medium Questions
- Hard Questions
- Application Based Questions
- Creative Thinking Questions
`,
};