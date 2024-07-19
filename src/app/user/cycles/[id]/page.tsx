"use client"
import React, { useState, useEffect } from "react";
import Nav from "../../../../components/Nav"
import Link from 'next/link';
import { useParams } from "next/navigation";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function book() {

    const [cycle, setCycle] = useState<Cycles[]>([]);

    useEffect(() => {
        getCycle();
    }, []);

    const [response, setResponse] = useState<Response>();
    const [isSuccessful, setIsSuccessful] = useState(false);
    interface Response {
        response: string;
        message: string;
    }

    interface Cycles {
        id: number;
        name: string;
        rate: number;
        image: string;

    }
    const currentDate = new Date();
    const [hour, sethour] = useState(0.0);
    const [rate, setrate] = useState(0)
    const handleAdd = (rate) => {
        sethour((prevValue) => prevValue + 0.5);
        setrate((prevRate) => prevRate + rate / 2);
    };
    const handleSub = (rate) => {
        sethour((prevValue) => Math.max(prevValue - 0.5, 0));
        setrate((prevRate) => Math.max(prevRate - rate / 2, 0));
    };
    const { id } = useParams();
    const getCycle = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/cycles/${id}`);
            console.log(response.data[0].image);
            setCycle(response.data[0]);
            setResponse(response.data.message);
        } catch (error) {
            console.error(error);
            setResponse(error.data.message);
        }
    }


    const createRide = async () => {
        try {
            const dataObject = {
                date: currentDate.toDateString(),
                rate: rate,
                hours: hour,
                cycle_id: id,
            };
            const response = await axios.post(`http://localhost:3001/api/v1/rides/`, dataObject);
            console.log(response.data.message);
            setResponse(response.data.message);

        } catch (error) {
            console.log(error);
            setResponse(error.data.message);

        }
    }


    return (
        <div className="h-screen overflow-x-hidden" id="book">
            <Nav />
            <div className="flex flex-col sm:flex-row items-center justify-evenly sm:justify-start sm:ml-12 h-[80%] w-screen">
                <div className="flex items-center sm:items-center  sm:justify-center justify-center w-1/2 h-72 m-2 sm:h-[90%] sm:mr-20">
                    <img src={cycle.image} alt="Home" />

                </div>
                <div className="flex flex-col items-start justify-center text-xs sm:text-lg">
                    <div className="mb-5 mr-4">
                        <h1 className="text-base font-semibold">Pickup</h1>
                        <p>{currentDate.toDateString()}</p>
                    </div>
                    <div>
                        <div className="flex justify-between w-[100%] sm:w-[85%] sm:text-base">
                            <p>choose hours</p>
                            <p>Rs {cycle.rate}/h</p>
                        </div>
                        <button className="h-[35px] sm:h-[50px] w-[100%] sm:w-[100%] lg:w-[95%]  text-black flex justify-center bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg mb-5">
                            <div className="flex items-center justify-between w-[95%]">
                                <h1 className="text-4xl" onClick={() => {
                                    handleSub(cycle.rate)
                                }}>-</h1>
                                <h2>{hour}h</h2>
                                <h2 className="text-3xl mb-1" onClick={() => {
                                    handleAdd(cycle.rate)
                                }}>+</h2>
                            </div>
                        </button>
                        <div>
                            <div className="flex items-center justify-between mt-2 sm:mt-8">
                                <h1>TOTAL</h1>
                                <h1>Rs {rate}</h1>
                            </div>
                            <p>------------------------------</p>
                        </div>
                        <Link
                            href={isSuccessful ? '/user/rides' : '#'} // Conditional link based on isSuccessful state
                            className="h-[50px] w-[125%] sm:w-[100%] lg:w-[150%] text-black flex justify-center bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg mt-7"
                            onClick={async () => {
                                if (!isSuccessful) {
                                    await createRide();
                                }
                            }}
                        >
                            <div><p className="p-2">BOOK NOW</p></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute w-[30vw] ml-[69%] bottom-0 right-0 mb-4 mr-4">
                {response && (
                    <Alert className="bg-yellow-500 flex items-center justify-center h-full">
                        <Terminal className="h-8 w-4 mr-2" />
                        <div>
                            <AlertTitle>{response}</AlertTitle>
                            {/* <AlertDescription>
                    Wait till the signup request is accepted
                </AlertDescription> */}
                        </div>
                    </Alert>
                )}
            </div>

        </div>
    )
}

