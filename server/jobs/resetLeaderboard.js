import { resetSubmissions } from "../services/songService.js";
import { supabase } from "../lib/supabase.js";

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

export async function runSubmissionReset() {
  console.log("Running weekly submission reset....");

  try {
    await resetSubmissions();

    await supabase
      .from("app_meta")
      .update({ value: new Date().toISOString() })
      .eq("key", "lastReset");

  } catch (err) {
    console.error("Submission reset failed", err);
  }
}

export async function checkAndRunReset() {
  const { data, error } = await supabase
    .from("app_meta")
    .select("value")
    .eq("key", "lastReset")
    .single();

  if (error) {
    console.error("Failed to fetch lastReset", error);
    return;
  }

  const lastReset = new Date(data.value);
  const now = new Date();

    if (now - lastReset >= ONE_WEEK) {
    console.log("[RESET] Missed cron → running fallback");
    await runSubmissionReset();
    }
}