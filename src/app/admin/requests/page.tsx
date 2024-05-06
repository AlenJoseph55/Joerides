"use client"
import Layout from '@/components/Layout'
import Nav2 from "@/components/Nav2"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { useState,useEffect } from 'react';
export default function admin() {
    const [users, setUsers] = useState<User[]>([]);


    interface User {
        id: number;
        name: string;
        email: string;
    }
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "$550.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV006",
            paymentStatus: "Pending",
            totalAmount: "$200.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV007",
            paymentStatus: "Unpaid",
            totalAmount: "$300.00",
            paymentMethod: "Credit Card",
        },
    ]
useEffect(() => {
    getUsers();
},[]);
      

    const getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/requests`);
            console.log(response.data.users[0]);
            setUsers(response.data.users);
        } catch (error) {
            console.error(error);
        }
    }

const handleApprove = async (id: number) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/v1/approve/${id}`);
        console.log(response);
        getUsers();
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
                    <h1 className='text-4xl p-4 font-bold'>Requests</h1>
                </div>
                <Table className='bg-slate-300 w-[77vw]'>
                        <TableHeader className='bg-gray-500'>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Approve</TableHead>
                                <TableHead>Reject</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={async () => await handleApprove(user.id)}>
                                            Approve
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                            Reject
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
            </div>
        </div>
    )
}