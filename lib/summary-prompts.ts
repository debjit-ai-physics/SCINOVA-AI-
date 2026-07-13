export class SummaryPrompts {
  static generate(
    text: string,
    type: string
  ) {
    let instruction = "";

    switch (type) {
      case "short":
        instruction =
          "Generate a short summary in 8-10 bullet points.";
        break;

      case "medium":
        instruction =
          "Generate a medium length summary with headings, subheadings and bullet points.";
        break;

      case "detailed":
        instruction =
          "Generate a detailed study summary with headings, explanations, important points, examples and conclusion.";
        break;

      default:
        instruction =
          "Generate a detailed study summary.";
    }

    return `
You are SciNova AI.

You are an expert teacher.

Read the following study material carefully.

${instruction}

Rules:

• Do not skip important concepts.

• Use proper headings.

• Use bullet points.

• Highlight important keywords.

• Make the summary easy to understand.

Study Material:

${text}
`;
  }
}