import { authConfig } from "@/utils/auth"
import { getServerSession } from "next-auth"
import { SignInView } from "@/components/AuthButtons/SignInView"
import GuestbookForm from "@/components/GuestbookForm"
import GuestbookMessages from "@/components/GuestbookMessages"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default async function Page() {
  const session = await getServerSession(authConfig);
  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-medium'>Sign my guestbook</h1>
        {session ? (
          <GuestbookForm/>
        ) : (
          <SignInView/>
        )}
      </div>
      <GuestbookMessages/>
    </main>
  );
}
