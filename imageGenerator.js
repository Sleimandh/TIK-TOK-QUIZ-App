/**
 * Image Generator for the TikTok Quiz Generator
 * Finds or creates relevant images for questions
 */

/**
 * Generate or find an image for a quiz question
 * Uses Unsplash API (free tier) for image search
 * 
 * @param {string} query - Search query for the image
 * @param {Object} options - Configuration options
 * @param {boolean} options.aiGenerated - Whether to use AI generation (falls back to search if unavailable)
 * @param {string} options.orientation - Image orientation ('landscape', 'portrait', 'squarish')
 * @returns {Promise<Object>} - Promise resolving to image data
 */
async function getImageForQuestion(query, options = {}) {
  // Default options
  const defaultOptions = {
    aiGenerated: false,
    orientation: 'landscape'
  };
  
  // Merge with provided options
  const settings = {...defaultOptions, ...options};
  
  // In a real implementation, this would make an API call to Unsplash
  // For now, we'll return a placeholder function that would be executed in the browser
  
  return {
    execute: async function(query, options) {
      // This is a placeholder for the actual API call
      console.log(`Searching for image: "${query}" with options:`, options);
      
      // Return a placeholder image object
      return {
        url: `https://source.unsplash.com/random?${encodeURIComponent(query)}`,
        alt: query,
        credit: 'Unsplash',
        width: 1200,
        height: 800
      };
    }
  };
}

/**
 * Get images for all questions in a quiz
 * @param {Array} questions - Array of question objects
 * @param {Object} options - Configuration options
 * @returns {Promise<Array>} - Promise resolving to array of image objects
 */
async function getImagesForQuiz(questions, options = {}) {
  const images = [];
  
  for (const question of questions) {
    const image = await getImageForQuestion(question.imageQuery, options);
    
    images.push({
      questionNumber: question.questionNumber,
      image: image
    });
  }
  
  return images;
}

/**
 * Get a background image for the quiz
 * @param {string} topic - Quiz topic
 * @param {Object} options - Configuration options
 * @returns {Promise<Object>} - Promise resolving to image data
 */
async function getBackgroundImage(topic, options = {}) {
  // Map topics to appropriate background search terms
  const backgroundQueries = {
    anatomy: 'medical abstract background',
    biology: 'biology cells microscope background',
    pharmacology: 'pharmacy medicine laboratory background',
    history: 'ancient parchment background',
    geography: 'world map atlas background',
    science: 'science laboratory cosmos background',
    movies: 'cinema film reel background',
    music: 'music notes instruments background',
    random: 'colorful abstract background'
  };
  
  const query = backgroundQueries[topic] || backgroundQueries.random;
  return getImageForQuestion(query, {
    ...options,
    orientation: 'portrait' // TikTok videos are portrait orientation
  });
}

module.exports = {
  getImageForQuestion,
  getImagesForQuiz,
  getBackgroundImage
};
