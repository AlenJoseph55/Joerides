'use client';
import Nav from "../components/Nav"
import { BrowserRouter as Router} from 'react-router-dom';
import Link from "next/link"

export default function Home() {
  return (
    <Router>
      <div className="h-screen" id="home">
        <div>
          <Nav />
        </div>
        <div className="flex flex-col justify-center items-center h-[90%] sm:h-[85%] sm:text-xl text-white w-screen text-lg">
          <div className="flex flex-col justify-center items-center w-screen h-[100%] text-center" id="text">
            <h1 className="text-md sm:text-4xl">Fuel you campus adventures with Joerides!</h1>
            <h2>For MBCCET Students</h2>
            <Link href="/user/cycles" className="h-[50px] w-[35%] sm:w-[35%] lg:w-[25%]  text-black flex justify-center m-3 bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg">
            <div ><p className="p-2">BOOK YOUR RIDE NOW</p></div>
            </Link>
          </div>
        </div>
      </div>
   </Router>  
  );
}