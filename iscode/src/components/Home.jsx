import React from "react"
import { Navbar } from "./Navbar"
import { Apresentation } from "./Apresentation"
export const Home = () => {
    return (
        <div className="flex justify-between font-sans bg-[#0A0A0A] w-full min-h-screen">
            <Navbar />
            <Apresentation/>
        </div>
    )
}