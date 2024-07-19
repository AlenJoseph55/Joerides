"use client"
import Nav from "../../../components/Nav"
import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"



export default function cycles() {



    useEffect(() => {
        getCycles();
    }, []);
    const [response, setResponse] = useState<Response>();
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


    const getCycles = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/cycles/`);
            console.log(response.data);
            setCycles(response.data);
            setResponse(response.data.message)
        } catch (error) {
            console.error(error);
            setResponse(error.data.message)
        }
    }

    const [cycles, setCycles] = useState<Cycles[]>([]);
    return (
        <div className="overflow-hidden">
            <Nav />
            <div className="p-7" id="heading">
                <h1 className="text-3xl pt-3 pb-7">Cycles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16" id="cycles">
                    {cycles.map(({ id, name, rate, image }) => (

                        <Link href="/user/cycles/[dynamicId]" as={`/user/cycles/${id}`} key={name}>
                            <Card className="border-0 w-[264px] sm:w-auto" >
                                <CardHeader className="border-2 border-black mb-2 text-center p-2">
                                    <p>{name}</p>
                                </CardHeader>
                                <img src={image} alt="" className="h-[17.7rem] sm:h-[18rem] md:h-[22rem]" />
                                <CardFooter className="bg-yellow-500 p-2 items-center justify-center">
                                    <p>${rate}/hour</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-[30vw] ml-[69%]">
                {response && <Alert className="bg-yellow-500">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>{response.message}</AlertTitle>
                    {/* <AlertDescription>
                            Wait till the signup request is accepted
                        </AlertDescription> */}
                </Alert>
                }
            </div>
        </div>

    )
}