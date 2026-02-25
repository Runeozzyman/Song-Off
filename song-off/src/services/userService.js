import { supabase } from "../lib/supabase";

export async function userSignUp(email, password, username) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username
      }
    }
  });

  if (error) throw error;

  return data.user;
}