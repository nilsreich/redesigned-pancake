'use client'
import { useCurrentEditor } from '@tiptap/react'
import { Button } from './ui/button'
export const SideBar = () => {
    const { editor } = useCurrentEditor()


    if (!editor) {
        return null
    }

    return (<div className='flex-none  border-l'>

        <Button variant={'ghost'} size={'sm'} onClick={() => editor.chain().focus().setTaskComponent().run()}>get content</Button>
    </div>)
}