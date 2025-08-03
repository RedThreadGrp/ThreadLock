export default function Features() {
  const features = [
    {
      title: 'AI-Guided Journaling',
      description: 'Smart prompts ensure you capture critical details for your jurisdiction, improving case clarity and efficiency.',
      icon: '🧠',
    },
    {
      title: 'Blockchain-Secured Records',
      description: 'Immutable, timestamped entries create verifiable evidence that stands up in court.',
      icon: '🔒',
    },
    {
      title: 'Court-Ready Exports',
      description: 'Generate polished PDF summaries and evidence packages for attorneys, mediators, or judges in minutes.',
      icon: '📄',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Build Stronger Cases with ThreadLock
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
