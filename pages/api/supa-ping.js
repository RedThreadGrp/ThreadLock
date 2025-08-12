import { createClient } from "@supabase/supabase-js";
const supa = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  try {
    const email = `test+${Date.now()}@example.com`;
    const { data, error } = await supa
      .from("users")
      .upsert(
        { email, is_founding_member: true, founding_member_since: new Date().toISOString() },
        { onConflict: "email" }
      )
      .select("*");
    res.status(error ? 500 : 200).json({ data, error });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}

