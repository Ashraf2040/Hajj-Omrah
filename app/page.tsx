"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";

// const roleToColorMap: Record<Message["role"], string> = {
//   system: "red",
//   user: "black",
//   assistant: "green",
// };

export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <div className=" flex flex-col lg:mx-20 items-center   py-4 ">
      <form
        onSubmit={submitMessage}
        className="flex items-center   w-2/5 mb-12"
      >
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  p-4  border border-gray-300 w-full rounded shadow-xl"
          value={input}
          placeholder="Type your question..."
          onChange={handleInputChange}
        />
        <button className="p-4 bg-black rounded-r-lg -ml-2 font-bold text-white px-4">
          Ask
        </button>
      </form>
      {error != null && (
        <div className="relative bg-red-500 text-white px-6 py-4 rounded-md">
          <span className="block sm:inline">
            Error: {(error as any).toString()}
          </span>
        </div>
      )}

      {messages.map((m: Message) => (
        <div
          key={m.id}
          className="whitespace-pre-wrap flex flex-col px-40"
          // style={}
        >
          <strong>{`${m.role}: `}</strong>
          {m.role !== "data" && m.content}
          {m.role === "data" && (
            <div className="">
              {(m.data as any).description}
              <br />
              <pre className={"bg-gray-200"}>
                {JSON.stringify(m.data, null, 2)}
              </pre>
            </div>
          )}
          <br />
          <br />
        </div>
      ))}

      {status === "in_progress" && (
        <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
      )}
    </div>
  );
}
