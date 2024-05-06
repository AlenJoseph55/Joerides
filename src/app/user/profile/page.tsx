import Nav from "@/components/Nav"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Profilecard from "@/components/ProfileCard"


export default function profile() {
    return (
        <div>
            <div className="sm:h-[10vh]">
                <Nav />
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
                <div>
                    <Profilecard />
                </div>
                <div className="sm:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Profile</CardTitle>
                        </CardHeader>
                        <div className="overflow-x-auto rounded shadow-md">
                            <div className="p-4">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="text-left border-b border-gray-300">
                                            <th colSpan={2} className="font-bold py-4">
                                                Account Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-300">No:</td>
                                            <td className="py-2 px-4 border-b border-gray-300">04</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-300">Name:</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Alex</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-300">Email:</td>
                                            <td className="py-2 px-4 border-b border-gray-300">alex@gmail.com</td>
                                        </tr>
                                        <tr className="text-left border-b border-gray-300">
                                            <th colSpan={2} className="font-bold py-4">
                                                Profile Details
                                            </th>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-300">
                                                <div className="flex items-center justify-between">
                                                    <span>Upload passport size photo:</span>
                                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                                        <Label htmlFor="picture">Picture</Label>
                                                        <Input id="picture" type="file" />
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </Card>

                </div>
            </div>
        </div>
    )
}




