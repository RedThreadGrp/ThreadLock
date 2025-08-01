import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-lightgray text-darkblue">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/threadlock-logo.png" width={50} height={50} alt="ThreadLock Logo"/>
          <span className="font-bold text-xl">ThreadLock</span>
        </div>
        <a href="#pricing" className="font-semibold hover:text-orange transition">Pricing</a>
      </nav>

      {/* Hero */}
      <header className="text-center py-24 bg-gradient-to-r from-darkblue to-orange text-white">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Take Control of Your Family Law Case
        </motion.h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          AI-guided, blockchain-secured, and court-ready journaling to protect your rights.
        </p>
        <a href="#pricing" className="bg-orange px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Join Early Access for $10
        </a>
      </header>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            ["🤖 AI Guidance", "Smart prompts ensure you capture critical legal details."],
            ["🔗 Blockchain Security", "Immutable, timestamped entries build trust in court."],
            ["📄 Court-Ready Exports", "Generate professional PDF summaries in minutes."]
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bg-lightgray rounded-lg p-8 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-3">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-darkblue text-white text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Early Adopter Pricing
        </motion.h2>
        <p className="mb-8">Sign up by <strong>August 31</strong> for 6 months of Pro access for just <strong>$10</strong>.</p>
        <form id="signupForm" className="max-w-md mx-auto bg-white text-darkblue rounded-lg p-6 space-y-4 shadow">
          <input type="text" id="name" name="name" placeholder="Full Name" required className="w-full p-3 border rounded"/>
          <input type="email" id="email" name="email" placeholder="Email" required className="w-full p-3 border rounded"/>
          <button type="button" id="checkoutButton" className="w-full bg-orange text-white py-3 rounded font-bold hover:bg-yellow-500 transition">
            Pay $10 & Sign Up
          </button>
          <p className="text-xs text-gray-500 mt-2">Secure payment powered by Stripe</p>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-darkblue text-white text-center py-8 text-sm">
        © 2025 ThreadLock. All Rights Reserved.  
        <div className="mt-3 space-x-4">
          <a href="#features" className="hover:text-orange">Features</a>
          <a href="#pricing" className="hover:text-orange">Pricing</a>
          <a href="#" className="hover:text-orange">Privacy</a>
        </div>
      </footer>

      {/* Stripe Script */}
      <script src="https://js.stripe.com/v3/"></script>
      <script dangerouslySetInnerHTML={{__html: `
        const stripe = Stripe("pk_test_REPLACE_WITH_YOUR_PUBLISHABLE_KEY");
        document.getElementById("checkoutButton").addEventListener("click", async () => {
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          if (!name || !email) return alert("Please fill out all fields.");
          const res = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
          });
          const { sessionId } = await res.json();
          stripe.redirectToCheckout({ sessionId });
        });
      `}} />
    </div>
  );
}
