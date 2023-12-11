"use client";
import { Editor } from "@tiptap/react";
import { Button } from "./ui/button";

import { useChat } from "ai/react";
export const SideBar = ({ editor }: { editor: Editor }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  if (!editor || editor.isEditable === false) {
    return null;
  }
  return (
    <div className="flex-none  border-l">
      <Button
        variant={"ghost"}
        size={"sm"}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTaskComponent({ tasks: ["5x-2", "4x-2"] })
            .run()
        }
      >
        get content
      </Button>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};
