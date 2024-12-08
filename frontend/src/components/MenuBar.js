import {Button, ComboBox, ColorArea, ColorPicker, ColorSlider, 
         ColorSwatch, ColorThumb, SliderTrack, Dialog, DialogTrigger, 
         Input, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import { useState } from 'react';

export default function MenuBar({editor}) {

    const [currentFont, setCurrentFont] = useState("Josefin Sans");
    const [currentColor, setCurrentColor] = useState("#3B3B58");

    const commonFonts = [
        "Arial",
        "Arial Black",
        "Baskerville",
        "Bookman",
        "Brush Script MT",
        "Calibri",
        "Cambria",
        "Candara",
        "Century Gothic",
        "Comic Sans MS",
        "Copperplate",
        "Courier New",
        "Didot",
        "Franklin Gothic",
        "Futura",
        "Garamond",
        "Geneva",
        "Georgia",
        "Gill Sans",
        "Helvetica",
        "Impact",
        "Josefin Sans",
        "Lucida Grande",
        "Lucida Sans",
        "Optima",
        "Palatino",
        "Rockwell",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana"
    ];

    return (
        <div className="flex bg-sky-300 rounded-lg z-20">
            
            {/* Undo */}
            <button className="border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </button>
            
            {/* Redo */}
                <button className="border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                    </svg>
                </button>
            
            {/*Bold*/}
                <button className={"ml-2 border-2 rounded-md border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('bold')? 'bg-blue-400' : 'bg-blue-200') } 
                    onClick={() => {editor.chain().focus().toggleBold().run()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
                    </svg>
                </button>
                    
            {/*Italic*/}
                <button className={"border-2 rounded-md border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('italic')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => {editor.chain().focus().toggleItalic().run()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                    </svg>
                </button>
            
            {/*Underline*/}
                <button className={"border-2 rounded-md border-cyan-800 px-2 py-2 text-primary " + (editor.isActive('underline')? 'bg-blue-400' : 'bg-blue-200') } onClick={() => {editor.chain().focus().toggleUnderline().run()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5" />
                    </svg>
                </button>

            {/*Font Color */}
            <ColorPicker defaultValue="#3B3B58">
                <DialogTrigger>
                    <Button className="border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200 flex">
                        <ColorSwatch color={currentColor} className="size-6 rounded-md mr-1 border-white border-[1px]" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.2459 14H8.75407L7.15407 18H5L11 3H13L19 18H16.8459L15.2459 14ZM14.4459 12L12 5.88516L9.55407 12H14.4459ZM3 20H21V22H3V20Y"></path>
                        </svg>
                    </Button>
                    <Popover placement="bottom start">
                        <Dialog className="bg-blue-300 p-5 rounded-md">
                        
                            <ColorArea
                                colorSpace="hsb"
                                xChannel="saturation"
                                yChannel="brightness"
                                className="size-52 rounded-md mb-3"
                                onChange={setCurrentColor}
                            >
                                <ColorThumb className="size-6 border-gray-200 rounded-full shadow-md border-2"/>
                            </ColorArea>
                            
                            <ColorSlider value={currentColor} onChange={setCurrentColor} colorSpace="hsb" channel="hue">
                                <SliderTrack className="w-52 h-5 rounded-md mb-5">
                                    <ColorThumb className="size-6 border-gray-200 rounded-full shadow-md border-2 top-1/2"/>
                                </SliderTrack>
                            </ColorSlider>
                            <div className="flex justify-center">
                                <Button onPress={() => {editor.chain().focus().setColor(currentColor).run()}} className="inline-flex justify-center items-center px-1 bg-secondary-100 rounded-xl ">
                                    <span className="px-3 py-2 text-slate-100 text-md font-body">
                                        Apply Colour
                                    </span>
                                </Button>
                            </div>
                            
                            
                            
                            
                        </Dialog>
                    </Popover>
                </DialogTrigger>
            </ColorPicker>

            {/*Font Family*/}
                <ComboBox aria-label="Font Family"> 
                    <div className="flex ml-2 border-2 rounded-md border-cyan-800 px-2 py-1 text-primary bg-blue-200">
                        
                        <Input id="font-family-input" className="mr-2 p-1 w-28 bg-blue-200" value={currentFont} onChange={(e) => setCurrentFont(e.target.value)}/>
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                        </Button>
                    </div> 
                    <Popover>
                        <ListBox className="max-h-28 overflow-y-auto">
                            {commonFonts.map((font) => 
                                <ListBoxItem className=" bg-blue-200 px-1 py-1 hover:bg-blue-400" onAction={() => {

                                    // set font to the one selected
                                    editor.chain().focus().setFontFamily(font).run()
                                    setCurrentFont(font)
                                    
                                    }}>
                                    
                                    {font}
                                </ListBoxItem>
                            )}
                        </ListBox>
                    </Popover>
                </ComboBox>

            {/* Heading */}
            <Select aria-label="Heading" className="border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200">
                <Button className="flex">
                    <SelectValue>
                        {({defaultChildren, isPlaceholder}) => {
                            return isPlaceholder? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z"></path>
                        </svg></> : defaultChildren;
                        }}
                    </SelectValue>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-5" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </Button>

                <Popover>
                    <ListBox className="flex mt-1">
                        <ListBoxItem textValue="heading-1" className={"border-2 rounded-l-md border-cyan-800 px-2 py-2 " + (editor.isActive('heading', { level: 1 }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleHeading({ level: 1 }).run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25" />
                            </svg>

                        </ListBoxItem>
                        <ListBoxItem textValue="heading-2" className={"border-2 border-cyan-800 px-2 py-2 " + (editor.isActive('heading', { level: 2 }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleHeading({ level: 2 }).run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="heading-3" className={"border-2 rounded-r-md border-cyan-800 px-2 py-2 " + (editor.isActive('heading', { level: 3 }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleHeading({ level: 3 }).run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.905 14.626a4.52 4.52 0 0 1 .738 3.603c-.154.695-.794 1.143-1.504 1.208a15.194 15.194 0 0 1-3.639-.104m4.405-4.707a4.52 4.52 0 0 0 .738-3.603c-.154-.696-.794-1.144-1.504-1.209a15.19 15.19 0 0 0-3.639.104m4.405 4.708H18M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
                            </svg>
                        </ListBoxItem>
                    </ListBox>
                    
                </Popover>
            </Select>
            
                
            
            {/*List*/}
            <Select aria-label="List" className="ml-2 border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200">
                <Button className="flex">
                    <SelectValue>
                        {({defaultChildren, isPlaceholder}) => {
                            return isPlaceholder? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"/>
                            </svg></> : defaultChildren;
                        }}
                    </SelectValue>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-5" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </Button>

                <Popover>
                    <ListBox className="flex mt-1">
                        <ListBoxItem textValue="bullet-list" className={"border-2 rounded-l-md border-cyan-800 px-2 py-2 " + (editor.isActive("bulletList") ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleBulletList().run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"/>
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="ordered-list" className={"border-2 border-cyan-800 px-2 py-2 " + (editor.isActive("orderedList") ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleOrderedList().run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"/>
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="task-list" className={"border-2 rounded-r-md border-cyan-800 px-2 py-2 " + (editor.isActive("taskList") ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.chain().focus().toggleTaskList().run()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-6">
                                <path d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z"/>
                            </svg>
                        </ListBoxItem>
                    </ListBox>
                    
                </Popover>
            </Select>



            {/*Text Align*/}
            <Select aria-label="Text Align" className="border-2 rounded-md border-cyan-800 px-2 py-2 text-primary bg-blue-200">
                <Button className="flex">
                    <SelectValue>
                        {({defaultChildren, isPlaceholder}) => {
                            return isPlaceholder? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z"/>
                        </svg>
                                </> : defaultChildren;
                        }}
                    </SelectValue>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-5" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </Button>
                <Popover>
                    <ListBox className="flex mt-1">

                        <ListBoxItem textValue="align-left" className={"border-2 rounded-l-md border-cyan-800 px-2 py-2 " + (editor.isActive({ textAlign: 'left' }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.commands.setTextAlign('left')
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z"/>
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="align-center" className={"border-2 border-cyan-800 px-2 py-2 " + (editor.isActive({ textAlign: 'center' }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.commands.setTextAlign('center')
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z"/>
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="align-right" className={"border-2 border-cyan-800 px-2 py-2 " + (editor.isActive({ textAlign: 'right' }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.commands.setTextAlign('right')
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z"/>
                            </svg>
                        </ListBoxItem>
                        <ListBoxItem textValue="align-justify" className={"border-2 rounded-r-md border-cyan-800 px-2 py-2 " + (editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-400' : 'bg-blue-200')} onAction={() => {
                            editor.commands.setTextAlign('justify')
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"/>
                            </svg>
                        </ListBoxItem>

                    </ListBox>
                </Popover>
                </Select>
                    
            </div>
    )
}