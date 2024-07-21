"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Nav from "../components/Nav1"
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { useRouter } from "next/navigation"
import cookies from "js-cookie"

export default function login() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [response, setResponse] = useState<Response>();

    interface Response {
        response: string;
        message: string;
    }

    const onLogin = async (data: any) => {
        try {
            const login = await axios.post(`http://localhost:3001/api/v1/login`, data);
            console.log(login.data.role);
            localStorage.setItem('user', JSON.stringify(login.data));
            setResponse(login.data);
            cookies.set("auth", login.data.role)
            if (login.data.role === "user")
                router.push('/user/dashboard');
            if (login.data.role === "admin")
                router.push('/admin/requests');
        } catch (error) {
            console.error(error);
            if (error.response) {
                setResponse(error.response.data);
            } else {
                setResponse({ message: "An error occurred. Please try again later." });
            }
        }
    };
    const onSignup = async (data: any) => {
        try {
            const response = await axios.post(`http://localhost:3001/api/v1/signup`, data);
            console.log(response.status);
            // if (response.status === 201) {
            setResponse(response.data);
            // }
        } catch (error) {
            console.error(error);
            if (error) {
                setResponse(error.response.data);
            } else {
                // If there's no response from the server (possibly a network error), display a generic error message
                setResponse({ message: "An error occurred. Please try again later." });
            }
        }
    };


    return (
        <div className="h-screen">
            <div>
                <Nav />
            </div>
            <div className="h-[80%]">
                <div className="flex items-center justify-center m-2 h-[87%]">
                    <Tabs defaultValue="login" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2" id="TabsList">
                            <TabsTrigger value="login" className="rounded-3xl">Login</TabsTrigger>
                            <TabsTrigger value="signup" className="rounded-3xl">Signup</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Card className="rounded-xl">
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Email</Label>
                                        <Input id="current" type="email" {...register("email", { required: true })} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="pass">Password</Label>
                                        <Input id="pass" type="password" {...register("password", { required: true })} />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="bg-yellow-500 rounded-3xl" onClick={handleSubmit(onLogin)} >Login</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="signup">
                            <Card className="rounded-xl">
                                <CardHeader>
                                    <CardTitle>Signup</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" {...register("name", { required: true })} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="current1">Email</Label>
                                        <Input id="current1" type="email" {...register("email", { required: true })} />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="bg-yellow-500 rounded-3xl" onClick={handleSubmit(onSignup)} >Submit</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
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
        </div>
    )
}