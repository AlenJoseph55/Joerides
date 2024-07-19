// pages/api/signin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const user = await prisma.users.findFirst({
                where: {
                    email: email,
                },
            });
            if (user) {
                // Perform password comparison (after hashing)
                if (user.password === password) {
                    // User authentication successful
                    if (user.role === "user") {
                        // Redirect user based on their role
                        res.status(200).json({ message: "Login successful", redirect: '/', role: 'user' });
                    } else if(user.role === "admin") {
                        res.status(200).json({ message: "Admin Login successful", redirect: '/admin/requests', role: 'admin' });
                    }
                } else {
                    // Incorrect password
                    res.status(400).json({ message: "Invalid email or password" });
                }
            } else {
                // User not found
                res.status(400).json({ message: "Invalid email or password" });
            }
        } catch (error) {
            // Internal server error
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
};