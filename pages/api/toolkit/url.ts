import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  // You should already have a session cookie -> get user id from it.
  // If you use @supabase/auth-helpers-nextjs, swap this block for getUser() helpers.
  const accessToken = req.cookies["sb-access-token"];
  if (!accessToken) return res.status(401).json({ error: "Not authenticated" });

  const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data: { user }, error: uerr } = await supa.auth.getUser(accessToken);
  if (uerr || !user) return res.status(401).json({ error: "Invalid session" });

  // Check founding flag
  const { data: profile, error: perr } = await supa
    .from("users")                       // change to your table (e.g., public.profiles)
    .select("is_founding_member")
    .eq("id", user.id)
    .single();

  if (perr) return res.status(500).json({ error: "Profile lookup failed" });
  if (!profile?.is_founding_member) return res.status(403).json({ error: "No access" });

  // Signed URL
  const bucket = process.env.TOOLKIT_BUCKET || "toolkit";
  const path = process.env.TOOLKIT_FILE_PATH || "Founders_Toolkit/Founders_Kit.zip";

  const { data, error } = await supa.storage.from(bucket).createSignedUrl(path, 60 * 60);
  if (error) return res.status(500).json({ error: "Could not sign URL" });

  return res.status(200).json({ url: data.signedUrl });
}
