'use client'
import connectDB from '../database';
import { useState } from 'react';
import axios from 'axios';
import Error from "next/error";


interface CrawledData {
  title: string;
  content: string;
}
export default function Home() {
  connectDB();
  const [crawledData, setCrawledData] = useState<CrawledData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCrawl = async () => {
    setLoading(true);
    try {
      const response = await axios.get<CrawledData>('/api/crawl');
      setCrawledData(response.data);
    } catch (error:any) {
      console.error('Error crawling website:', error.message);
    }
    setLoading(false);
  };
  return (
    <div>
    <h1>Crawler Demo</h1>
    <button onClick={handleCrawl} disabled={loading}>
      {loading ? 'Crawling...' : 'Crawl Wikipedia Homepage'}
    </button>
    {crawledData && (
      <div>
        <h2>{crawledData.title}</h2>
        <p>{crawledData.content}</p>
      </div>
    )}
  </div>
  );
}
