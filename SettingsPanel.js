import { useState } from 'react';
import { AdjustmentsHorizontalIcon, SpeakerWaveIcon, PhotoIcon, MusicalNoteIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function SettingsPanel({ settings, onChange }) {
  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Topic Selection */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <QuestionMarkCircleIcon className="h-5 w-5 mr-2 text-primary" />
          Quiz Topic
        </label>
        <select 
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={settings.topic}
          onChange={(e) => handleChange('topic', e.target.value)}
        >
          <option value="random">Random (All Topics)</option>
          <option value="anatomy">Anatomy</option>
          <option value="biology">Biology</option>
          <option value="pharmacology">Pharmacology</option>
          <option value="history">History</option>
          <option value="geography">Geography</option>
          <option value="science">Science</option>
          <option value="movies">Movies & TV</option>
          <option value="music">Music</option>
        </select>
      </div>

      {/* Question Count */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-primary" />
          Number of Questions
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="3"
            max="6"
            value={settings.questionCount}
            onChange={(e) => handleChange('questionCount', parseInt(e.target.value))}
            className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
            {settings.questionCount}
          </span>
        </div>
      </div>

      {/* Voice Style */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <SpeakerWaveIcon className="h-5 w-5 mr-2 text-primary" />
          Voice Style
        </label>
        <select 
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={settings.voiceStyle}
          onChange={(e) => handleChange('voiceStyle', e.target.value)}
        >
          <option value="male-energetic">Male - Energetic</option>
          <option value="male-calm">Male - Calm</option>
          <option value="female-energetic">Female - Energetic</option>
          <option value="female-calm">Female - Calm</option>
        </select>
      </div>

      {/* Image Source */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <PhotoIcon className="h-5 w-5 mr-2 text-primary" />
          Image Source
        </label>
        <div className="flex space-x-2">
          <button
            className={`flex-1 py-2 px-3 rounded-md border ${settings.useAiImages ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300'}`}
            onClick={() => handleChange('useAiImages', true)}
          >
            AI Generated
          </button>
          <button
            className={`flex-1 py-2 px-3 rounded-md border ${!settings.useAiImages ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300'}`}
            onClick={() => handleChange('useAiImages', false)}
          >
            Upload My Own
          </button>
        </div>
        {!settings.useAiImages && (
          <div className="mt-2">
            <button className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center text-sm text-gray-500 hover:border-primary hover:text-primary transition-colors">
              Click to upload images
            </button>
          </div>
        )}
      </div>

      {/* Background Music */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <MusicalNoteIcon className="h-5 w-5 mr-2 text-primary" />
          Background Music
        </label>
        <select 
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={settings.backgroundMusic}
          onChange={(e) => handleChange('backgroundMusic', e.target.value)}
        >
          <option value="default">Default</option>
          <option value="upbeat">Upbeat</option>
          <option value="dramatic">Dramatic</option>
          <option value="suspense">Suspense</option>
          <option value="fun">Fun</option>
          <option value="none">No Music</option>
        </select>
      </div>
    </div>
  );
}
