"use client"
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
import Nav from "../../components/Nav1"
import axios from "axios";
import { useForm } from 'react-hook-form';

export default function login() {

    const { register, handleSubmit } = useForm();

    const onSubmit = async(data: any) => {
        try {
            const response = await axios.post(`http://localhost:3001/api/v1/signup`, data);
            console.log(response);
        }catch (error) {
       console.error(error);
        }
    };

    return (
        <div className="h-screen">
            <div>
                <Nav />
            </div>
            <div className="flex items-center justify-center m-2 h-[80%]">
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
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input id="username" type="password"/>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-yellow-500 rounded-3xl">Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card  className="rounded-xl">
                            <CardHeader>
                                <CardTitle>Signup</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                <Label htmlFor="current">Name</Label>
                                    <Input id="current" {...register("name",{required: true})}/>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">Email</Label>
                                    <Input id="current" type="email" {...register("email", {required: true})}/>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="bg-yellow-500 rounded-3xl" onClick={handleSubmit(onSubmit)} >Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}