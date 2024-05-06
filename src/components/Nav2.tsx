"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav2() {
    const pathname = usePathname();

    return (
        <div className="w-[75vw] h-[80px] bg-gray-800 rounded-xl flex justify-between p-4">
            <div className="flex items-center">
                <h1 className="text-white text-base font-mono mr-4">
                    {/* <HouseDoorFill color="white" size={15} className="mb-1" />{" "} */}
                     {pathname}
                    <br />
                    <span className="text-white font-bold text-2xl">{pathname.slice(7).toLocaleUpperCase()}</span>
                </h1>
            </div>
            <div className="flex items-center space-x-4">
                {/* <PersonCircle size={25} type="button" className="text-white" /> */}
                <Link href="/signin" className="text-white hover:underline">
                    Sign Out
                </Link>
            </div>
        </div>
    )
}