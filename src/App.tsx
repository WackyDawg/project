import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DownloadForm from './components/DownloadForm';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermUse from './pages/TermUse';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main>
        <Routes>
          {/* Main Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <section className="py-12 md:py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] bg-clip-text text-transparent">
                        TikTok Video Downloader
                      </h1>
                      <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Download TikTok videos without watermark in HD quality
                      </p>
                    </div>
                    <DownloadForm />
                  </div>
                </section>

                <HowItWorks />

                <section className="py-12 md:py-16 bg-gray-950">
                  <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Ready to download your favorite TikTok videos?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                      Our tool makes it easy to save and share content from TikTok without watermarks.
                      Start downloading today!
                    </p>
                    <a 
                      href="#" 
                      className="inline-block bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                    >
                      Try It Now
                    </a>
                  </div>
                </section>
              </>
            }
          />

          {/* Privacy Policy Page */}
          <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/en/term-of-use" element={<TermUse />} />
          <Route path="/en/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
