// pages/api/rabdi.ts
import { PrismaClient } from '../../generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ message: 'Unauthorized' })

    if (req.method === 'POST')
    {
        const { date, quantity, amountDeposited, vendorId } = req.body;

        try
        {
            // Check if entry exists for same date and vendor
            const existing = await prisma.rabdi.findFirst({
                where: {
                    date: new Date(date),
                    vendorId: parseInt(vendorId),
                    clerkUserId: userId,
                },

            });

            if (existing)
            {
                return res.status(400).json({ error: 'Same data exists, kindly update.' });
            }

            const rabdi = await prisma.rabdi.create({
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    vendorId: parseInt(vendorId),
                    amountDeposited: parseFloat(amountDeposited),
                    clerkUserId: userId,
                },
            });

            res.status(201).json(rabdi);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to save rabdi entry.' });
        }
    } else if (req.method === 'PUT')
    {
        const { id, date, quantity, amountDeposited, vendorId } = req.body;

        try
        {
            const updated = await prisma.rabdi.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    amountDeposited: parseFloat(amountDeposited),
                    vendorId: parseInt(vendorId),
                    clerkUserId: userId,
                },
            });

            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to update rabdi entry.' });
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
                prisma.rabdi.findMany({
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
                prisma.rabdi.count({
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
            res.status(500).json({ error: 'Failed to fetch rabdi entries.' });
        }
    }
    else if (req.method === 'PATCH')
    {
        const { id, date, amountDeposited, quantity } = req.body;
        try
        {
            const updated = await prisma.rabdi.update({
                where: { id },
                data: {
                    date: new Date(date),
                    quantity: Number(quantity),
                    amountDeposited: parseFloat(amountDeposited),

                },
            });

            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch rabdi entries.' });
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
            await prisma.rabdi.delete({ where: { id, clerkUserId: userId, } });
            res.status(204).end();
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete rabdi entry.' });
        }
    } else
    {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
