"use client"
import { useState } from "react"
import Nav from "../../../components/Nav"
import Link from 'next/link';

export default function book() {
    const currentDate = new Date();
    const [hour, sethour] = useState(0.0);
    const [rate, setrate] = useState(0)
    const handleAdd = () => {
        sethour((prevValue) => prevValue + 0.5);
        setrate((prevRate) => prevRate + 5);
    };
    const handleSub = () => {
        sethour((prevValue) => Math.max(prevValue - 0.5, 0));
        setrate((prevRate) => Math.max(prevRate - 5, 0));
    };


    return (
        <div className="h-screen overflow-x-hidden" id="book">
            <Nav />
            <div className="flex flex-col sm:flex-row items-center justify-evenly sm:justify-start sm:ml-12 h-[80%] w-screen">
                <div className="flex items-center sm:items-center  sm:justify-center justify-center w-1/2 h-72 m-2 sm:h-[90%] sm:mr-20">
                    <div className="w-[50%] h-[80%] sm:h-[100%]" id="cyclet">
                        {/* <img src="./src/assets/cycles.png" alt="Home"/> */}

                    </div>
                </div>
                <div className="flex flex-col items-start justify-center text-xs sm:text-lg">
                    <div className="mb-5 mr-4">
                        <h1 className="text-base font-semibold">Pickup</h1>
                        <p>{currentDate.toDateString()}</p>
                    </div>
                    <div>
                        <div className="flex justify-between w-[100%] sm:w-[85%] sm:text-base">
                            <p>choose hours</p>
                            <p>Rs 5/h</p>
                        </div>
                        <button className="h-[35px] sm:h-[50px] w-[100%] sm:w-[100%] lg:w-[95%]  text-black flex justify-center bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg mb-5">
                            <div className="flex items-center justify-between w-[95%]">
                                <h1 className="text-4xl" onClick={() => {
                                    handleSub()
                                }}>-</h1>
                                <h2>{hour}h</h2>
                                <h2 className="text-3xl mb-1" onClick={() => {
                                    handleAdd()
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
                        <Link href="/rides" className="h-[50px] w-[125%] sm:w-[100%] lg:w-[150%]  text-black flex justify-center bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg mt-7">
            <div ><p className="p-2">BOOK NOW</p></div>
            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}