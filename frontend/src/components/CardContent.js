import { useEditor, EditorContent} from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import MenuBar from './MenuBar'

const extensions = [
    StarterKit, 
    Underline,
    TextStyle,
    FontFamily.configure({
        types: ['textStyle'],
      }),
    BulletList.configure({
        HTMLAttributes: {
            class: "list-disc"
        },
    }),
    ListItem.configure({
        HTMLAttributes: {
            class: "ml-10"
        },
    })]
    
const content = '<p>Hello World! Here is a list of what I want to do: <ul><li>Cry</li><li>Sleep</li> </ul></p>' // likely, get card content and set to this variable

export default function CardContent() {

    const editor = useEditor({
        extensions,
        content,
      })

    return (
        <div className="mx-auto p-10">

            {/* Menubar/Toolbar */}
            <MenuBar editor={editor}/>
            
            <div className="flex p-10">
            
                <EditorContent className="lg:w-[800px]" editor={editor} />
            
            </div>
        </div>
        
    )
}