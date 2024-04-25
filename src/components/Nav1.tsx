import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { DropdownMenu, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AiOutlineDown } from "react-icons/ai";
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="bg-yellow-500 h-[15%] sm:h-[10%] md:h-[10%] w-screen flex justify-between items-center p-2 sm:p-7 text-black">
            <div className="flex items-center justify-between space-x-1 ">
                <Link href={"/"}>
                    <h1 className=" sm:text-4xl text-xl">JOERIDES</h1>
                </Link>
            </div>
        </div>
    );
}