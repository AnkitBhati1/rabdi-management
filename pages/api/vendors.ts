import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { getAuth } from '@clerk/nextjs/server'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ message: 'Unauthorized' })

  if (req.method === "POST")
  {
    const { name, vendorType } = req.body;

    if (!name || !vendorType)
    {
      return res.status(400).json({ error: "Missing name or vendor type" });
    }

    try
    {
      const vendor = await prisma.vendor.create({
        data: { name, vendorType, clerkUserId: userId },
      });
      return res.status(201).json(vendor);
    } catch (error)
    {
      console.error(error);
      return res.status(500).json({ error: "Failed to create vendor" });
    }
  }

  if (req.method === "GET")
  {
    const { type } = req.query;

    try
    {
      const vendors = await prisma.vendor.findMany({
        where: type ? { vendorType: String(type), clerkUserId: userId } : {clerkUserId: userId},
        select: {
          id: true,
          name: true,
          vendorType: true,

        },
      });

      return res.status(200).json(vendors);
    } catch (error)
    {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch vendors" });
    }
  }

  if (req.method === "PUT")
  {
    const { id, name, vendorType } = req.body;

    if (!id || (!name && !vendorType))
    {
      return res.status(400).json({ error: "Missing vendor ID or fields to update" });
    }

    try
    {
      const updatedVendor = await prisma.vendor.update({
        where: { id, clerkUserId: userId, },
        data: { name, vendorType },

      });

      return res.status(200).json(updatedVendor);
    } catch (error)
    {
      return res.status(500).json({ error: "Failed to update vendor" });
    }
  }

  if (req.method === "DELETE")
  {
    const { id } = req.body;

    if (!id)
    {
      return res.status(400).json({ error: "Missing vendor ID" });
    }

    try
    {
      await prisma.vendor.delete({
        where: { id, clerkUserId: userId, },
      });

      return res.status(200).json({ message: "Vendor deleted successfully" });
    } catch (error)
    {
      return res.status(500).json({ error: "Failed to delete vendor" });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
