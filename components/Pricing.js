export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Join Early Access for Just $10
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Lock in your first 6 months for $10. Start building secure, AI-guided evidence
        and gain early access to premium features before public launch.
      </p>
      <div className="max-w-md mx-auto bg-gray-100 rounded-xl p-8 shadow-md">
        <p className="text-4xl font-bold mb-4">$10 <span className="text-lg font-normal">/ first 6 months</span></p>
        <p className="text-gray-500 mb-6">Then $19.99/month, cancel anytime</p>
        <a
          href="#"
          className="bg-orange-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Claim Early Access
        </a>
      </div>
    </section>
  )
}
