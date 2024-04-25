import Nav from '../../components/Nav';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function rides() {
    const activerides = [
        { name: "Hercules", time: "12:00 am - 2:00 pm" }
    ]

    const pastrides = [
        { name: "Hercules", time: "12:00 am - 2:00 pm" },
        { name: "Hero", time: "12:00 am - 2:00 pm" },
        { name: "Hercules", time: "12:00 am - 2:00 pm" },
        { name: "Hero", time: "12:00 am - 2:00 pm" },
    ]
    return (
        <div className='overflow-hidden'>
            <div>
                <Nav />
            </div>
            <div>
                <div>
                    <h1 className='p-5 text-3xl'>Active Rides</h1>
                    {activerides.map(({ name, time }) => (
                        <Card className='flex items-center m-4 mt-2 rounded-xl justify-between'>
                            <CardHeader>
                                <CardTitle>image</CardTitle>
                                {/* <CardDescription>Card Description</CardDescription> */}
                            </CardHeader>
                            <CardContent className='flex flex-col items-start p-0 justify-between text-right'>
                                <CardTitle>{name}</CardTitle>
                                <p>{time}</p>
                            </CardContent>
                            <CardFooter className='p-2'>
                                <p>Cancel Button</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div>
                    <h1 className='p-5 text-3xl'>Past Rides</h1>
                    {pastrides.map(({ name, time }) => (
                        <Card className='flex items-center rounded-xl justify-between m-4 mt-2'>
                            <CardHeader>
                                <CardTitle>image</CardTitle>
                                {/* <CardDescription>Card Description</CardDescription> */}
                            </CardHeader>
                            <CardContent className='p-0'>
                                <CardTitle>{name}</CardTitle>
                                <p>{time}</p>
                            </CardContent>
                            <CardFooter>
                                {/* <p>Action Button</p> */}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
