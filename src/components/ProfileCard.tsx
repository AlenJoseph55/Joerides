"use client"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { usePathname } from "next/navigation";
import Link from 'next/link';


const  profilecard = () => {
    const currentPath = usePathname();
    return (

        <Card>
            <CardHeader>
                <CardTitle>
                    <img src="https://github.com/shadcn.png" alt="profile" className="h-[200px] border-2" />
                </CardTitle>
            </CardHeader>
            <CardDescription className="bg-yellow-500 h-8 p-2">Profile Settings</CardDescription>
           <Link href="/user/profile">
            <div className={`border-t-[1px] h-8 pl-4 text-sm p-1 ${currentPath === "/user/profile" ? "text-yellow-500 font-semibold" : "" }`}>My Profile</div>
           </Link>
           <Link href="/user/profile/password">
            <div className={`border-t-[1px] border-black h-8 pl-4 text-sm p-1 ${currentPath === "/user/profile/password" ? "text-yellow-500 font-semibold" : "" }`}>Change password</div>
           </Link>
        </Card>

    )
}

export default profilecard;