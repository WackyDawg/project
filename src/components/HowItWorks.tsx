import React from 'react';
import { LinkIcon, DownloadIcon, PlayCircleIcon } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Copy the TikTok Link',
      description: 'Find a TikTok video you want to download and copy its URL from the share button.',
      icon: <LinkIcon className="h-8 w-8 text-[#25F4EE]" />,
    },
    {
      id: 2,
      title: 'Paste and Download',
      description: 'Paste the link in our downloader, preview the video, and download it with one click.',
      icon: <PlayCircleIcon className="h-8 w-8 text-[#25F4EE]" />,
    },
    {
      id: 3,
      title: 'Save Your Video',
      description: 'Choose your preferred quality (HD or SD) and save the video to your device.',
      icon: <DownloadIcon className="h-8 w-8 text-[#25F4EE]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Download your favorite TikTok videos in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-gray-700 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
              <div className="mt-4 text-[#FE2C55] font-bold">
                Step {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;