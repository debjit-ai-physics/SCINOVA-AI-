import PDFParser from "pdf2json";

export async function extractText(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise<{ pages: number; text: string }>((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData: any) => {
  reject(errData.parserError ?? errData);
});
    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      let text = "";

      if (pdfData.Pages) {
        for (const page of pdfData.Pages) {
          for (const item of page.Texts) {
            for (const run of item.R) {
              text += decodeURIComponent(run.T) + " ";
            }
          }
          text += "\n";
        }
      }

      resolve({
        pages: pdfData.Pages?.length || 0,
        text,
      });
    });

    pdfParser.parseBuffer(buffer);
  });
}