import React from 'react';
import { ClockIcon, RefreshCwIcon, TrashIcon } from 'lucide-react';
import { DownloadHistoryItem, VideoData } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

interface DownloadHistoryProps {
  history: DownloadHistoryItem[];
  setVideoData: React.Dispatch<React.SetStateAction<VideoData | null>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const DownloadHistory: React.FC<DownloadHistoryProps> = ({ 
  history, 
  setVideoData, 
  setUrl 
}) => {
  const [_, setStoredHistory] = useLocalStorage<DownloadHistoryItem[]>('tiktok-download-history', []);

  const handleReload = (item: DownloadHistoryItem) => {
    setUrl(item.url);
    // In a real app, you'd re-fetch this from the API
    setVideoData({
      videoId: item.videoId,
      videoUrl: item.previewUrl,
      downloadUrl: item.previewUrl,
      previewUrl: item.previewUrl
    });
  };

  const handleClearHistory = () => {
    setStoredHistory([]);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString();
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <ClockIcon className="w-5 h-5 mr-2 text-[#25F4EE]" />
          Recent Downloads
        </h3>
        <button 
          onClick={handleClearHistory}
          className="text-gray-400 hover:text-[#FE2C55] transition-colors duration-200 flex items-center"
        >
          <TrashIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">Clear History</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {history.map((item) => (
          <div 
            key={item.id}
            className="bg-gray-800 rounded-lg p-3 flex items-center transition-all duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 rounded overflow-hidden bg-gray-700 flex-shrink-0">
              {item.previewUrl && (
                <video 
                  src={item.previewUrl}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="ml-3 flex-grow overflow-hidden">
              <p className="text-white text-sm font-medium truncate">{item.url}</p>
              <p className="text-gray-400 text-xs">{formatDate(item.timestamp)}</p>
            </div>
            
            <button
              onClick={() => handleReload(item)}
              className="ml-2 p-2 text-gray-400 hover:text-[#25F4EE] rounded-full hover:bg-gray-600 transition-colors duration-200"
              title="Reload this video"
            >
              <RefreshCwIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadHistory;