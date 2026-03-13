import "dotenv/config";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  console.error('Missing Supabase env vars', {
    supabaseUrl,
    supabaseSecretKey,
  });
}

export const supabase = createClient(
  supabaseUrl,
 supabaseSecretKey,
);
