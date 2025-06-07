import { PrismaClient } from '../../generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ message: 'Unauthorized' })

    if (req.method !== 'POST')
    {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { vendorId, startDate, endDate, rabdiRate, milkFatRate, milkWithoutFatRate } = req.body;
    const finalrabdirate = rabdiRate ?? '250'
    const finalmilkFatRate = milkFatRate ?? '44'
    const finalmilkWithoutFatRate = milkWithoutFatRate ?? '34'

    if (!vendorId || !startDate || !endDate)
    {
        return res.status(400).json({ error: 'Missing vendorId, startDate, or endDate' });
    }

    try
    {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const [rabdiEntries, milkEntries, milkFat, milkWithoutFat, gasEntries] = await Promise.all([
            prisma.rabdi.findMany({
                where: {
                    vendorId: parseInt(vendorId),
                    date: { gte: start, lte: end },
                },
                include: { vendor: true },
            }),
            prisma.milk.findMany({
                where: {
                    vendorId: parseInt(vendorId),
                    date: { gte: start, lte: end },
                },
                include: { vendor: true },
            }),
            prisma.milk.findMany({
                where: {
                    vendorId: parseInt(vendorId),
                    date: { gte: start, lte: end },
                    milkType: "fat"
                },
                include: { vendor: true },
            }),
            prisma.milk.findMany({
                where: {
                    vendorId: parseInt(vendorId),
                    date: { gte: start, lte: end },
                    milkType: "withoutFat"
                },
                include: { vendor: true },
            }),
            prisma.gas.findMany({
                where: {
                    vendorId: parseInt(vendorId),
                    date: { gte: start, lte: end },
                },
                include: { vendor: true },
            }),
        ]);

        // Rabdi
        const totalRabdi = rabdiEntries.reduce((sum, entry) => sum + entry.quantity, 0);
        const rabdiBill = totalRabdi * finalrabdirate
        const rabdiAmountDeposited = rabdiEntries.reduce((sum, entry) => sum + entry.amountDeposited, 0);
        const rabdiRemainingAmount = rabdiBill - rabdiAmountDeposited

        // Milk Fat
        const totalMilkFat = milkFat.reduce((sum, entry) => sum + entry.quantity, 0);
        const milkFatBill = totalMilkFat * finalmilkFatRate

        // Milk Without Fat
        const totalMilkWithoutFat = milkWithoutFat.reduce((sum, entry) => sum + entry.quantity, 0);
        const milkWithoutFatBill = totalMilkWithoutFat * finalmilkWithoutFatRate

        // Total Milk
        const totalMilk = totalMilkFat + totalMilkWithoutFat
        const totalMilkBill = milkFatBill + milkWithoutFatBill
        const milkAmountDeposited = milkEntries.reduce((sum, entry) => sum + entry.amountDeposited, 0);
        const milkAmountRemaining = totalMilkBill - milkAmountDeposited

        // Gas
        const totalGas = gasEntries.reduce((sum, entry) => sum + entry.quantity, 0);
        const gasBill = gasEntries.reduce((sum, entry) => sum + (entry.quantity * entry.rate), 0);

        const bill = await prisma.bill.create({
            data: {
                startDate: start,
                endDate: end,
                totalRabdi,
                rabdiBill,
                totalMilk,
                totalMilkFat,
                totalMilkWithoutFat,
                milkFatBill,
                milkWithoutFatBill,
                totalMilkBill,
                totalGas,
                gasBill,
                clerkUserId: userId,
            },
        });
        let vendorType = null;
        if (rabdiEntries.length > 0)
        {
            vendorType = rabdiEntries[0].vendor.vendorType;
        } else if (milkEntries.length > 0)
        {
            vendorType = milkEntries[0].vendor.vendorType;
        } else if (gasEntries.length > 0)
        {
            vendorType = gasEntries[0].vendor.vendorType;
        }


        const updated_bill = {
            startDate: start,
            endDate: end,
            totalRabdi,
            rabdiBill,
            rabdiAmountDeposited,
            rabdiRemainingAmount,
            totalMilk,
            totalMilkFat,
            totalMilkWithoutFat,
            milkFatBill,
            milkWithoutFatBill,
            totalMilkBill,
            milkAmountDeposited,
            milkAmountRemaining,
            totalGas,
            gasBill,
            clerkUserId: userId,
            vendorType,
        }


        return res.status(200).json({
            updated_bill,
            entries: {
                rabdi: rabdiEntries,
                milk: milkEntries,
                gas: gasEntries
            }
        });
    } catch (error)
    {
        console.error('Error generating bill:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
