import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const templates = [
  {
    id: 'quiz-standard',
    name: 'Standard Quiz',
    description: 'Classic multiple-choice quiz format with 4-5 questions',
    image: '/images/template-standard.jpg',
    preview: 'https://example.com/preview-standard'
  },
  {
    id: 'quiz-rapid',
    name: 'Rapid Fire',
    description: 'Fast-paced quiz with shorter time per question',
    image: '/images/template-rapid.jpg',
    preview: 'https://example.com/preview-rapid'
  },
  {
    id: 'quiz-trivia',
    name: 'Trivia Challenge',
    description: 'General knowledge trivia with animated transitions',
    image: '/images/template-trivia.jpg',
    preview: 'https://example.com/preview-trivia'
  }
];

export default function TemplateSelector({ onSelect, selected }) {
  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <div 
          key={template.id}
          className={`border rounded-lg p-4 cursor-pointer transition-all ${
            selected === template.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
          }`}
          onClick={() => onSelect(template.id)}
        >
          <div className="flex items-start">
            <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 flex-shrink-0">
              {/* Placeholder for template thumbnail */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{template.name}</h3>
                {selected === template.id && (
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">{template.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
