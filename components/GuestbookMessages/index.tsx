import { Message } from "@/utils/types"

export default function GuestbookMessages ({messages} : { messages : Message[]}) {
  return(
    <ul>
      {messages.map((msg) => (
        <li key={msg.id} className="flex gap-2">
          <span className="text-neutral-400">
            {msg.sender}
          </span>
          <span>
            {msg.content}
          </span>
        </li>
      ))}
    </ul>
  )
}
