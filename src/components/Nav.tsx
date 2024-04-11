"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { DropdownMenu, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AiOutlineDown } from "react-icons/ai";

export default function Nav() {
  const [iconRotation, setIconRotation] = useState(0);
  return (
    <div className="bg-yellow-500 h-[10%] sm:h-[15%] w-screen flex justify-between items-center p-2 sm:p-7 text-black">
      <div className="flex items-center">
        <h1 className=" sm:text-4xl text-xl">JOERIDES</h1>
      </div>


      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center" onClick={()=>setIconRotation(iconRotation === 0 ? 180 : 0)}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="p-1"><AiOutlineDown className={`up transform rotate-${iconRotation}`}/>
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="sm:w-60">
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}