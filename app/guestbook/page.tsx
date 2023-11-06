import { authConfig } from "@/utils/auth"
import { getServerSession } from "next-auth"
import { SignInView } from "@/components/AuthButtons/SignInView"
import GuestbookForm from "@/components/GuestbookForm"
import { getMessages } from "@/utils/db"
import GuestbookMessages from "@/components/GuestbookMessages"
import { Message } from "@/utils/types" 

export default async function Guestbook() {
  const session = await getServerSession(authConfig) 
  const messages = await getMessages() as Message[]
  return (
    <main className='w-full h-full flex flex-col gap-10'>
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

