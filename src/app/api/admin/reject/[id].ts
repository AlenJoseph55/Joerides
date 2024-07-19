// pages/api/reject/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        try {
            const { id } = req.query;
            const existingUser = await prisma.users.findUnique({
                where: {
                    id: parseInt(id as string),
                },
            });
            if (!existingUser) {
                return res.status(404).json({ message: "User not found" });
            }
            const rejectedUser = await prisma.users.delete({
                where: {
                    id: parseInt(id as string),
                },
            });
            return res.status(200).json({ message: "User Rejected" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}