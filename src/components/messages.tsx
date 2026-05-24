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
      <div className="p-4">
        <div className="flex flex-col gap-3">
          {messages?.map((msg) => (
            <div key={msg.id} className="flex flex-col ">
              <div
                className={`flex w-full gap-3 ${msg.sender === username ? "justify-start" : "justify-end"} `}
              >
                <span
                  className={`text-xs font-bold ${msg.sender === username ? "text-green-500" : "text-blue-500"}`}
                >
                  {msg.sender === username ? "YOU" : msg.sender}
                </span>
                <span className="text-[10px] text-zinc-600">
                  {format(msg.timestamp, "HH:mm")}
                </span>
              </div>
              <div
                className={`flex ${msg.sender === username ? "justify-start" : "justify-end"}`}
              >
                <p className="text-sm text-zinc-300 leading-relaxed ">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
