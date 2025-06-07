// pages/api/milk.ts
import { PrismaClient } from '../../generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ message: 'Unauthorized' })

    if (req.method === 'POST')
    {
        const { date, quantity, vendorId, milkType, amountDeposited } = req.body;

        try
        {
            // Check if entry exists for same date and milkType
            const existing = await prisma.milk.findFirst({
                where: {
                    vendorId: parseInt(vendorId),
                    date: new Date(date),
                    milkType: milkType,
                    clerkUserId: userId,
                },
            });

            if (existing)
            {
                return res.status(400).json({ error: 'Same data exists, kindly update.' });
            }
            const milk = await prisma.milk.create({
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    vendorId: parseInt(vendorId),
                    milkType,
                    amountDeposited: parseFloat(amountDeposited),
                    clerkUserId: userId,
                },
            });
            res.status(201).json(milk);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to save milk entry.' });
        }
    } else if (req.method === 'PUT')
    {
        // Update existing entry by id
        const { id, date, quantity, vendorId, milkType, amountDeposited } = req.body;

        try
        {
            const updated = await prisma.milk.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    vendorId: parseInt(vendorId),
                    milkType,
                    amountDeposited: parseFloat(amountDeposited),
                    clerkUserId: userId,
                },
            });
            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to update milk entry.' });
        }
    } else if (req.method === 'GET')
    {
        const vendorId = req.query.vendorId ? parseInt(req.query.vendorId as string) : undefined;
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        try
        {
            // Get total count and entries in a single transaction
            const [entries, total] = await prisma.$transaction([
                prisma.milk.findMany({
                    where: {
                        clerkUserId: userId,
                        ...(vendorId && { vendorId }),
                    },
                    include: {
                        vendor: true,
                    },
                    orderBy: {
                        date: 'desc',
                    },
                    skip,
                    take: limit,
                }),
                prisma.milk.count({
                    where: {
                        clerkUserId: userId,
                        ...(vendorId && { vendorId }),
                    }
                })
            ]);

            // Return paginated response
            res.status(200).json({
                entries,
                total,
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                hasMore: skip + entries.length < total
            });
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch milk entries.' });
        }
    } else if (req.method === 'PATCH')
    {
        const { id, date, quantity, milkType, amountDeposited } = req.body;
        try 
        {
            const updated = await prisma.milk.update({
                where: { id },
                data: {
                    date: new Date(date),
                    quantity: Number(quantity),
                    ...(milkType && { milkType }),
                    amountDeposited: parseFloat(amountDeposited),
                },
            });

            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch milk entries.' });
        }
    }
    else if (req.method === 'DELETE')
    {
        const id = parseInt(req.query.id as string);
        if (isNaN(id))
        {
            return res.status(400).json({ error: 'Invalid id.' });
        }
        try
        {
            await prisma.milk.delete({ where: { id, clerkUserId: userId, } });
            res.status(204).end();
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete milk entry.' });
        }
    } else
    {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
