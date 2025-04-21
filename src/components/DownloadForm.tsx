import React, { useState } from 'react';
import { SearchIcon, LinkIcon, XIcon } from 'lucide-react';
import { mockFetchTikTokVideo } from '../services/api';
import { VideoData } from '../types';
import VideoPreview from './VideoPreview';
import DownloadButton from './DownloadButton';
import DownloadHistory from './DownloadHistory';
import useLocalStorage from '../hooks/useLocalStorage';
import { DownloadHistoryItem } from '../types';

const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [history, setHistory] = useLocalStorage<DownloadHistoryItem[]>('tiktok-download-history', []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a TikTok URL');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Using mock function for demo purposes
      // In production, use the real API: fetchTikTokVideo(url)
      const data = await mockFetchTikTokVideo(url);
      setVideoData(data);
      
      // Add to history
      const newHistoryItem: DownloadHistoryItem = {
        id: Date.now().toString(),
        url,
        timestamp: new Date(),
        videoId: data.videoId,
        previewUrl: data.previewUrl
      };
      
      setHistory([newHistoryItem, ...history.slice(0, 9)]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch video');
      setVideoData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearInput = () => {
    setUrl('');
    setError(null);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:shadow-[0_0_15px_rgba(37,244,238,0.3)]">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Download TikTok Videos
          </h2>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste TikTok URL here..."
                className="w-full px-4 py-3 pr-24 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#25F4EE] focus:border-transparent"
              />
              
              {url && (
                <button
                  type="button"
                  onClick={handleClearInput}
                  className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              )}
              
              <button
                type="button"
                onClick={handlePaste}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#25F4EE]"
                title="Paste from clipboard"
              >
                <LinkIcon className="w-5 h-5" />
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-0 top-1/2 -translate-y-1/2 mr-1 p-2 text-gray-400 hover:text-[#25F4EE]"
                title="Download"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
          
          <VideoPreview 
            videoData={videoData} 
            isLoading={isLoading} 
            error={error} 
          />
          
          {videoData && !isLoading && !error && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              <DownloadButton 
                videoData={videoData} 
                quality="HD" 
                disabled={isLoading || !!error} 
              />
              <DownloadButton 
                videoData={videoData} 
                quality="SD" 
                disabled={isLoading || !!error} 
              />
            </div>
          )}
        </div>
      </div>
      
      {history.length > 0 && (
        <div className="mt-8">
          <DownloadHistory history={history} setVideoData={setVideoData} setUrl={setUrl} />
        </div>
      )}
    </div>
  );
};

export default DownloadForm;