import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET!)

export const getMesssages = async () => {
  try{
    const {data, error} = await supabase.from('guestbook_messages').select()
    if(error){
      console.error('Error while fetching data:', error)
      return
    } 

    return data
  } catch (error) {
    console.error('Error while fetching data:', error)
  }
}
