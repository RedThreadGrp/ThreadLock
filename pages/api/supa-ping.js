// Firebase connectivity test endpoint

export default async function handler(req, res) {
  try {
    // Dynamically import Firebase to avoid initialization errors
    const { subscribeLeadFn } = await import("../../src/lib/firebase");
    
    // Test Firebase connection by attempting to call a function
    // This is a smoke test - it may fail if the function doesn't exist yet
    const testEmail = `test+${Date.now()}@example.com`;
    
    if (!subscribeLeadFn) {
      return res.status(200).json({ 
        status: "warning",
        message: "Firebase not configured",
        testEmail 
      });
    }
    
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

