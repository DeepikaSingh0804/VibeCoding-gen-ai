export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#0B0F19] text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        <div className="border border-slate-800 bg-[#111827] rounded-[40px] p-10 md:p-16 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            AI Automation Platform
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Scale faster with
            <br />
            intelligent automation
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Eliminate repetitive work, automate complex workflows,
            and empower your team with AI-driven operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-semibold text-black cursor-pointer">
              Start Free Trial
            </button>

            <button className="border border-slate-700 hover:border-slate-500 transition px-8 py-4 rounded-full font-semibold cursor-pointer">
              Book Demo
            </button>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-slate-800">

            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-slate-400 mt-2">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-slate-400 mt-2">
                Uptime
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">70%</h3>
              <p className="text-slate-400 mt-2">
                Time Saved
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}