import React from 'react';
import { VideoData } from '../types';
import { AlertCircleIcon } from 'lucide-react';

interface VideoPreviewProps {
  videoData: VideoData | null;
  isLoading: boolean;
  error: string | null;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoData, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-800 rounded-lg animate-pulse">
        <div className="w-12 h-12 border-4 border-gray-600 border-t-[#25F4EE] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-400">Loading video preview...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-800 rounded-lg">
        <AlertCircleIcon className="w-12 h-12 text-[#FE2C55]" />
        <p className="mt-4 text-gray-200">{error}</p>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-800 rounded-lg">
        <p className="text-gray-400">Paste a TikTok URL to preview the video</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden bg-gray-800">
      <video 
        className="w-full max-h-[480px] object-contain"
        controls
        autoPlay
        loop
        muted
        playsInline
        src={videoData.previewUrl}
      >
        Your browser does not support the video tag.
      </video>
      <div className="p-4">
        <p className="text-white text-sm truncate">
          Video ID: {videoData.videoId}
        </p>
      </div>
    </div>
  );
};

export default VideoPreview;