import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { getSession } from "next-auth/react";
import { Message } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET!
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

// The code below is only for load testing only
const dummyMessages = [
  { id: 1, sender: 'John Doe', content: 'Hey, this is a great guestbook!' },
  { id: 2, sender: 'Alice Johnson', content: 'Nice website! Keep up the good work.' },
  { id: 3, sender: 'Bob Smith', content: 'Greetings from the other side of the world!' },
  { id: 4, sender: 'Eva Martinez', content: 'Love your content. Cheers!' },
  { id: 5, sender: 'Mike Brown', content: 'Hello from a fellow developer.' },
  { id: 6, sender: 'Sophie Lee', content: 'Your site design is amazing.' },
  { id: 7, sender: 'Chris Taylor', content: 'I enjoyed exploring your website.' },
  { id: 8, sender: 'Emma White', content: 'Keep creating awesome stuff!' },
  { id: 9, sender: 'Alex Turner', content: 'Greetings from the music world!' },
  { id: 10, sender: 'Olivia Walker', content: 'This guestbook is a cool idea.' },
  { id: 11, sender: 'Gahan', content: 'What would possibly happen if this is a very very long message given by the user? Seems alright to me.' },
];

const getDelayedMessages = async () => {
  const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(5000); 
  return (await getMessages()) as Message[] || dummyMessages;
};

