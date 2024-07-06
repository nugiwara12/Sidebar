"use client"

import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <main className='flex'>
            <div className={`bg-white h-screen fixed top-0 transition-width duration-300 ${open ? 'w-64' : 'w-20'} relative text-white p-5 pt-8`}>
                <MdOutlineKeyboardDoubleArrowLeft
                    className='absolute border-2 border-gray-700 text-3xl bg-red-900 rounded-full cursor-pointer -right-3 top-9'
                    onClick={() => setOpen(!open)}
                />
            </div>
        </main>
    )
}

export default Sidebar
