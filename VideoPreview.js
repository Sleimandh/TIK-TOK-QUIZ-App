import { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

export default function VideoPreview({ videoUrl, isGenerating }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Reset playing state when video URL changes
  useEffect(() => {
    setIsPlaying(false);
  }, [videoUrl]);

  const togglePlay = () => {
    if (videoUrl) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full">
      {isGenerating ? (
        <div className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
          <div className="text-center p-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Generating your video...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a minute</p>
          </div>
        </div>
      ) : videoUrl ? (
        <div className="relative">
          <video 
            src={videoUrl}
            className="w-full rounded-lg aspect-[9/16] bg-black object-contain"
            playsInline
            loop
            muted={false}
            controls={false}
            autoPlay={isPlaying}
          />
          <button 
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 rounded-lg"
          >
            {isPlaying ? (
              <PauseIcon className="h-16 w-16 text-white opacity-80" />
            ) : (
              <PlayIcon className="h-16 w-16 text-white opacity-80" />
            )}
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
          <div className="text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="mt-4 text-gray-600">No video generated yet</p>
            <p className="text-sm text-gray-500 mt-2">Select a template and configure settings</p>
          </div>
        </div>
      )}
      
      {videoUrl && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>00:00</span>
            <span>00:35</span>
          </div>
          <div className="mt-1 h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-primary rounded-full" style={{ width: isPlaying ? '100%' : '0%', transition: 'width 35s linear' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
