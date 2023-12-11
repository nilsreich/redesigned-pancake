"use client";

import StarterKit from "@tiptap/starter-kit";
import { SideBar } from "./Sidebar";
import { MenuBar } from "./Menubar";
import React, { useEffect } from "react";
import MathExtension from "@/components/mathExtension";
import TaskExtension from "@/components/taskExtension";
import AiExtension from "@/components/aiExtension";

import { useEditor, EditorContent } from "@tiptap/react";

const extensions = [StarterKit, MathExtension, TaskExtension, AiExtension];

const editorProps = {
  attributes: {
    class: "prose focus:outline-none m-5 ",
  },
};

const channel = new BroadcastChannel("editor");
const content = "3x";
export const Tiptap = ({ editable = false }: { editable: boolean }) => {
  const editor = useEditor({
    extensions,
    content,
    editable,
    editorProps,
    onUpdate: ({ editor }) => {
      if (editable) {
        const jsonContent = editor.getJSON();
        channel.postMessage(jsonContent);
      }
    },
  });

  useEffect(() => {
    if (!editable) {
      // Add an event listener to the channel
      const listener = (event: MessageEvent) => {
        // Update the editor content
        editor?.commands.setContent(event.data);
      };
      channel.addEventListener("message", listener);

      // Remove the event listener when the component unmounts
      return () => {
        channel.removeEventListener("message", listener);
      };
    }
  }, [editable, editor]);

  return (
    <div className="flex w-full flex-wrap [&>*:nth-child(2)]:flex-auto">
      {editor && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
      {editor && <SideBar editor={editor} />}
    </div>
  );
};
