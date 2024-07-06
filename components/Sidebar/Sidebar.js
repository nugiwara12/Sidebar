"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowLeft, MdDashboard, MdOutlineSubscriptions } from "react-icons/md";
import { FaSearch, FaUserFriends, FaGlobe, FaRegQuestionCircle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const pathname = usePathname();

    const toggleSearch = () => {
        setOpen(!open);
    };

    const Menu = [
        {
            icon: <MdDashboard size={20} />, // Adjust size as needed
            href: "/dashboard",
            label: "Dashboard",
            roles: [""],
            isActive: pathname === `/`,
        },
        {
            icon: <GrUserAdmin size={20} />, // Adjust size as needed
            href: "/admin",
            label: "Admin Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/admin") : false,
        },
        {
            icon: <FaUserFriends size={20} />, // Adjust size as needed
            href: "/client",
            label: "Client Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/client") : false,
        },
        {
            icon: <FaGlobe size={20} />, // Adjust size as needed
            href: "/site",
            label: "Site Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/site") : false,
        },
        {
            icon: <FaRegQuestionCircle size={20} />, // Adjust size as needed
            href: "/request",
            label: "Site Request",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/request") : false,
        },
        {
            icon: <MdOutlineSubscriptions size={20} />, // Adjust size as needed
            href: "/subscription",
            label: "Subscription",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/subscription") : false,
        },
        {
            icon: <TfiAnnouncement size={20} />, // Adjust size as needed
            href: "/announcement",
            label: "Announcement",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/announcement") : false,
        },
        {
            icon: <RiTeamLine size={20} />, // Adjust size as needed
            href: "/developer",
            label: "Developer",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/developer") : false,
        },
    ];

    return (
        <main className='flex'>
            <div className={`bg-sky-500 h-screen fixed top-0 transition-width duration-300 ${open ? 'w-64' : 'w-24'} md:${open ? 'w-64' : 'w-20'} relative text-white p-5 pt-10`}>
                <MdOutlineKeyboardDoubleArrowLeft
                    className={`mt-4 absolute border-2 border-gray-700 text-3xl bg-white text-black rounded-full cursor-pointer transition-transform duration-300 ${open ? '-right-3 rotate-0' : '-right-3 rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className='cursor-pointer flex items-center'>
                    <Image 
                        src="/image/logo/logo.png" 
                        alt="Logo" 
                        height={70} 
                        width={70} 
                        className={`block float-left mr-2 duration-500 ${open ? 'rotate-0 h-auto w-auto' : 'rotate-180 h-[60px] w-[200px]'}`}
                    />
                    <div className='flex justify-center items-center text-center'>
                        <h1 className={`text-md origin-left font-semibold transition-transform duration-300 ${!open ? 'scale-0' : 'scale-100'}`}>
                            Food Store
                        </h1>
                    </div>
                </div>
                <div className={`flex items-center rounded-md border border-gray-300 mt-6 py-2 ${open ? 'px-2.5' : 'px-4'}`}>
                    <FaSearch
                        className={`text-white text-2xl block float-left cursor-pointer ${open && 'mr-2'}`}
                        onClick={toggleSearch} // Click handler to toggle the search bar visibility
                    />
                    <input 
                        type="search" 
                        placeholder='Search' 
                        className={`w-full bg-transparent border-none focus:outline-none placeholder:text-white ${!open ? 'hidden' : ''}`} 
                    />
                </div>
                <ul>
                    {Menu.map((menu, index) => (
                        <li key={index} className={`text-sm my-2 ${open ? 'flex justify-left items-center' : 'flex justify-center items-center'}`}>
                            <a
                                href={menu.href}
                                className={`flex items-center text-white rounded-md p-2 hover:bg-sky-700 ${menu.isActive ? 'bg-sky-700' : ''}`}
                            >
                                {menu.icon}
                                <span className={`ml-3 ${open ? 'block' : 'hidden'}`}>{menu.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Sidebar;
