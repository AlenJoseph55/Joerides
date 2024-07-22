"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { DropdownMenu, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AiOutlineDown } from "react-icons/ai";
import Link from 'next/link';

export default function Nav() {
  const [iconRotation, setIconRotation] = useState(0);
  const links = [
    { name: "Profile", href: '/user/profile' },
    { name: "Past Rides", href: "/user/rides" },
    { name: "Current Ride", href: "/user/rides" },
    { name: "Payments", href: "/user/payments" },
    { name: "Logout", href: "/" },

  ];
  return (
    <div className="bg-yellow-500 h-[10%] sm:h-[15%] w-screen flex justify-between items-center p-2 sm:p-7 text-black">
      <div className="flex items-center justify-between space-x-1 ">
        <Link href={"/user/dashboard"}>
          <h1 className=" sm:text-4xl text-xl">JOERIDES</h1>
        </Link>
      </div>

      <div className={`items-center space-x-20 hidden sm:flex pl-12`}>
        <Link href="/user/dashboard">
          <h1>Home</h1>
        </Link>
        <Link href="/user/cycles">
          <h1>Available Cycles</h1>
        </Link>
        <Link href="/user/rides">
          <h1>My Rides</h1>
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center" onClick={() => setIconRotation(iconRotation === 0 ? 180 : 0)}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="p-1"><AiOutlineDown className={`up transform rotate-${iconRotation}`} />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="sm:w-60 bg-white">
            <DropdownMenuSeparator />
            {links.map(({ name, href }) => (
              <DropdownMenuItem className="flex flex-col p-2" key={name}>
                <Link href={href}>
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}