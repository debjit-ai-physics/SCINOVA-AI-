export function truncate(text: string, length = 120) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}

export function formatBytes(bytes: number) {
  if (!bytes) return "0 Bytes";

  const k = 1024;

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(2)) +
    " " +
    sizes[i]
  );
}