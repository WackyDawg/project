import { corsHeaders } from "../_shared/cors.ts";

interface TikTokResponse {
  aweme_id: string;
  statusCode: number;
  video: {
    play_addr: {
      url_list: string[];
    };
    download_addr: {
      url_list: string[];
    };
  };
}

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    const { url } = await req.json();
    
    if (!url || !url.includes("tiktok.com")) {
      return new Response(
        JSON.stringify({ error: "Invalid TikTok URL" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Here we would normally make a request to TikTok's API or use a TikTok downloader service
    // For demo purposes, we'll return mock data
    // In a real implementation, you would use a third-party API or create your own TikTok scraper
    
    // Mock response for demonstration
    const mockResponse: TikTokResponse = {
      aweme_id: "123456789",
      statusCode: 200,
      video: {
        play_addr: {
          url_list: [
            "https://example.com/video-hd.mp4"
          ]
        },
        download_addr: {
          url_list: [
            "https://example.com/video-sd.mp4"
          ]
        }
      }
    };

    return new Response(
      JSON.stringify({
        success: true,
        videoId: mockResponse.aweme_id,
        videoUrl: mockResponse.video.play_addr.url_list[0],
        downloadUrl: mockResponse.video.download_addr.url_list[0],
        previewUrl: mockResponse.video.play_addr.url_list[0],
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: "Failed to process TikTok URL", 
        details: error.message 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});