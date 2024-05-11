import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";

interface Response {
    response: string;
    message: string;
}

const AddCycles = ({getCycles}) => {
    const { register, handleSubmit } = useForm();
    const [response, setResponse] = useState<Response | null>(null);
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = async () => {
        try {
            // e.preventDefault();
            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("rate", rate);
            formdata.append("image", image);

            const response = await axios.post(
                "http://localhost:3001/api/v1/cycles/",
                formdata
            );
            console.log("Success:", response.data);
            getCycles();
            // Handle successful response (optional)
            
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                setResponse(error.response.data);
            } else {
                setResponse({ message: "An error occurred. Please try again later." });
            }
        }
    };

    return (
        <div>
            <Card className="rounded-xl">
                <CardHeader>
                    <CardTitle>Add Cycle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {response && (
                        <div className="text-red-500 font-bold">{response.message}</div>
                    )}
                    <div className="space-y-1 mt-6">
                        <Label htmlFor="name">Name</Label>
                        {/* <Input id="name" placeholder="name" {...register("name", { required: true })} /> */}
                        <input
                            className="form-control w-25"
                            type="text"
                            placeholder="Description"
                            onChange={(evt) => setName(evt.target.value)}
                            required
                        />

                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="rate">Rate</Label>
                        {/* <Input id="rate" placeholder="rate" {...register("rate", { required: true })} /> */}
                        <input
                            className="form-control w-25"
                            type="text"
                            onChange={(evt) => setRate(evt.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="image">Image</Label>
                        {/* <Input
                            id="image"
                            type="file"
                            placeholder="image"
                            {...register("image", { required: true })}
                        /> */}
                        <input
                            className="form-control w-25"
                            type="file"
                            placeholder="file"
                            onChange={(evt) => setImage(evt.target.files[0])}
                            required
                        />
                    </div>

                </CardContent>
                <CardFooter>
                    <Button type="submit" className="bg-green-400 rounded-xl ml-[45%] " onClick={handleSubmit(onSubmit)}>
                        Add
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AddCycles;
