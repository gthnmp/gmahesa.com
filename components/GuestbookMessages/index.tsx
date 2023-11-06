"use client"
import { Message } from "@/utils/types"
import { supabase } from "@/utils/db";
import { useState, useEffect } from "react";


export default function GuestbookMessages({ messages }: { messages: Message[] }) {
  const [messageList, setMessageList] = useState<Message[]>([...messages] || []);

  useEffect(() => {
    const liveMessages = supabase.channel('messages').on(
      'postgres_changes',
      { event: "*", schema: "public", table: "messages" },
      (payload) => {
        if (payload.eventType === 'INSERT' && payload.new) {
          setMessageList((prevMessageList) => [...prevMessageList as Message[], payload.new as Message]);
        }
      }
    ).subscribe();

    return () => {
      liveMessages.unsubscribe();
    };
  }, []); 

  return (
    <ul className="flex flex-col-reverse gap-2">
      {messageList.map((msg) => (
        <li key={msg.id} className="flex gap-2">
          <span className="text-neutral-400">{msg.sender}</span>
          <span>{msg.content}</span>
        </li>
      ))}
    </ul>
  );
}
