import { put } from "@vercel/blob";

export async function savePDF(file: File) {
  const blob = await put(
    `pdfs/${Date.now()}-${file.name}`,
    file,
    {
      access: "public",
      addRandomSuffix: true,
    }
  );

  return {
    filename: file.name,
    filepath: blob.url,
  };
}