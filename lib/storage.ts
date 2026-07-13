import fs from "fs";
import path from "path";

export async function savePDF(
  file: File
) {
  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(
    process.cwd(),
    "uploads"
  );

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const filename =
    Date.now() + "_" + file.name;

  const filepath = path.join(
    uploadDir,
    filename
  );

  fs.writeFileSync(filepath, buffer);

  return {
    filename,
    filepath,
  };
}