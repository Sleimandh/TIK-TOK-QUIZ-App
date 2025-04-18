/**
 * Question Generator for the TikTok Quiz Generator
 * Generates quiz questions based on topics and settings
 */

const questionDatabase = require('./questionDatabase');
const topicManager = require('./topicManager');
const answerGenerator = require('./answerGenerator');

/**
 * Generate a set of quiz questions based on settings
 * @param {Object} settings - Settings for question generation
 * @param {string} settings.topic - Topic to generate questions for ('random' or specific topic)
 * @param {number} settings.questionCount - Number of questions to generate
 * @param {string} settings.difficulty - Difficulty level ('any', 'easy', 'medium', 'hard')
 * @returns {Array} Array of question objects ready for video generation
 */
function generateQuizQuestions(settings) {
  const { topic, questionCount = 4, difficulty = 'any' } = settings;
  let questions = [];

  // Handle random topic selection
  if (topic === 'random') {
    questions = questionDatabase.getRandomQuestions(questionCount * 2); // Get extra questions to filter by difficulty
  } else if (topicManager.topicExists(topic)) {
    questions = questionDatabase.getRandomQuestionsByTopic(topic, questionCount * 2); // Get extra questions to filter by difficulty
  } else {
    // Fallback to random if topic doesn't exist
    questions = questionDatabase.getRandomQuestions(questionCount * 2);
  }

  // Filter by difficulty if specified
  if (difficulty !== 'any') {
    questions = questions.filter(q => q.difficulty === difficulty);
    
    // If we don't have enough questions after filtering, get more
    if (questions.length < questionCount) {
      const additionalQuestions = questionDatabase.getRandomQuestions(questionCount * 2)
        .filter(q => q.difficulty === difficulty);
      questions = [...questions, ...additionalQuestions];
    }
  }

  // Ensure we have the right number of questions
  questions = questions.slice(0, questionCount);

  // Prepare questions for video generation
  return questions.map((question, index) => {
    // Randomize the order of answers
    const allAnswers = [question.correctAnswer, ...question.incorrectAnswers];
    const shuffledAnswers = shuffleArray(allAnswers);
    
    // Find the index of the correct answer in the shuffled array
    const correctAnswerIndex = shuffledAnswers.indexOf(question.correctAnswer);
    
    return {
      questionNumber: index + 1,
      questionText: question.question,
      options: shuffledAnswers,
      correctOptionIndex: correctAnswerIndex,
      imageQuery: question.imageQuery,
      difficulty: question.difficulty
    };
  });
}

/**
 * Generate a single quiz question
 * @param {string} topic - Topic to generate question for
 * @returns {Object} Question object ready for video generation
 */
function generateSingleQuestion(topic) {
  return generateQuizQuestions({
    topic,
    questionCount: 1,
    difficulty: 'any'
  })[0];
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

module.exports = {
  generateQuizQuestions,
  generateSingleQuestion
};
