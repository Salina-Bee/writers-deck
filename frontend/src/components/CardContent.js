import { useEditor, EditorContent} from '@tiptap/react'
import Color from '@tiptap/extension-color'
import Underline from '@tiptap/extension-underline'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import MenuBar from './MenuBar'

const extensions = [
    StarterKit.configure({
        bulletList: {
            HTMLAttributes: {
                class: "list-disc"
            },
        },
        orderedList: {
            HTMLAttributes: {
                class: "list-decimal"
            },
        },
        listItem: {
            HTMLAttributes: {
                class: "ml-10"
            }
        },
        heading: {
            levels: [1,2,3]
        }
    }), 
    Color,
    Underline,
    TextStyle,
    TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
    FontFamily.configure({
        types: ['textStyle'],
      }),
    TaskList.configure({
        HTMLAttributes: {
            class: "ml-10 lg:max-w-[700px]"
        }
    }),
    TaskItem.configure({
        HTMLAttributes: {
            class: "flex break-all text-wrap",
            nested: true,
        }
    }),
    ]
    
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
            
                <EditorContent className="md:w-[600px] lg:w-[800px]" editor={editor} />
            
            </div>
        </div>
        
    )
}