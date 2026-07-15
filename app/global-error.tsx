"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-slate-950 text-white flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>

          <p className="mt-4 text-slate-400">
            {error.message}
          </p>

          <button
            onClick={() => reset()}
            className="mt-6 rounded-lg bg-cyan-500 px-5 py-3"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}