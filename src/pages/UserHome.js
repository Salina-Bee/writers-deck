import MyProjectSidebar from "../components/MyProjectSidebar"
// import { useState } from "react"

export default function UserHome() {


    return (
        <div className="flex">
            <MyProjectSidebar/>
            <div className="bg-green-500">
                Homepage
            </div>
            
        </div>
    )
}