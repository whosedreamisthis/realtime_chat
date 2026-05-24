import React from "react";
import { Message } from "@/lib/realtime";
import { format } from "date-fns";

const Messages = ({
  messages,
  username,
}: {
  messages: Message[];
  username: string;
}) => {
  return (
    <div>
      {messages?.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-zinc-600 text-sm font-mon">
            No messages yet, start the conversation.
          </p>
        </div>
      )}

      {messages?.map((msg) => (
        <div key={msg.id} className="flex flex-col items-start">
          <div className="max-w-[80%] group">
            <div className="flex items-baseline gap-3 mb-1">
              <span
                className={`text-xs font-bold ${msg.sender === username ? "text-green-500" : "text-blue-500"}`}
              >
                {msg.sender === username ? "YOU" : msg.sender}
              </span>
              <span className="text-[10px] text-zinc-600">
                {format(msg.timestamp, "HH:mm")}
              </span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed break-all">
              {msg.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
