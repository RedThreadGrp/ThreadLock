// /pages/api/supa-ping.js
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  try {
    const email = `test+${Date.now()}@example.com`;
    const { data, error } = await supabase
      .from("public.users")
      .upsert({ email, is_founding_member: true, founding_member_since: new Date().toISOString() }, { onConflict: "email" })
      .select("*");
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ ok: true, row: data?.[0] });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
