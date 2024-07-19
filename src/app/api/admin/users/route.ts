// src/app/api/admin/users/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const users = await prisma.users.findMany({
            where: {
                status: 'approve',
            },
        });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'An error occurred while fetching users' }, { status: 500 });
    }
}