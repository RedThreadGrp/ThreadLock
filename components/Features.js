export default function Features() {
  const features = [
    ["🤖 AI Guidance", "Smart prompts ensure you capture critical legal details."],
    ["🔗 Blockchain Security", "Immutable, timestamped entries build trust in court."],
    ["📄 Court-Ready Exports", "Generate professional PDF summaries in minutes."]
  ];

  return (
    <section id="features" className="py-20 bg-white text-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map(([title, desc], i) => (
          <div key={i} className="bg-lightgray rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-3">{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

