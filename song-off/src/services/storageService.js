import React from 'react';
import { supabase } from '../lib/supabase';  
import { getCurrentUser } from './userService';

export async function uploadProfilePicture(file){

    const user = await getCurrentUser();

    const filePath = `${user.id}/avatar`;

    const { error } = await supabase.storage
        .from("profile-pictures")
        .upload(filePath, file, { upsert: true });

    if (error){
        console.error("Error uploading avatar:", error);
        throw error;
    }

    const { data } = supabase.storage
        .from("profile-pictures")
        .getPublicUrl(filePath);

    return `${data.publicUrl}?t=${Date.now()}`;
}
  