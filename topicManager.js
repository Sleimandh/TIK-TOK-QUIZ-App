/**
 * Topic Manager for the TikTok Quiz Generator
 * Handles categorization and management of quiz topics
 */

// Define available topics with metadata
const topics = {
  random: {
    name: 'Random (All Topics)',
    description: 'Questions from all available topics',
    icon: '🎲'
  },
  anatomy: {
    name: 'Anatomy',
    description: 'Questions about human body structure',
    icon: '🧠'
  },
  biology: {
    name: 'Biology',
    description: 'Questions about living organisms',
    icon: '🧬'
  },
  pharmacology: {
    name: 'Pharmacology',
    description: 'Questions about drugs and medications',
    icon: '💊'
  },
  history: {
    name: 'History',
    description: 'Questions about historical events and figures',
    icon: '📜'
  },
  geography: {
    name: 'Geography',
    description: 'Questions about countries, cities, and landmarks',
    icon: '🌎'
  },
  science: {
    name: 'Science',
    description: 'Questions about scientific discoveries and concepts',
    icon: '🔬'
  },
  movies: {
    name: 'Movies & TV',
    description: 'Questions about films, shows, and entertainment',
    icon: '🎬'
  },
  music: {
    name: 'Music',
    description: 'Questions about songs, artists, and music history',
    icon: '🎵'
  }
};

/**
 * Get all available topics
 * @returns {Object} All topics with their metadata
 */
function getAllTopics() {
  return topics;
}

/**
 * Get a specific topic by ID
 * @param {string} topicId - The ID of the topic to retrieve
 * @returns {Object|null} The topic object or null if not found
 */
function getTopic(topicId) {
  return topics[topicId] || null;
}

/**
 * Get a random topic (excluding 'random' itself)
 * @returns {string} Random topic ID
 */
function getRandomTopic() {
  const topicKeys = Object.keys(topics).filter(key => key !== 'random');
  const randomIndex = Math.floor(Math.random() * topicKeys.length);
  return topicKeys[randomIndex];
}

/**
 * Get related topics based on a given topic
 * @param {string} topicId - The ID of the base topic
 * @param {number} count - Number of related topics to return
 * @returns {Array} Array of related topic IDs
 */
function getRelatedTopics(topicId, count = 3) {
  // Simple implementation - just get random topics
  // In a real system, this would use a more sophisticated algorithm
  const topicKeys = Object.keys(topics).filter(key => key !== 'random' && key !== topicId);
  const shuffled = topicKeys.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Check if a topic exists
 * @param {string} topicId - The ID of the topic to check
 * @returns {boolean} Whether the topic exists
 */
function topicExists(topicId) {
  return topicId in topics;
}

module.exports = {
  getAllTopics,
  getTopic,
  getRandomTopic,
  getRelatedTopics,
  topicExists
};
