import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, GithubIcon, TwitterIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4">TikTok Downloader</h3>
            <p className="text-gray-400 text-sm">
              A simple tool to download your favorite TikTok videos. Save and share content easily.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200 text-sm"
                >
                  How It Works
                </a> 
                {/* 👆 This one is OK because it's an anchor on the same page */}
              </li>
              <li>
                <Link 
                  to="/en/privacy-policy" 
                  className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/en/term-of-use" 
                  className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200 text-sm"
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link 
                  to="/en/contact-us" 
                  className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/wackydawg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://twitter.com/JNwadinobi26328" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25F4EE] transition-colors duration-200"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2018-{currentYear} TikTok Downloader. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <HeartIcon className="text-[#FE2C55] mx-1" size={16} /> By WackyDawg
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
