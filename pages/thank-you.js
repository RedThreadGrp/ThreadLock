// /pages/thank-you.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  const { success, canceled, sku } = router.query;
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (success) {
      if (sku) {
        setMessage("Your file is on its way to your inbox. Thank you for your purchase!");
      } else {
        setMessage("You’re officially a Founding Member! Check your email for your toolkit download link.");
      }
    } else if (canceled) {
      setMessage("Your checkout was canceled — no charge was made.");
    }
  }, [success, canceled, sku]);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0D223F",
      color: "#fff",
      padding: "2rem"
    }}>
      <div style={{ maxWidth: "640px", textAlign: "center" }}>
        <img
          src="/threadlock-logo.png"
          alt="ThreadLock Logo"
          style={{ height: "50px", marginBottom: "1.5rem" }}
        />
        <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          {success ? "Thank You!" : canceled ? "Checkout Canceled" : "Processing..."}
        </h1>
        {message && <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>{message}</p>}

        {success && (
          <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#E6EDF7" }}>
            If you don’t see your email in a few minutes, check your spam or promotions folder.
          </p>
        )}

        <button
          style={{
            marginTop: "2rem",
            padding: "12px 20px",
            background: "#F58220",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
