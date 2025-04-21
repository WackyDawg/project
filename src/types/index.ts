export interface VideoData {
  videoId: string;
  videoUrl: string;
  downloadUrl: string;
  previewUrl: string;
}

export interface DownloadHistoryItem {
  id: string;
  url: string;
  timestamp: Date;
  videoId: string;
  previewUrl: string;
}

export type DownloadQuality = "HD" | "SD";