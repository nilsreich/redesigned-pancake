'use client'
import { useCurrentEditor } from '@tiptap/react'
import { Button } from './ui/button'
export const SideBar = () => {
    const { editor } = useCurrentEditor()


    if (!editor) {
        return null
    }

    const handleClick = () => {
        editor.chain().focus().insertContent('<math-component>33-2/x</math-component>').run()
    }
    return (<div className='flex-none  border-l'>
        <Button variant={'ghost'} size={'sm'} onClick={() => handleClick()}>get content</Button>
    </div>)
}