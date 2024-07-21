"use client"
import Nav from '../../../components/Nav';
import {
    Card,
    CardFooter
} from "@/components/ui/card"
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
import { Button } from "@/components/ui/button"
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function rides() {
    const [activerides, setActiverides] = useState([]);
    const [pastrides, setPastrides] = useState([]);
    const [cycle, setCycle] = useState("");
    useEffect(() => {
        getactiveRides();
        getpastRides();
    }, []);

    const getactiveRides = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/rides/active`);
            console.log(response.data);
            setActiverides(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const getpastRides = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/rides/past`);
            console.log(response.data);
            setPastrides(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const cancelRide = async (id: Number) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/v1/rides/cancel/${id}`);
            console.log(response.data);
            // setPastrides(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='overflow-hidden'>
            <div>
                <Nav />
            </div>
            <div>
                <div>
                    <h1 className='p-5 text-3xl'>Active Rides</h1>
                    <div className=' flex flex-col items-center justify-center'>
                        {activerides.length > 0 ?( activerides.map(({ id, image, date, hours, rate }) => (
                            <Card className='flex flex-col justify-between items-center rounded-xl mt-2 w-[95%]' key={id}>
                                <div className='w-full flex items-center justify-around'>
                                    <div className='w-1/5'></div>
                                    <div className='flex items-center justify-around w-3/5'>
                                        <h1 className='text-left w-[13%]'>Date</h1>
                                        <h1 className='text-left w-[13%]'>Time</h1>
                                        <h1 className='text-left w-[13%]'>Amount</h1>
                                        <h1 className='text-left w-[13%]'>Status</h1>
                                    </div>
                                    <div className='w-1/5'></div>
                                </div>
                                <div className='border-t flex items-center mt-2 justify-between w-full'>
                                    <img src={image} alt="" className="p-2 rounded-lg h-[10rem] sm:h-[18rem] md:h-[10rem] w-1/5" />
                                    <div className='flex items-center justify-around w-3/5'>
                                        <h1 className='text-left w-[13%]'>{date}</h1>
                                        <h1 className='text-left w-[13%]'>{`${hours} hours`}</h1>
                                        <h1 className='text-left w-[13%]'>Not Paid</h1>
                                        <h1 className='text-left w-[13%]'>{rate}</h1>
                                    </div>
                                    <CardFooter className='p-4 w-1/5 flex justify-end'>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" className='bg-yellow-500 rounded-xl'>Cancel</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className='bg-yellow-500'>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will cancel your
                                                        ride
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={async () => { await cancelRide(id); getactiveRides(); }}>Continue</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))):(
                            <div>
                                <h1>No rides are active</h1>
                            </div>
                        )
                        }
                    </div>
                </div>
                <div>
                    <h1 className='p-5 text-3xl'>Past Rides</h1>
                    <div className='grid grid-cols-4 gap-14'>
                        {pastrides.length > 0 ?( pastrides.map(({ id, image, date }) => (
                            <Card className='rounded-xl m-4 mt-2 w-20%' key={id}>
                                <img src={image} alt="" className="p-2 rounded-lg h-[10rem] sm:h-[18rem] md:h-[10rem] w-full" />

                                <CardFooter className='border-t h-[20%] flex items-center justify-center p-0'>
                                    {date}
                                </CardFooter>
                            </Card>
                        ))
                    ):(
                        <div className='flex items-center justify-center w-screen'>
                            <h1>There are no past rides</h1>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}
