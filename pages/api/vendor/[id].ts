// pages/api/vendor/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ message: 'Unauthorized' })

  if (req.method !== 'GET')
  {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try
  {
    const vendor = await prisma.vendor.findUnique({
      where: { id: Number(id), clerkUserId: userId },
      include: {
        rabdis: true,
        milks: true,
        gases: true,
      },
    });

    if (!vendor)
    {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    res.status(200).json(vendor);
  } catch (error)
  {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
