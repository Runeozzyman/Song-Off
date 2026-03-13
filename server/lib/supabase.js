import "dotenv/config";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase env vars', {
    supabaseUrl,
    supabaseAnonKey,
  });
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
