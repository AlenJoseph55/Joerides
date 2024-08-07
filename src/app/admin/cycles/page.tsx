"use client"
import Layout from "../../../components/Layout"
import Link from "next/link"
import AddCycles from "./AddCycles"
import React, { useState, useEffect } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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
import Nav2 from "@/components/Nav2"
import axios from "axios";


const initialState = { isAddFormVisible: false };

export default function cycles() {
    useEffect(() => {
        getCycles();
    }, []);

    const [cycles, setCycles] = useState<Cycles[]>([]);
    const [isAddFormVisible, setIsAddFormVisible] = useState(initialState.isAddFormVisible);
    const toggleAddForm = () => {
        setIsAddFormVisible(!isAddFormVisible);
    };
    // const cycles = [
    //     { id: 1, name: "Mountain Bike", image: "mountain_bike.jpg", rate: 25 },
    //     { id: 2, name: "Road Bike", image: "road_bike.jpg", rate: 30 },
    //     { id: 3, name: "Hybrid Bike", image: "hybrid_bike.jpg", rate: 20 },
    //     { id: 4, name: "Electric Bike", image: "electric_bike.jpg", rate: 35 },
    // ];

    const getCycles = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/cycles/`);
            console.log(response.data);
            setCycles(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const deleteCycles = async (id: number) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/v1/cycles/${id}`);
            console.log(response.data);
            setCycles(response.data);
        } catch (error) {
            console.error(error);
        } finally{
            getCycles();
        }
    }


    interface Cycles {
        id: number;
        name: string;
        rate: number;
    }


    return (
        <div className="flex">
            {/* <div className="w-full flex flex-col"> */}
            <div className="w-[22vw] text-white px-4 py-8 flex-shrink-0">
                <Layout />
            </div>
            <div className="flex-grow mt-4 flex flex-col justify-content-end">
                <div>
                    <Nav2 />
                </div>
                <div className="flex justify-between items-center">
                    <h1 className='text-4xl p-4 font-bold'>Cycles</h1>
                    <button className='bg-green-400 hover:bg-green-700 h-10 m-4 text-white font-bold py-2 px-4 rounded' onClick={toggleAddForm}>
                        {isAddFormVisible ? "Close" : "Add"}
                    </button>
                </div>

                {isAddFormVisible && <AddCycles 
                getCycles={getCycles} 
                />}
                <Table className='bg-slate-300 w-[77vw]'>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className='bg-gray-500'>
                        <TableRow>
                            <TableHead className="w-[100px]">No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>rate</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {cycles.length > 0 && cycles.map((cycle) => (
                            <TableRow key={cycle.id}>
                                <TableCell className="font-medium">{cycle.id}</TableCell>
                                <TableCell>{cycle.name}</TableCell>
                                <TableCell>{cycle.rate}</TableCell>
                                <TableCell className="text-right">
                                    <button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={async () => await deleteCycles(cycle.id)}>
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}

{cycles.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-gray-500 font-bold">
                                    No cycles found.
                                </TableCell>
                            </TableRow>
                        )}
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
        // </div>
    )
}