import { Outlet } from "react-router-dom"
import Navbar from "./Navigation.js"


export default function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}