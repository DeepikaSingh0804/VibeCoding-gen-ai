const features = [
  {
    title: "AI Agents",
    description: "Automate customer support."
  },
  {
    title: "Analytics",
    description: "Track growth in real time."
  },
  {
    title: "Workflow Builder",
    description: "Create automation visually."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0B0F19] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          Everything in one place
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-3xl border hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}