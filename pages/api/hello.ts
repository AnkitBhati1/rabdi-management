// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from '@clerk/nextjs/server'

type Data = {
  name?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ message: 'Unauthorized' })
  res.status(200).json({ name: "John Doe" });
}
