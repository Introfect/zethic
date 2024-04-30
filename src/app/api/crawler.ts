// pages/api/crawl.js
import crawlWebsite from '../../lib/crawler';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const data = await crawlWebsite();
      if (data) {
        return new Response(JSON.stringify(data),{status:200})

      } else {
        return new Response("Failed to crawl Website",{status:500});
      }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });

    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
