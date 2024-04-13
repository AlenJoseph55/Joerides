import Nav from "../../../components/Nav"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function book() {
    return (
        <div className="h-screen" id="book">
            <Nav />
            <div className="flex items-center justify-center h-[80%] w-screen">
                <div className="flex items-center justify-center w-1/2">
                    <h1>image</h1>
                </div>
                <div className="w-1/2 flex flex-col items-start justify-center">
                    <div>
                    <h1>pickup</h1>
                    <p>Date and Time</p>
                    </div>
                    <div>
                        <p className="m-1">Select number of hours</p>
                        <button className="h-[50px] w-[35%] sm:w-[50%] lg:w-[150%]  text-black flex justify-center bg-yellow-500 rounded-3xl text-center items-center text-xs sm:text-lg">
                            1h
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}