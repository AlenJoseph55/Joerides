import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Nav from "../../components/Nav1"

export default function login() {
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
                                {/* <CardDescription>
                                    Make changes to your account here. Click save when you're done.
                                </CardDescription> */}
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="name" />
                                    {/* defaultValue="Pedro Duarte" */}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input id="username" type="password"/>
                                    {/* defaultValue="@peduarte"  */}
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
                                {/* <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription> */}
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Email</Label>
                                    <Input id="current" type="email" />
                                </div>
                                {/* <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div> */}
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-yellow-500 rounded-3xl">Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}