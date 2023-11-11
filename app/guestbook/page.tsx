import { authConfig } from "@/utils/auth"
import { getServerSession } from "next-auth"
import { SignInView } from "@/components/AuthButtons/SignInView"
import GuestbookForm from "@/components/GuestbookForm"
import { getMessages } from "@/utils/db"
import GuestbookMessages from "@/components/GuestbookMessages"
import { Message } from "@/utils/types" 
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default async function Guestbook() {
  const session = await getServerSession(authConfig) 
  // const messages = await getMessages() as Message[] || [{id:1, sender:'gahan', content:'what would possibly happen if this is a very very long message give by the user? seems alright to me'}]
  const messages = await getMessages() as Message[] || []
  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-medium'> sign my guestbook </h1>
        {session ? (
          <GuestbookForm/>
        ) : (
          <SignInView/>
        )}
      </div>
      <GuestbookMessages messages={messages}/>
    </main>
  )
}

