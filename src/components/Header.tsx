/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navitems=[
    {
        name:"Home",
        url:'/'
    },
    {
        name:'Features',
        url:'/features',
    },
    {
        name:"Use-Cases",
        url:'/use-cases'
    },
    {
        name:'Pricing',
        url:'/pricing'
    },
]

const Header = () => {
    const [isOpen,setIsOpen] = React.useState(false);
  return (
    <header className="relative x-90 w-full h-fit px-5 py-4 bg-gray-900 xl:bg-transparent">
        <div className="flex items-center justify-between">
            <Logo/>
            <nav className="hidden md:flex gap-5 text-white items-center">
                {
                    navitems.map((item,index)=>(
                      <Link key={index} href={item.url} className="text-white font-semibold text-sm">
                        {item.name}
                      </Link>  
                    ))
                }
            </nav>
            {/* Action Button */}
            <div className="hidden md:flex gap-6">
                <Link href="/login" className="text-sm flex items-center rounded-full border-white border py-1 px-5 hover:bg-orange-400 hover:text-[#1F1F38] transition text-white">
                Login
                </Link>
                <Link href="/#" className="custom_button">
                Get for free
                </Link>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white text-2xl relative z-20 p-3">
                {isOpen ? <FaTimes/> : <FaBars/>} 
            </button>
        </div>

        {/* Mobile Navigation */}
        {
            isOpen && (
                <nav className="md:hidden mt-4 space-y-4">
                    {
                        navitems.map((item,index)=>(
                            <Link key={index} href={item.url} className="block text-white font-semibold text-sm" onClick={()=>setIsOpen(false)}>
                                {item.name}
                            </Link>
                        ))
                    }
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href={"#login"} className="text-sm flex items-center rounded-full text-center border-white border py-1 px-5 hover:bg-orange-400 hover:text-[#1F1F38] transition text-white" onClick={()=>setIsOpen(false)}>
                            login
                        </Link>
                        <Link href={"#login"} className="custom_button text-center flex justify-center" onClick={()=>setIsOpen(false)}>
                            Get For Free
                        </Link>
                    </div>
                </nav>
            )
        }
    </header>
  )
}

export default Header