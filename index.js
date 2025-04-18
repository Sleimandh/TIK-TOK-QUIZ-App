import { useState } from 'react';
import Head from 'next/head';
import { PlusIcon, CogIcon, VideoCameraIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TemplateSelector from '../components/TemplateSelector';
import SettingsPanel from '../components/SettingsPanel';
import VideoPreview from '../components/VideoPreview';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [settings, setSettings] = useState({
    topic: 'random',
    questionCount: 4,
    voiceStyle: 'male-energetic',
    useAiImages: true,
    backgroundMusic: 'default',
  });
  const [generatingVideo, setGeneratingVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleSettingsChange = (newSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  const handleGenerateVideo = async () => {
    setGeneratingVideo(true);
    // This would be replaced with actual API call to generate video
    setTimeout(() => {
      setVideoUrl('/sample-video.mp4');
      setGeneratingVideo(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>TikTok Quiz Generator</title>
        <meta name="description" content="Automated TikTok quiz video generator" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">TikTok Quiz Video Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Template Selection */}
          <div className="quiz-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <PlusIcon className="h-6 w-6 mr-2 text-primary" />
              Choose Template
            </h2>
            <TemplateSelector onSelect={handleTemplateSelect} selected={selectedTemplate} />
          </div>

          {/* Middle Column - Settings */}
          <div className="quiz-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CogIcon className="h-6 w-6 mr-2 text-primary" />
              Configure Settings
            </h2>
            <SettingsPanel settings={settings} onChange={handleSettingsChange} />
          </div>

          {/* Right Column - Preview & Export */}
          <div className="quiz-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <VideoCameraIcon className="h-6 w-6 mr-2 text-primary" />
              Preview & Export
            </h2>
            <VideoPreview videoUrl={videoUrl} isGenerating={generatingVideo} />
            
            <div className="mt-4 space-y-4">
              <button 
                onClick={handleGenerateVideo}
                disabled={generatingVideo || !selectedTemplate}
                className={`tiktok-button w-full ${(!selectedTemplate || generatingVideo) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {generatingVideo ? 'Generating...' : 'Generate Video'}
              </button>
              
              {videoUrl && (
                <button className="tiktok-button-secondary w-full flex justify-center items-center">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download Video
                </button>
              )}
              
              {videoUrl && (
                <button className="bg-black hover:bg-black/90 text-white font-bold py-2 px-4 rounded-full w-full flex justify-center items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  Upload to TikTok
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
