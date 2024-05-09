"use client"
import Layout from '@/components/Layout'
import Nav2 from "@/components/Nav2"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { useState, useEffect } from 'react';


export default function admin() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers();
    }, []);


    interface User {
        id: number;
        name: string;
        email: string;
    }

    const getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/users`);
            console.log(response.data.users[0]);
            setUsers(response.data.users);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex'>
            <div className="w-[22vw] text-white px-4 py-8 flex-shrink-0">
                <Layout />
            </div>
            <div className="flex-grow mt-4 flex flex-col justify-content-end">
                <div>
                    <Nav2 />
                </div>
                <div>
                    <h1 className='text-4xl p-4 font-bold'>Users</h1>
                </div>
                <Table className='bg-slate-300 w-[77vw]'>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className='bg-gray-500'>
                        <TableRow>
                            <TableHead className="w-[100px]">No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            {/* <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-right">Action</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                {/* <TableCell className="text-right">{.totalAmount}</TableCell>
                                    <TableCell className="text-right">
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                            View
                                        </button>
                                    </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter> */}
                </Table>
            </div>
        </div>
    )
}