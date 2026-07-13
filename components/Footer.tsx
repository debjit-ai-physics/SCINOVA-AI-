export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 backdrop-blur-xl bg-white/5">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            SciNova AI
          </h2>

          <p className="text-slate-400 mt-2">
            AI Powered Learning Platform
          </p>
        </div>

        <p className="text-slate-500 mt-6 md:mt-0">
          © 2026 SciNova AI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}