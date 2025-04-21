import { VideoData } from '../types';

const API_URL = import.meta.env.VITE_SUPABASE_URL 
  ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/tiktok-downloader`
  : 'http://localhost:54321/functions/v1/tiktok-downloader';

export const fetchTikTokVideo = async (url: string): Promise<VideoData> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(import.meta.env.VITE_SUPABASE_ANON_KEY && {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        })
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch video data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    throw error;
  }
};

// For development without actual API connection
export const mockFetchTikTokVideo = async (url: string): Promise<VideoData> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (!url.includes('tiktok.com')) {
    throw new Error('Invalid TikTok URL');
  }
  
  return {
    videoId: Math.random().toString(36).substring(2, 10),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    downloadUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    previewUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  };
};