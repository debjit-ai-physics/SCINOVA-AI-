"use client";

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 top-14 w-80 rounded-2xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden z-50">

      <div className="px-5 py-4 border-b border-white/10">
        <h3 className="text-lg font-semibold">
          Notifications
        </h3>
      </div>

      <div className="p-4 space-y-3">

        <div className="rounded-xl bg-white/5 p-3">
          🎉 Welcome to SciNova AI!
        </div>

        <div className="rounded-xl bg-white/5 p-3">
          📄 Upload your first PDF to begin learning.
        </div>

        <div className="rounded-xl bg-white/5 p-3">
          🚀 More AI features coming soon.
        </div>

      </div>

    </div>
  );
}