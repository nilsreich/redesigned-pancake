import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { useState, useEffect } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { AsciiMath } from 'asciimath-parser'
const am = new AsciiMath({})

const MathComponent = (props: any) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        let result = "";
        props.node.content.content.map((item: any) => {
            item.type.name === "text"
                ? (result = result + item.text)
                : (result = result + "\n");
        });
        setValue(result);
    }, [props]);


    return (
        <NodeViewWrapper className='flex gap-8 items-center'>
            <div className="grow"
                dangerouslySetInnerHTML={{
                    __html: value !== undefined ? katex.renderToString(am.toTex(value), {
                        throwOnError: false,
                        displayMode: true,
                    }) : "",
                }}
            />
            <NodeViewContent
                className={`${props.editor.isEditable ? "block" : "hidden"} border-l-2 border-blue-600 p-2 bg-accent `}
            />

        </NodeViewWrapper>
    );
};

export default MathComponent