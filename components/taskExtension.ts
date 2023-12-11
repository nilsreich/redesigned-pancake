import { mergeAttributes, Node, Command } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import TaskComponent from "@/components/taskComponent";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        taskComponent: {
            setTaskComponent: (attributes: { tasks: string[] }) => ReturnType;
        }
    }
}

export default Node.create({
    name: "taskComponent",

    group: 'block',

    atom: true,

    addAttributes() {
        return {
            tasks: {
                default: ['3x-2', '2x+3', '3x+2', '2x-3'],
            },
        } as const;
    },
    parseHTML() {
        return [
            {
                tag: "task-component"
            }
        ];
    },

    addCommands() {
        return {
            setTaskComponent: (attributes: { tasks: string[] }): Command => ({ commands }) => {
                return commands.insertContent({
                    type: this.type.name,
                    attrs: attributes
                });
            }
        };
    },

    renderHTML({ HTMLAttributes }) {
        return ["task-component", mergeAttributes(HTMLAttributes), 0];
    },

    addNodeView() {
        return ReactNodeViewRenderer(TaskComponent);
    }
});