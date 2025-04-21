import React, { useState } from 'react';
import { DownloadIcon, CheckIcon, LoaderIcon } from 'lucide-react';
import { VideoData, DownloadQuality } from '../types';

interface DownloadButtonProps {
  videoData: VideoData | null;
  quality: DownloadQuality;
  disabled: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  videoData, 
  quality, 
  disabled 
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    if (!videoData || disabled) return;
    
    try {
      setIsDownloading(true);
      
      // Simulate download delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would create a download link and click it
      const link = document.createElement('a');
      link.href = videoData.downloadUrl;
      link.download = `tiktok-video-${videoData.videoId}-${quality.toLowerCase()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonStyles = () => {
    if (disabled) {
      return "bg-gray-600 cursor-not-allowed";
    }
    if (downloadComplete) {
      return "bg-green-500 hover:bg-green-600";
    }
    return quality === "HD" 
      ? "bg-[#25F4EE] hover:bg-[#20d8d2]" 
      : "bg-[#FE2C55] hover:bg-[#e61a46]";
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled || isDownloading}
      className={`flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ${getButtonStyles()} w-full`}
    >
      {isDownloading ? (
        <>
          <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
          Downloading...
        </>
      ) : downloadComplete ? (
        <>
          <CheckIcon className="w-5 h-5 mr-2" />
          Downloaded
        </>
      ) : (
        <>
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download {quality}
        </>
      )}
    </button>
  );
};

export default DownloadButton;