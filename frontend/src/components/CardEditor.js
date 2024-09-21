import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [StarterKit]
const content = '<p>Hello World!</p>'

export default function CardEditor() {

    const editor = useEditor({
        extensions,
        content,
      })

    
    return (
        <div>
            <EditorContent className="" editor={editor} />
            <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </div>
    )
}