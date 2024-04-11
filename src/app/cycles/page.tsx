import Nav from "../../components/Nav"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function cycles() {
    return (
        <div>
            <Nav />
            <div className="p-7" id="heading">
                <h1 className="text-3xl pt-3 pb-7">Cycles</h1>
                <div className="flex items-center justify-evenly" id="cycles">

                    <Card className="sm:w-[25%]">
                        <CardHeader className="border-2 border-black mt-2 mb-2 text-center p-2">
                            <p>Avon</p>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="bg-yellow-500 p-2 items-center justify-center">
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                    <Card className="sm:w-[25%]">
                        <CardHeader className="border-2 border-black mt-2 mb-2 text-center p-2">
                            <p>Avon</p>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="bg-yellow-500 p-2 items-center justify-center">
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                    <Card className="sm:w-[25%]">
                        <CardHeader className="border-2 border-black mt-2 mb-2 text-center p-2">
                            <p>Avon</p>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="bg-yellow-500 p-2 items-center justify-center">
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>

    )
}