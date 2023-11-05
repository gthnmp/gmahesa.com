import { GoogleAuthentication, GithubAuthentication, SignOut, DiscordAuthentication } from "@/components/AuthButtons"
import { authConfig } from "@/utils/auth"
import { getServerSession } from "next-auth"
import { SignInView } from "@/components/AuthButtons/SignInView"
import GuestbookForm from "@/components/GuestbookForm"


export default async function Guestbook() {
  const session = await getServerSession(authConfig) 
  return (
    <main className='w-full h-full flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-medium'> sign my guestbook </h1>
        {session ? (
          <>
            <p> Hello there user! {session.user?.name} </p>
            <GuestbookForm/>
            <SignOut> Sign Out </SignOut>
          </>
        ) : (
          <SignInView/>
        )}
      </div>
      <div className="flex flex-col gap-5">
      </div>
    </main>
  )
}

