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

export async function userLogout(){
  const{error} = await supabase.auth.signOut();

  if (error) throw error;
  return;
}

export async function getCurrentUser() {
    const {data} = await supabase.auth.getSession();
    return data.session?.user ?? null;
}

export async function getUsername() {
  const user = await getCurrentUser();
  return user.user_metadata.username;
}

export async function getUserProfile() {

  const user = await getCurrentUser();

  const {data, error} = await supabase
    .from("profiles")
    .select("bio, fav_genre, fav_song, pfp_url")
    .eq("username", user.user_metadata.username)
    .single();

  if (error) throw error;

  return data;
}

export async function updateProfile({bio, fav_genre, fav_song}){

  const user = await getCurrentUser();

  const {data, error} = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      bio: bio,
      fav_genre: fav_genre,
      fav_song: fav_song
    })
    .select();

    if (error) throw error;

    return data;

}

export async function updateUserAvatar(avatarURL){

  const user = await getCurrentUser();

  const {data, error} = await supabase
    .from("profiles")
    .update({pfp_url: avatarURL})
    .eq("id", user.id)
    .select();

  if (error){
    console.error("Error updating user profile")
    throw error;
  }

  console.log("Profile updated: ", data);
}