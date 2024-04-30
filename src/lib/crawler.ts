// lib/crawler.ts
import axios from 'axios';
import cheerio from 'cheerio';
import Error from 'next/error';

interface CrawledData {
  title: string;
  content: string;
}

const crawlWebsite = async (): Promise<CrawledData | null> => {
  try {
    const response = await axios.get('https://en.wikipedia.org/wiki/Main_Page');
    const $ = cheerio.load(response.data);

    // Extracting some basic content
    const pageTitle = $('title').text();
    const mainContent = $('#mp-upper').text(); // Example: Extracting the main content

    return { title: pageTitle, content: mainContent };
  } catch (error:any) {
    console.error('Error crawling website:', error.message);
    return null;
  }
};

export default crawlWebsite;
