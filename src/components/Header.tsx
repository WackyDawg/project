import React from 'react';
import { BookIcon as TiktokIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] p-4 md:p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TiktokIcon className="h-8 w-8 text-white" />
          <h1 className="text-xl md:text-2xl font-bold text-white">TikDown Downloader</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a 
                href="/" 
                className="text-white hover:text-black transition-colors duration-200 text-sm md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#how-it-works" 
                className="text-white hover:text-black transition-colors duration-200 text-sm md:text-base"
              >
                How It Works
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;