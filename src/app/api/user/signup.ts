// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { name, email } = req.body;
            const existingUser = await prisma.users.findFirst({
                where: {
                    email: email,
                },
            });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists" });
            }
            const newUser = await prisma.users.create({
                data: {
                    name: name,
                    email: email,
                    status: 'pending',
                },
            });
            return res.status(201).json({ message: "SignUp successful" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}