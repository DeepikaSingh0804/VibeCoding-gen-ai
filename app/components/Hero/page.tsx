export default function Hero() {
  return (
    <section className="bg-[#0B0F19] text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <p className="text-gray-300 font-medium mb-4">
          AI Automation Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 leading-tight">

          Automate repetitive work
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto mt-6">
          Build workflows, manage operations and
          scale your business with intelligent AI
          automation.
        </p>

        <div className="flex gap-4 justify-center mt-8">

          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:cursor-pointer">
            Start Free
          </button>

          <button className="bg-blue-500 border border-slate-800 px-8 py-3 rounded-full hover:cursor-pointer">
            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}