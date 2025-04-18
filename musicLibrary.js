/**
 * Music Library for the TikTok Quiz Generator
 * Background music selection and management
 */

// Collection of background music tracks
const musicLibrary = {
  // Background music tracks by mood
  tracks: {
    default: [
      { id: 'default-1', name: 'Quiz Standard', path: '/music/default-1.mp3', duration: 35 },
      { id: 'default-2', name: 'Quiz Classic', path: '/music/default-2.mp3', duration: 35 },
      { id: 'default-3', name: 'Quiz Modern', path: '/music/default-3.mp3', duration: 35 }
    ],
    upbeat: [
      { id: 'upbeat-1', name: 'Energetic Pop', path: '/music/upbeat-1.mp3', duration: 35 },
      { id: 'upbeat-2', name: 'Happy Beats', path: '/music/upbeat-2.mp3', duration: 35 },
      { id: 'upbeat-3', name: 'Positive Vibes', path: '/music/upbeat-3.mp3', duration: 35 }
    ],
    dramatic: [
      { id: 'dramatic-1', name: 'Intense Moment', path: '/music/dramatic-1.mp3', duration: 35 },
      { id: 'dramatic-2', name: 'Suspenseful', path: '/music/dramatic-2.mp3', duration: 35 },
      { id: 'dramatic-3', name: 'Epic Quiz', path: '/music/dramatic-3.mp3', duration: 35 }
    ],
    suspense: [
      { id: 'suspense-1', name: 'Mystery Quiz', path: '/music/suspense-1.mp3', duration: 35 },
      { id: 'suspense-2', name: 'Tense Moments', path: '/music/suspense-2.mp3', duration: 35 },
      { id: 'suspense-3', name: 'Clock Ticking', path: '/music/suspense-3.mp3', duration: 35 }
    ],
    fun: [
      { id: 'fun-1', name: 'Playful Tune', path: '/music/fun-1.mp3', duration: 35 },
      { id: 'fun-2', name: 'Light Hearted', path: '/music/fun-2.mp3', duration: 35 },
      { id: 'fun-3', name: 'Quirky Quiz', path: '/music/fun-3.mp3', duration: 35 }
    ]
  },
  
  // Topic-specific music recommendations
  topicRecommendations: {
    anatomy: ['dramatic', 'suspense'],
    biology: ['default', 'upbeat'],
    pharmacology: ['suspense', 'dramatic'],
    history: ['dramatic', 'default'],
    geography: ['upbeat', 'fun'],
    science: ['dramatic', 'suspense'],
    movies: ['upbeat', 'fun'],
    music: ['fun', 'upbeat']
  },
  
  // Placeholder URLs for free music
  placeholders: {
    default: 'https://pixabay.com/music/search/quiz%20background/',
    upbeat: 'https://pixabay.com/music/search/upbeat%20background/',
    dramatic: 'https://pixabay.com/music/search/dramatic%20background/',
    suspense: 'https://pixabay.com/music/search/suspense%20background/',
    fun: 'https://pixabay.com/music/search/fun%20background/'
  }
};

/**
 * Get music tracks for a specific mood
 * @param {string} mood - Mood to get tracks for ('default', 'upbeat', 'dramatic', 'suspense', 'fun')
 * @returns {Array} Array of music track objects
 */
function getMusicByMood(mood = 'default') {
  return musicLibrary.tracks[mood] || musicLibrary.tracks.default;
}

/**
 * Get a random music track for a specific mood
 * @param {string} mood - Mood to get track for
 * @returns {Object} Music track object
 */
function getRandomMusicTrack(mood = 'default') {
  const tracks = getMusicByMood(mood);
  const randomIndex = Math.floor(Math.random() * tracks.length);
  return tracks[randomIndex];
}

/**
 * Get recommended music moods for a specific topic
 * @param {string} topic - Topic to get recommendations for
 * @returns {Array} Array of recommended mood strings
 */
function getRecommendedMoodsForTopic(topic) {
  return musicLibrary.topicRecommendations[topic] || ['default', 'upbeat'];
}

/**
 * Get a recommended music track for a specific topic
 * @param {string} topic - Topic to get recommendation for
 * @returns {Object} Recommended music track object
 */
function getRecommendedMusicForTopic(topic) {
  const recommendedMoods = getRecommendedMoodsForTopic(topic);
  const selectedMood = recommendedMoods[0]; // Use the first recommendation
  return getRandomMusicTrack(selectedMood);
}

/**
 * Get placeholder URL for finding free music
 * @param {string} mood - Mood to get placeholder for
 * @returns {string} URL for finding free music
 */
function getMusicPlaceholderUrl(mood) {
  return musicLibrary.placeholders[mood] || musicLibrary.placeholders.default;
}

/**
 * Get all music tracks
 * @returns {Object} All music tracks
 */
function getAllMusicTracks() {
  return musicLibrary.tracks;
}

module.exports = {
  getMusicByMood,
  getRandomMusicTrack,
  getRecommendedMoodsForTopic,
  getRecommendedMusicForTopic,
  getMusicPlaceholderUrl,
  getAllMusicTracks
};
