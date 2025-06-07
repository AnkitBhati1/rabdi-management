// pages/api/gas.ts
import { PrismaClient } from '../../generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ message: 'Unauthorized' })

    if (req.method === 'POST')
    {
        const { date, quantity, rate, vendorId } = req.body;

        try
        {
            // Optional: Add uniqueness check here if required

            const gas = await prisma.gas.create({
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    rate: parseFloat(rate),
                    vendorId: parseInt(vendorId),
                    clerkUserId: userId,
                },
            });
            res.status(201).json(gas);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to save gas entry.' });
        }

    } else if (req.method === 'PUT')
    {
        const { id, date, quantity, rate, vendorId } = req.body;

        try
        {
            const updated = await prisma.gas.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    date: new Date(date),
                    quantity: parseFloat(quantity),
                    rate: parseFloat(rate),
                    vendorId: parseInt(vendorId),
                    clerkUserId: userId,
                },
            });
            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to update gas entry.' });
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
                prisma.gas.findMany({
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
                prisma.gas.count({
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
            res.status(500).json({ error: 'Failed to fetch gas entries.' });
        }
    } else if (req.method === 'PATCH')
    {
        const { id, date, quantity, rate } = req.body;
        try
        {
            const updated = await prisma.gas.update({
                where: { id },
                data: {
                    date: new Date(date),
                    quantity: Number(quantity),
                    rate: Number(rate),
                },
            });

            res.status(200).json(updated);
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch gas entries.' });
        }
    } else if (req.method === 'DELETE')
    {
        const id = parseInt(req.query.id as string);
        if (isNaN(id))
        {
            return res.status(400).json({ error: 'Invalid id.' });
        }

        try
        {
            await prisma.gas.delete({ where: { id, clerkUserId: userId } });
            res.status(204).end();
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete gas entry.' });
        }

    } else
    {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
