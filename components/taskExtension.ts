import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import TaskComponent from "@/components/taskComponent";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        taskComponent: {

            setTaskComponent: () => ReturnType;
        }
    }
}

export default Node.create({
    name: "taskComponent",

    group: 'block',

    atom: true,


    parseHTML() {
        return [
            {
                tag: "task-component"
            }
        ];
    },


    addCommands() {
        return {
            setTaskComponent: () => ({ commands }) => {
                return commands.insertContent({
                    type: this.type.name
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