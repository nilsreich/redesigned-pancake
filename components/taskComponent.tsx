import { NodeViewWrapper } from "@tiptap/react";
import katex from "katex";
import "katex/dist/katex.min.css";

const TaskComponent = (props: any) => {




    return (
        <NodeViewWrapper className='grid grid-cols-2 gap-8 items-center'>
            {props.node.attrs.tasks.map((item: string, index: number) => {
                return (
                    <div className="grow"
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: katex.renderToString(item),
                        }}
                    />
                );
            })}
        </NodeViewWrapper>
    );
};

export default TaskComponent