import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { getSession } from "next-auth/react";
import { revalidatePath } from "next/cache";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_DEVELOPMENT_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_DEVELOPMENT_SECRET!
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export const getMessages = async () => {
  try{
    const {data, error} = await supabase.from('messages').select()
    
    if(error){
      throw new Error("Error while fetching data")
    } 

    return data 
  } catch (error) {
    console.error('Error while fetching data:', error)
  }
}

export const saveGuestbookEntry = async (formData : FormData) => {
  const session = await getSession();
  
  if(!session?.user){
    throw new Error("Unauthorized user")
  }
  
  const email = session.user.email
  const sender = session.user.name
  const entry = formData.get('entry')?.toString() || '';
  const content = entry.slice(0,500)
  
  try { 
    const {error} = await supabase.from('messages').insert({sender, content, email})
    if(error){
      console.error("error fetching data:", error)
    }
  } catch (error) {
    throw new Error(`Error inserting data: ${error}`);
  }
}
