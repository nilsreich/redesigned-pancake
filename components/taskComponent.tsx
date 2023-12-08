import { NodeViewWrapper } from "@tiptap/react";
import katex from "katex";
import "katex/dist/katex.min.css";

const TaskComponent = () => {



    return (
        <NodeViewWrapper className='grid grid-cols-2 gap-8 items-center'>
            <div className="grow"
                dangerouslySetInnerHTML={{
                    __html: katex.renderToString('3x-5', {
                        throwOnError: false,
                        displayMode: true,
                    }),
                }}
            />

<div className="grow"
                dangerouslySetInnerHTML={{
                    __html: katex.renderToString('3x-5', {
                        throwOnError: false,
                        displayMode: true,
                    }),
                }}
            /> <div className="grow"
            dangerouslySetInnerHTML={{
                __html: katex.renderToString('3x-5', {
                    throwOnError: false,
                    displayMode: true,
                }),
            }}
        /> <div className="grow"
        dangerouslySetInnerHTML={{
            __html: katex.renderToString('3x-5', {
                throwOnError: false,
                displayMode: true,
            }),
        }}
    /> <div className="grow"
    dangerouslySetInnerHTML={{
        __html: katex.renderToString('3x-5', {
            throwOnError: false,
            displayMode: true,
        }),
    }}
/> <div className="grow"
                dangerouslySetInnerHTML={{
                    __html: katex.renderToString('3x-5', {
                        throwOnError: false,
                        displayMode: true,
                    }),
                }}
            />
        </NodeViewWrapper>
    );
};

export default TaskComponent