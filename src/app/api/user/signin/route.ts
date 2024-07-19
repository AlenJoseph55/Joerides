// pages/api/signin.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

const prisma = new PrismaClient();

const userSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1)
})

export async function POST(request: NextRequest) {
        try {
            const body = await request.json();
           const validation = userSchema.safeParse(body);
           if(!validation.success){
            return NextResponse.json(validation.error.errors,{status: 400})
           }
            const user = await prisma.users.findFirst({
                where: {
                    email: body.email,
                },
            });
            if (user) {
                // Perform password comparison (after hashing)
                if (user.password === body.password) {
                    // User authentication successful
                    if (user.role === "user") {
                        // Redirect user based on their role
                        NextResponse.json({ message: "Login successful", redirect: '/', role: 'user', status:200 });
                    } else if(user.role === "admin") {
                        NextResponse.json({ message: "Admin Login successful", redirect: '/admin/requests', role: 'admin', status:200 });
                    }
                } else {
                    // Incorrect password
                    NextResponse.json({ message: "Invalid email or password", status:400 });
                }
            } else {
                // User not found
                NextResponse.json({ message: "Invalid email or password", status:404 });
            }
        } catch (error) {
            // Internal server error
            console.error(error);
            NextResponse.json({ message: "Internal Server Error",status:500 });
        }
};