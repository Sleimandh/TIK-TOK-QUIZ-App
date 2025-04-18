/**
 * Answer Generator for the TikTok Quiz Generator
 * Generates plausible multiple-choice options for quiz questions
 */

/**
 * Generate plausible incorrect answers for a given correct answer
 * @param {string} correctAnswer - The correct answer
 * @param {string} topic - The topic of the question
 * @param {number} count - Number of incorrect answers to generate
 * @returns {Array} Array of plausible incorrect answers
 */
function generateIncorrectAnswers(correctAnswer, topic, count = 3) {
  // In a real implementation, this would use AI or a more sophisticated algorithm
  // to generate plausible incorrect answers based on the correct answer and topic
  
  // For now, we'll return a predefined set of incorrect answers based on the topic
  const topicAnswers = getTopicSpecificAnswers(topic);
  
  // Filter out the correct answer and any duplicates
  const filteredAnswers = topicAnswers.filter(answer => 
    answer.toLowerCase() !== correctAnswer.toLowerCase()
  );
  
  // Shuffle and return the requested number of answers
  const shuffled = filteredAnswers.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, filteredAnswers.length));
}

/**
 * Get a set of predefined answers for a specific topic
 * @param {string} topic - The topic to get answers for
 * @returns {Array} Array of potential answers for the topic
 */
function getTopicSpecificAnswers(topic) {
  const answersByTopic = {
    anatomy: [
      'Heart', 'Lungs', 'Liver', 'Kidneys', 'Brain', 'Stomach', 'Intestines',
      'Pancreas', 'Spleen', 'Gallbladder', 'Skin', 'Bones', 'Muscles',
      'Cerebellum', 'Medulla', 'Frontal lobe', 'Hippocampus', 'Femur', 'Tibia',
      'Humerus', 'Spine', '2', '3', '4', '5', '6'
    ],
    biology: [
      'Photosynthesis', 'Respiration', 'Fermentation', 'Digestion', 'Mitochondria',
      'Nucleus', 'Ribosome', 'Golgi apparatus', 'Mitosis', 'Meiosis', 'Binary fission',
      'Budding', 'Platelet', 'Erythrocyte', 'Leukocyte', 'Nephron', 'Gene',
      'Chromosome', 'DNA', 'Nucleus'
    ],
    pharmacology: [
      'NSAIDs', 'Antibiotics', 'Antihistamines', 'Opioids', 'Acetylsalicylic acid',
      'Ibuprofen', 'Paracetamol', 'Naproxen', 'Lisinopril', 'Amoxicillin',
      'Fluoxetine', 'Albuterol', 'Hormone', 'Antibiotic', 'Steroid', 'Analgesic',
      'Intravenous', 'Oral', 'Topical', 'Subcutaneous'
    ],
    history: [
      'Rome', 'Paris', 'Athens', 'Barcelona', 'George Washington', 'Thomas Jefferson',
      'Abraham Lincoln', 'John Adams', 'Lighthouse of Alexandria', 'Hanging Gardens of Babylon',
      'Colossus of Rhodes', 'Great Pyramid of Giza', '1939', '1942', '1945', '1950',
      'Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Vincent van Gogh'
    ],
    geography: [
      'Canberra', 'Sydney', 'Melbourne', 'Perth', 'Nile', 'Amazon', 'Mississippi',
      'Yangtze', 'Japan', 'China', 'Thailand', 'South Korea', 'Antarctic Desert',
      'Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Ural Mountains', 'Alps',
      'Himalayas', 'Andes'
    ],
    science: [
      'Au', 'Ag', 'Fe', 'Pb', '299,792,458 m/s', '150,000,000 m/s', '199,792,458 m/s',
      '300,000,000 m/s', 'Saturn', 'Jupiter', 'Uranus', 'Neptune', 'Diamond',
      'Titanium', 'Platinum', 'Quartz', 'Albert Einstein', 'Isaac Newton',
      'Stephen Hawking', 'Niels Bohr'
    ],
    movies: [
      'James Cameron', 'Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese',
      'Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo',
      'Parasite', '1917', 'Joker', 'Once Upon a Time in Hollywood', 'Red', 'Blue',
      'Green', 'Purple', 'Forrest Gump', 'Saving Private Ryan', 'Cast Away', 'The Green Mile'
    ],
    music: [
      'Michael Jackson', 'Elvis Presley', 'Prince', 'Justin Timberlake', 'Queen',
      'The Beatles', 'Led Zeppelin', 'Pink Floyd', '4', '5', '6', '8',
      'Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach',
      'Franz Schubert', '1950s', '1960s', '1970s', '1980s'
    ]
  };
  
  // If topic doesn't exist, return a general set of answers
  if (!answersByTopic[topic]) {
    return [
      ...answersByTopic.history,
      ...answersByTopic.science,
      ...answersByTopic.geography
    ];
  }
  
  return answersByTopic[topic];
}

/**
 * Format multiple choice options with letters (A, B, C, D)
 * @param {Array} options - Array of answer options
 * @returns {Array} Array of formatted options with letters
 */
function formatMultipleChoiceOptions(options) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  return options.map((option, index) => {
    return {
      letter: letters[index],
      text: option
    };
  });
}

/**
 * Validate if a set of options are diverse enough
 * @param {Array} options - Array of answer options
 * @returns {boolean} Whether the options are diverse enough
 */
function validateOptionsDiversity(options) {
  // Check if options are too similar (e.g., all numbers or very short answers)
  const allNumbers = options.every(option => !isNaN(option));
  const allShort = options.every(option => option.length < 3);
  
  // If all options are numbers or short answers, check if they're too similar
  if (allNumbers || allShort) {
    // For numbers, check if they're too close together
    if (allNumbers) {
      const numbers = options.map(Number);
      const max = Math.max(...numbers);
      const min = Math.min(...numbers);
      return (max - min) > 2; // Ensure there's some spread in the numbers
    }
    
    // For short answers, check if they're too similar
    if (allShort) {
      const uniqueChars = new Set(options.join(''));
      return uniqueChars.size > options.length; // Ensure there's some diversity in characters
    }
  }
  
  return true;
}

module.exports = {
  generateIncorrectAnswers,
  formatMultipleChoiceOptions,
  validateOptionsDiversity
};
