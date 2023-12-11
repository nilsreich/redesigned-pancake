import { mergeAttributes, Node, Command, textblockTypeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import AiComponent from "@/components/aiComponent";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        aiComponent: {
            setAiComponent: () => ReturnType;
        }
    }
}

export default Node.create({
    name: "aiComponent",

    group: "block",

    content: "inline*",

    parseHTML() {
        return [
            {
                tag: "ai-component"
            }
        ];
    },

    addInputRules() {
        return [
            textblockTypeInputRule({
                find: new RegExp('//'),
                type: this.type,

            })]
    },

    addCommands() {
        return {
            setAiComponent: (): Command => ({ commands }) => {
                return commands.insertContent({
                    type: this.type.name,

                });
            }
        };
    },

    renderHTML({ HTMLAttributes }) {
        return ["ai-component", mergeAttributes(HTMLAttributes), 0];
    },

    addNodeView() {
        return ReactNodeViewRenderer(AiComponent);
    }
});