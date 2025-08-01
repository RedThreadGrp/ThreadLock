export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-darkblue text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Early Adopter Pricing</h2>
      <p className="mb-8">
        Sign up by <strong>August 31</strong> for 6 months of Pro access for just{" "}
        <strong>$10</strong>.
      </p>

      <form
        id="signupForm"
        className="max-w-md mx-auto bg-white text-darkblue rounded-lg p-6 space-y-4 shadow"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="button"
          id="checkoutButton"
          className="w-full bg-orange text-white py-3 rounded font-bold hover:bg-yellow-500 transition"
        >
          Pay $10 & Sign Up
        </button>
        <p className="text-xs text-gray-500 mt-2">Secure payment powered by Stripe</p>
      </form>
    </section>
  );
}
