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

export async function userLogin(email, password) {

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return { success: true, user: data.user };

  }catch (err) {
    return { success: false, message: err.message};
  }

}

export async function getCurrentUser() {
    const {data} = await supabase.auth.getSession();
    return data.session?.user ?? null;
}

export async function getUsername() {
  const user = await getCurrentUser();
  return user.user_metadata.username;
}

export async function userLogout(){
  const{error} = await supabase.auth.signOut();

  if (error) throw error;
  return;
}