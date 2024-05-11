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


export default function cycles() {


    
    useEffect(() => {
        getCycles();
    }, []);
    
    
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
        } catch (error) {
            console.error(error);
        }
    }

    const [cycles, setCycles] = useState<Cycles[]>([]);
    // const cycles = [
    //     { id: "1", name: "Avon", img: "", rate: "10" },
    //     { id: "2", name: "Hero", img: "", rate: "15" },
    //     { id: "3", name: "Hercules", img: "", rate: "20" },
    //     { id: "4", name: "Avon", img: "", rate: "10" },
    //     { id: "5", name: "Hero", img: "", rate: "15" },
    //     { id: "6", name: "Hercules", img: "", rate: "20" },
    //     { id: "7", name: "Avon", img: "", rate: "10" },
    //     { id: "8", name: "Hero", img: "", rate: "15" },
    //     { id: "9", name: "Hercules", img: "", rate: "20" },
    // ]

    return (
        <div className="overflow-hidden">
            <Nav />
            <div className="p-7" id="heading">
                <h1 className="text-3xl pt-3 pb-7">Cycles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16" id="cycles">
                    {cycles.map(({ id, name, rate, image }) => (

                        <Link href="/user/cycles/[dynamicId]" as={`/user/cycles/${id}`}>
                            <Card className="border-0 w-[264px] sm:w-auto" key={name}>
                                <CardHeader className="border-2 border-black mb-2 text-center p-2">
                                    <p>{name}</p>
                                </CardHeader>
                                <img src={image} alt="" className="h-[17.7rem] sm:h-[18rem] md:h-[22rem]" />
                                {/* <CardContent className="h-[17.7rem] sm:h-[18rem] md:h-[22rem]" id="cycle" > */}
                                {/* </CardContent> */}
                                <CardFooter className="bg-yellow-500 p-2 items-center justify-center">
                                    <p>${rate}/hour</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    )
}