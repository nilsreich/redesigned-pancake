import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const AiComponent = (props: any) => {
  return (
    <NodeViewWrapper className="flex gap-8 items-center">
      <NodeViewContent
        className={`${
          props.editor.isEditable ? "block" : "hidden"
        } border-l-2 border-blue-600 p-2 bg-accent `}
      />
    </NodeViewWrapper>
  );
};

export default AiComponent;
