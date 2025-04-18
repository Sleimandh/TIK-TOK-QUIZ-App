/**
 * Background Selector for the TikTok Quiz Generator
 * Chooses appropriate background visuals for quiz videos
 */

// Collection of background options
const backgrounds = {
  // Atmospheric backgrounds for different topics
  topics: {
    anatomy: [
      { id: 'anatomy-bg-1', name: 'Medical Lab', path: '/backgrounds/anatomy-1.mp4' },
      { id: 'anatomy-bg-2', name: 'Human Body', path: '/backgrounds/anatomy-2.mp4' },
      { id: 'anatomy-bg-3', name: 'Medical Abstract', path: '/backgrounds/anatomy-3.mp4' }
    ],
    biology: [
      { id: 'biology-bg-1', name: 'Cell Structure', path: '/backgrounds/biology-1.mp4' },
      { id: 'biology-bg-2', name: 'Nature', path: '/backgrounds/biology-2.mp4' },
      { id: 'biology-bg-3', name: 'Microscopic', path: '/backgrounds/biology-3.mp4' }
    ],
    pharmacology: [
      { id: 'pharm-bg-1', name: 'Laboratory', path: '/backgrounds/pharm-1.mp4' },
      { id: 'pharm-bg-2', name: 'Medicine', path: '/backgrounds/pharm-2.mp4' },
      { id: 'pharm-bg-3', name: 'Pharmacy', path: '/backgrounds/pharm-3.mp4' }
    ],
    history: [
      { id: 'history-bg-1', name: 'Ancient', path: '/backgrounds/history-1.mp4' },
      { id: 'history-bg-2', name: 'Timeline', path: '/backgrounds/history-2.mp4' },
      { id: 'history-bg-3', name: 'Parchment', path: '/backgrounds/history-3.mp4' }
    ],
    geography: [
      { id: 'geo-bg-1', name: 'World Map', path: '/backgrounds/geo-1.mp4' },
      { id: 'geo-bg-2', name: 'Landscapes', path: '/backgrounds/geo-2.mp4' },
      { id: 'geo-bg-3', name: 'Globe', path: '/backgrounds/geo-3.mp4' }
    ],
    science: [
      { id: 'science-bg-1', name: 'Laboratory', path: '/backgrounds/science-1.mp4' },
      { id: 'science-bg-2', name: 'Space', path: '/backgrounds/science-2.mp4' },
      { id: 'science-bg-3', name: 'Elements', path: '/backgrounds/science-3.mp4' }
    ],
    movies: [
      { id: 'movies-bg-1', name: 'Cinema', path: '/backgrounds/movies-1.mp4' },
      { id: 'movies-bg-2', name: 'Film Reel', path: '/backgrounds/movies-2.mp4' },
      { id: 'movies-bg-3', name: 'Hollywood', path: '/backgrounds/movies-3.mp4' }
    ],
    music: [
      { id: 'music-bg-1', name: 'Notes', path: '/backgrounds/music-1.mp4' },
      { id: 'music-bg-2', name: 'Instruments', path: '/backgrounds/music-2.mp4' },
      { id: 'music-bg-3', name: 'Concert', path: '/backgrounds/music-3.mp4' }
    ]
  },
  
  // Generic backgrounds for any topic
  generic: [
    { id: 'generic-bg-1', name: 'Abstract 1', path: '/backgrounds/generic-1.mp4' },
    { id: 'generic-bg-2', name: 'Abstract 2', path: '/backgrounds/generic-2.mp4' },
    { id: 'generic-bg-3', name: 'Particles', path: '/backgrounds/generic-3.mp4' },
    { id: 'generic-bg-4', name: 'Gradient', path: '/backgrounds/generic-4.mp4' },
    { id: 'generic-bg-5', name: 'Bokeh', path: '/backgrounds/generic-5.mp4' }
  ],
  
  // Placeholder URLs for free stock video sites
  placeholders: {
    anatomy: 'https://pixabay.com/videos/search/medical%20background/',
    biology: 'https://pixabay.com/videos/search/nature%20background/',
    pharmacology: 'https://pixabay.com/videos/search/laboratory%20background/',
    history: 'https://pixabay.com/videos/search/ancient%20background/',
    geography: 'https://pixabay.com/videos/search/world%20map%20background/',
    science: 'https://pixabay.com/videos/search/science%20background/',
    movies: 'https://pixabay.com/videos/search/cinema%20background/',
    music: 'https://pixabay.com/videos/search/music%20background/',
    generic: 'https://pixabay.com/videos/search/abstract%20background/'
  }
};

/**
 * Get background options for a specific topic
 * @param {string} topic - Topic to get backgrounds for
 * @returns {Array} Array of background options
 */
function getBackgroundsForTopic(topic) {
  // Return topic-specific backgrounds if available, otherwise generic
  return backgrounds.topics[topic] || backgrounds.generic;
}

/**
 * Get a random background for a topic
 * @param {string} topic - Topic to get background for
 * @returns {Object} Background object
 */
function getRandomBackground(topic) {
  const options = getBackgroundsForTopic(topic);
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/**
 * Get placeholder URL for finding free background videos
 * @param {string} topic - Topic to get placeholder for
 * @returns {string} URL for finding free background videos
 */
function getBackgroundPlaceholderUrl(topic) {
  return backgrounds.placeholders[topic] || backgrounds.placeholders.generic;
}

/**
 * Get all available backgrounds
 * @returns {Object} All background options
 */
function getAllBackgrounds() {
  return backgrounds;
}

module.exports = {
  getBackgroundsForTopic,
  getRandomBackground,
  getBackgroundPlaceholderUrl,
  getAllBackgrounds
};
