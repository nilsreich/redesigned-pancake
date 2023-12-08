import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import MathComponent from "@/components/mathComponent";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mathComponent: {
            /**
             * Add a mathComponent
             */
            setMathComponent: () => ReturnType;
        }
    }
}

export default Node.create({
    name: "mathComponent",

    group: "block",

    content: "inline*",

    parseHTML() {
        return [
            {
                tag: "math-component"
            }
        ];
    },

    addKeyboardShortcuts() {
        return {
            "Mod-Shift-Enter": () => {
                return this.editor
                    .chain()
                    .insertContentAt(this.editor.state.selection.head, {
                        type: this.type.name
                    })
                    .focus()
                    .run();
            }
        };
    },

    addCommands() {
        return {
            setMathComponent: () => ({ commands }) => {
                return commands.insertContent({
                    type: this.type.name
                });
            }
        };
    },

    renderHTML({ HTMLAttributes }) {
        return ["math-component", mergeAttributes(HTMLAttributes), 0];
    },

    addNodeView() {
        return ReactNodeViewRenderer(MathComponent);
    }
});