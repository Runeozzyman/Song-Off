import { supabase } from "../lib/supabase";

export async function userSignUp(email, password) {
    
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });

    if(error) throw error;

    return{
        success: true,
        user: data.user
    };
            
}
  