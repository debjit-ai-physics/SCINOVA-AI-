"use client";

export default function Modal({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#0f172a] rounded-3xl p-8 w-[650px]">
        {children}
      </div>
    </div>
  );
}