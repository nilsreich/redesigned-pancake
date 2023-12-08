'use client'
import { useCurrentEditor } from '@tiptap/react'
import { Button } from '@/components/ui/button'
import { BoldIcon, Code2Icon, CodeIcon, CornerDownLeftIcon, FunctionSquareIcon, ItalicIcon, ListIcon, ListOrderedIcon, PaletteIcon, QuoteIcon, RedoIcon, RemoveFormattingIcon, SeparatorHorizontalIcon, StrikethroughIcon, TextIcon, TypeIcon, UndoIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Separator } from './ui/separator'
export const MenuBar = () => {
    const { editor } = useCurrentEditor()


    if (!editor) {
        return null
    }

    const handleTextStyle = (e: string) => {

        switch (e) {
            case 'paragraph':
                editor.chain().focus().setParagraph().run()
                break;
            case 'heading1':
                editor.chain().focus().toggleHeading({ level: 1 }).run()
                break;
            case 'heading2':
                editor.chain().focus().toggleHeading({ level: 2 }).run()
                break;
            case 'heading3':
                editor.chain().focus().toggleHeading({ level: 3 }).run()
                break;
            case 'heading4':
                editor.chain().focus().toggleHeading({ level: 4 }).run()
                break;
        }
    }

    const getTextSyle = () => {
        if (editor.isActive('heading', { level: 1 })) {
            return 'heading1'
        }
        if (editor.isActive('heading', { level: 2 })) {
            return 'heading2'
        }
        if (editor.isActive('heading', { level: 3 })) {
            return 'heading3'
        }
        if (editor.isActive('heading', { level: 4 })) {
            return 'heading4'
        }
        if (editor.isActive('paragraph')) {
            return 'paragraph'
        }
    }

    return (
        <div className='w-full flex gap-2 p-2 border-b items-center '>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                <UndoIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                <RedoIcon className='w-4 h-4' />
            </Button>
            <Separator orientation="vertical" />
            <Select onValueChange={(e) => handleTextStyle(e)} defaultValue='paragraph' value={getTextSyle()} >
                <SelectTrigger className="w-[180px] border-none">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>

                    <SelectItem value="paragraph">Paragraph</SelectItem>
                    <SelectItem value="heading1">Heading 1</SelectItem>
                    <SelectItem value="heading2">Heading 2</SelectItem>
                    <SelectItem value="heading3">Heading 3</SelectItem>
                    <SelectItem value="heading4">Heading 4</SelectItem>

                </SelectContent>
            </Select>
            <Separator orientation="vertical" />
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'bg-input' : ''}
            >
                <BoldIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'bg-input' : ''}
            >
                <ItalicIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'bg-input' : ''}
            >
                <StrikethroughIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? 'bg-input' : ''}
            >
                <CodeIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'} onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <RemoveFormattingIcon className='w-4 h-4' />
            </Button>



            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'bg-input' : ''}
            >
                <ListIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'bg-input' : ''}
            >
                <ListOrderedIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'bg-input' : ''}
            >
                <Code2Icon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'bg-input' : ''}
            >
                <QuoteIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <SeparatorHorizontalIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'} onClick={() => editor.chain().focus().setHardBreak().run()}>
                <CornerDownLeftIcon className='w-4 h-4' />
            </Button>
            <Button variant={'ghost'} size={'sm'} onClick={() => editor.chain().focus().setMathComponent().run()}>
                <FunctionSquareIcon className='w-4 h-4' />
            </Button>
        </div>
    )
}