'use client';

import { saveGuestbookEntry } from '@/utils/db';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

export default function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <form
      style={{ opacity: !pending ? 1 : 0.7 }}
      className="relative w-full h-10 flex items-center"
      ref={formRef}
      action={async(formData) => {
        await saveGuestbookEntry(formData)
        formRef.current?.reset()
      }}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={pending}
        name="entry"
        type="text"
        required
        className="pl-2 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-bl-md rounded-tl-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        className="flex items-center justify-center px-2 py-1 font-medium h-full bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-tr-md rounded-br-md w-16"
        disabled={pending}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
