"use client"
import Nav from '../../../components/Nav';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
    // const activerides = [
    //     { name: "Hercules", time: "12:00 am - 2:00 pm" }
    // ]
    // const pastrides = [
    //     { name: "Hercules", time: "12:00 am - 2:00 pm", amount: "10$"},
    //     { name: "Hero", time: "12:00 am - 2:00 pm", amount: "5$"},
    //     { name: "Hercules", time: "12:00 am - 2:00 pm", amount: "10$"},
    //     { name: "Hero", time: "12:00 am - 2:00 pm", amount: "5$"},
    // ]
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


    return (
        <div className='overflow-hidden'>
            <div>
                <Nav />
            </div>
            <div>
                <div>
                    <h1 className='p-5 text-3xl'>Active Rides</h1>
                    {activerides.map(({ name, date , hours, rate }) => (
                        <Card className='flex items-center m-4 mt-2 rounded-xl justify-between'>
                            <CardHeader className='p-2'>
                                {/* <CardTitle> */}
                    {/* <img src="https://github.com/shadcn.png" className='h-14 p-0'/> */}
                                {/* </CardTitle> */}
                                {/* <CardDescription>Card Description</CardDescription> */}
                                <CardTitle>Cycle1</CardTitle>
                                <p>hours:{hours}</p>
                                
                            </CardHeader>
                            <CardContent className='flex flex-col items-start p-0 justify-between text-right'>
                            <CardTitle>Rs {rate}</CardTitle>
                            </CardContent>
                            <CardFooter className='p-2'>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" className='bg-yellow-500 rounded-xl'>Cancel</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className='bg-yellow-500'>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your
                                                account and remove your data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div>
                    <h1 className='p-5 text-3xl'>Past Rides</h1>
                    {pastrides.length > 0 && pastrides.map(({ name, time, amount }) => (
                        <Card className='flex items-center rounded-xl justify-between m-4 mt-2'>
                            <CardHeader className='p-2'>
                            <CardTitle>{name}</CardTitle>
                                <p>{time}</p>
                                {/* <CardDescription>Card Description</CardDescription> */}
                            </CardHeader>
                            <CardContent className='p-0'>
                                <CardTitle>{amount}</CardTitle>
                                
                            </CardContent>
                            <CardFooter>
                                {/* <p>Action Button</p> */}
                            </CardFooter>
                        </Card>
                    ))}
                    <h1>There are no past rides</h1>
                    {/* {
                        pastrides.length == 0 && (
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}
