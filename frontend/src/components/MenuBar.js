export default function MenuBar({editor}) {



  return (
    <div className="flex bg-gray-300">
        
        {/* Undo */}
        <button className="border-2 border-cyan-800 px-2 py-2 text-primary bg-blue-200" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </button>
        
        {/* Redo */}
            <button className="border-2 border-cyan-800 px-2 py-2 text-primary bg-blue-200" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                </svg>
            </button>
        
        {/*Bold*/}
            <button className={"ml-2 border-2 border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('bold')? 'bg-blue-400' : 'bg-blue-200') } 
                onClick={() => {editor.chain().focus().toggleBold().run()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
                </svg>
            </button>
                
        {/*Italic*/}
            <button className={"border-2 border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('italic')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => {editor.chain().focus().toggleItalic().run()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                </svg>
            </button>
        
        {/*Underline*/}
            <button className={"border-2 border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('underline')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => {editor.chain().focus().toggleUnderline().run()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5" />
                </svg>
            </button>
                
        {/*Font color */}
            <button className={"border-2 border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('underline')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => {editor.chain().focus().toggleUnderline().run()}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.2459 14H8.75407L7.15407 18H5L11 3H13L19 18H16.8459L15.2459 14ZM14.4459 12L12 5.88516L9.55407 12H14.4459ZM3 20H21V22H3V20Y"></path>
                </svg>
            </button>
        
        {/*Bullet List*/}
            <button className={"ml-2 border-2 border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('bulletList')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </button>
                
        </div>
  )
}