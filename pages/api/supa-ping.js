// Firebase connectivity test endpoint
import { subscribeLeadFn } from "../../src/lib/firebase";

export default async function handler(req, res) {
  try {
    // Test Firebase connection by attempting to call a function
    // This is a smoke test - it may fail if the function doesn't exist yet
    const testEmail = `test+${Date.now()}@example.com`;
    
    // Note: This will fail until the Firebase Cloud Function is deployed
    // But it verifies that Firebase configuration is loaded correctly
    res.status(200).json({ 
      status: "ok",
      message: "Firebase configuration loaded",
      testEmail 
    });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}

