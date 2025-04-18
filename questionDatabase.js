/**
 * Question Database for the TikTok Quiz Generator
 * Contains a collection of questions across various topics
 */

// Sample questions database organized by topic
// In a production environment, this would be stored in a proper database
const questionDatabase = {
  anatomy: [
    {
      id: 'anatomy-001',
      question: 'Which organ is responsible for filtering blood and removing waste?',
      correctAnswer: 'Kidneys',
      incorrectAnswers: ['Liver', 'Heart', 'Lungs'],
      difficulty: 'medium',
      imageQuery: 'human kidneys anatomy'
    },
    {
      id: 'anatomy-002',
      question: 'How many chambers does the human heart have?',
      correctAnswer: '4',
      incorrectAnswers: ['2', '3', '5'],
      difficulty: 'easy',
      imageQuery: 'human heart chambers'
    },
    {
      id: 'anatomy-003',
      question: 'Which part of the brain is responsible for balance and coordination?',
      correctAnswer: 'Cerebellum',
      incorrectAnswers: ['Frontal lobe', 'Hippocampus', 'Medulla'],
      difficulty: 'hard',
      imageQuery: 'cerebellum brain'
    },
    {
      id: 'anatomy-004',
      question: 'What is the largest organ in the human body?',
      correctAnswer: 'Skin',
      incorrectAnswers: ['Liver', 'Large intestine', 'Lungs'],
      difficulty: 'easy',
      imageQuery: 'human skin layers'
    },
    {
      id: 'anatomy-005',
      question: 'Which bone is the longest in the human body?',
      correctAnswer: 'Femur',
      incorrectAnswers: ['Tibia', 'Humerus', 'Spine'],
      difficulty: 'medium',
      imageQuery: 'femur bone'
    }
  ],
  biology: [
    {
      id: 'biology-001',
      question: 'What is the process by which plants make their own food?',
      correctAnswer: 'Photosynthesis',
      incorrectAnswers: ['Respiration', 'Fermentation', 'Digestion'],
      difficulty: 'easy',
      imageQuery: 'photosynthesis process'
    },
    {
      id: 'biology-002',
      question: 'Which organelle is known as the powerhouse of the cell?',
      correctAnswer: 'Mitochondria',
      incorrectAnswers: ['Nucleus', 'Ribosome', 'Golgi apparatus'],
      difficulty: 'easy',
      imageQuery: 'mitochondria cell'
    },
    {
      id: 'biology-003',
      question: 'What is the name of the process by which cells divide?',
      correctAnswer: 'Mitosis',
      incorrectAnswers: ['Meiosis', 'Binary fission', 'Budding'],
      difficulty: 'medium',
      imageQuery: 'mitosis cell division'
    },
    {
      id: 'biology-004',
      question: 'Which of these is NOT a type of blood cell?',
      correctAnswer: 'Nephron',
      incorrectAnswers: ['Platelet', 'Erythrocyte', 'Leukocyte'],
      difficulty: 'medium',
      imageQuery: 'blood cells types'
    },
    {
      id: 'biology-005',
      question: 'What is the basic unit of heredity?',
      correctAnswer: 'Gene',
      incorrectAnswers: ['Chromosome', 'DNA', 'Nucleus'],
      difficulty: 'easy',
      imageQuery: 'gene dna structure'
    }
  ],
  pharmacology: [
    {
      id: 'pharmacology-001',
      question: 'Which drug class is used to reduce fever and pain?',
      correctAnswer: 'NSAIDs',
      incorrectAnswers: ['Antibiotics', 'Antihistamines', 'Opioids'],
      difficulty: 'medium',
      imageQuery: 'nsaid medications'
    },
    {
      id: 'pharmacology-002',
      question: 'What is the main active ingredient in aspirin?',
      correctAnswer: 'Acetylsalicylic acid',
      incorrectAnswers: ['Ibuprofen', 'Paracetamol', 'Naproxen'],
      difficulty: 'hard',
      imageQuery: 'aspirin chemical structure'
    },
    {
      id: 'pharmacology-003',
      question: 'Which medication is commonly used to treat high blood pressure?',
      correctAnswer: 'Lisinopril',
      incorrectAnswers: ['Amoxicillin', 'Fluoxetine', 'Albuterol'],
      difficulty: 'hard',
      imageQuery: 'blood pressure medication'
    },
    {
      id: 'pharmacology-004',
      question: 'What type of drug is insulin?',
      correctAnswer: 'Hormone',
      incorrectAnswers: ['Antibiotic', 'Steroid', 'Analgesic'],
      difficulty: 'medium',
      imageQuery: 'insulin medication'
    },
    {
      id: 'pharmacology-005',
      question: 'Which route of administration provides the fastest drug action?',
      correctAnswer: 'Intravenous',
      incorrectAnswers: ['Oral', 'Topical', 'Subcutaneous'],
      difficulty: 'medium',
      imageQuery: 'intravenous medication'
    }
  ],
  history: [
    {
      id: 'history-001',
      question: 'In which city would you find the Colosseum?',
      correctAnswer: 'Rome',
      incorrectAnswers: ['Paris', 'Athens', 'Barcelona'],
      difficulty: 'easy',
      imageQuery: 'colosseum rome'
    },
    {
      id: 'history-002',
      question: 'Who was the first President of the United States?',
      correctAnswer: 'George Washington',
      incorrectAnswers: ['Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
      difficulty: 'easy',
      imageQuery: 'george washington president'
    },
    {
      id: 'history-003',
      question: 'Which ancient wonder was located in Alexandria?',
      correctAnswer: 'Lighthouse of Alexandria',
      incorrectAnswers: ['Hanging Gardens of Babylon', 'Colossus of Rhodes', 'Great Pyramid of Giza'],
      difficulty: 'hard',
      imageQuery: 'lighthouse of alexandria'
    },
    {
      id: 'history-004',
      question: 'In which year did World War II end?',
      correctAnswer: '1945',
      incorrectAnswers: ['1939', '1942', '1950'],
      difficulty: 'medium',
      imageQuery: 'world war 2 end 1945'
    },
    {
      id: 'history-005',
      question: 'Who painted the Mona Lisa?',
      correctAnswer: 'Leonardo da Vinci',
      incorrectAnswers: ['Michelangelo', 'Raphael', 'Vincent van Gogh'],
      difficulty: 'easy',
      imageQuery: 'mona lisa painting'
    }
  ],
  geography: [
    {
      id: 'geography-001',
      question: 'What is the capital of Australia?',
      correctAnswer: 'Canberra',
      incorrectAnswers: ['Sydney', 'Melbourne', 'Perth'],
      difficulty: 'medium',
      imageQuery: 'canberra australia capital'
    },
    {
      id: 'geography-002',
      question: 'Which is the longest river in the world?',
      correctAnswer: 'Nile',
      incorrectAnswers: ['Amazon', 'Mississippi', 'Yangtze'],
      difficulty: 'medium',
      imageQuery: 'nile river map'
    },
    {
      id: 'geography-003',
      question: 'Which country is known as the Land of the Rising Sun?',
      correctAnswer: 'Japan',
      incorrectAnswers: ['China', 'Thailand', 'South Korea'],
      difficulty: 'easy',
      imageQuery: 'japan rising sun'
    },
    {
      id: 'geography-004',
      question: 'What is the largest desert in the world?',
      correctAnswer: 'Antarctic Desert',
      incorrectAnswers: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert'],
      difficulty: 'hard',
      imageQuery: 'antarctic desert'
    },
    {
      id: 'geography-005',
      question: 'Which mountain range separates Europe from Asia?',
      correctAnswer: 'Ural Mountains',
      incorrectAnswers: ['Alps', 'Himalayas', 'Andes'],
      difficulty: 'hard',
      imageQuery: 'ural mountains map'
    }
  ],
  science: [
    {
      id: 'science-001',
      question: 'What is the chemical symbol for gold?',
      correctAnswer: 'Au',
      incorrectAnswers: ['Ag', 'Fe', 'Pb'],
      difficulty: 'easy',
      imageQuery: 'gold chemical element'
    },
    {
      id: 'science-002',
      question: 'What is the speed of light in a vacuum?',
      correctAnswer: '299,792,458 m/s',
      incorrectAnswers: ['150,000,000 m/s', '199,792,458 m/s', '300,000,000 m/s'],
      difficulty: 'medium',
      imageQuery: 'speed of light'
    },
    {
      id: 'science-003',
      question: 'Which planet has the most moons?',
      correctAnswer: 'Saturn',
      incorrectAnswers: ['Jupiter', 'Uranus', 'Neptune'],
      difficulty: 'medium',
      imageQuery: 'saturn moons'
    },
    {
      id: 'science-004',
      question: 'What is the hardest natural substance on Earth?',
      correctAnswer: 'Diamond',
      incorrectAnswers: ['Titanium', 'Platinum', 'Quartz'],
      difficulty: 'easy',
      imageQuery: 'diamond structure'
    },
    {
      id: 'science-005',
      question: 'Which scientist proposed the theory of general relativity?',
      correctAnswer: 'Albert Einstein',
      incorrectAnswers: ['Isaac Newton', 'Stephen Hawking', 'Niels Bohr'],
      difficulty: 'easy',
      imageQuery: 'einstein relativity'
    }
  ],
  movies: [
    {
      id: 'movies-001',
      question: 'Who directed the movie "Titanic"?',
      correctAnswer: 'James Cameron',
      incorrectAnswers: ['Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese'],
      difficulty: 'medium',
      imageQuery: 'james cameron director'
    },
    {
      id: 'movies-002',
      question: 'Which actor played Iron Man in the Marvel Cinematic Universe?',
      correctAnswer: 'Robert Downey Jr.',
      incorrectAnswers: ['Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
      difficulty: 'easy',
      imageQuery: 'robert downey jr iron man'
    },
    {
      id: 'movies-003',
      question: 'Which film won the Academy Award for Best Picture in 2020?',
      correctAnswer: 'Parasite',
      incorrectAnswers: ['1917', 'Joker', 'Once Upon a Time in Hollywood'],
      difficulty: 'hard',
      imageQuery: 'parasite movie oscar'
    },
    {
      id: 'movies-004',
      question: 'In "The Matrix," what color pill does Neo take?',
      correctAnswer: 'Red',
      incorrectAnswers: ['Blue', 'Green', 'Purple'],
      difficulty: 'easy',
      imageQuery: 'matrix red pill'
    },
    {
      id: 'movies-005',
      question: 'Which movie features a character named Forrest Gump?',
      correctAnswer: 'Forrest Gump',
      incorrectAnswers: ['Saving Private Ryan', 'Cast Away', 'The Green Mile'],
      difficulty: 'easy',
      imageQuery: 'forrest gump movie'
    }
  ],
  music: [
    {
      id: 'music-001',
      question: 'Who is known as the "King of Pop"?',
      correctAnswer: 'Michael Jackson',
      incorrectAnswers: ['Elvis Presley', 'Prince', 'Justin Timberlake'],
      difficulty: 'easy',
      imageQuery: 'michael jackson king of pop'
    },
    {
      id: 'music-002',
      question: 'Which band performed the song "Bohemian Rhapsody"?',
      correctAnswer: 'Queen',
      incorrectAnswers: ['The Beatles', 'Led Zeppelin', 'Pink Floyd'],
      difficulty: 'easy',
      imageQuery: 'queen band bohemian rhapsody'
    },
    {
      id: 'music-003',
      question: 'How many strings does a standard guitar have?',
      correctAnswer: '6',
      incorrectAnswers: ['4', '5', '8'],
      difficulty: 'easy',
      imageQuery: 'guitar strings'
    },
    {
      id: 'music-004',
      question: 'Which composer was deaf when he completed his Ninth Symphony?',
      correctAnswer: 'Ludwig van Beethoven',
      incorrectAnswers: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'],
      difficulty: 'medium',
      imageQuery: 'beethoven composer'
    },
    {
      id: 'music-005',
      question: 'In which decade was the band The Beatles formed?',
      correctAnswer: '1960s',
      incorrectAnswers: ['1950s', '1970s', '1980s'],
      difficulty: 'medium',
      imageQuery: 'beatles band formation'
    }
  ]
};

/**
 * Get all questions from the database
 * @returns {Object} All questions organized by topic
 */
function getAllQuestions() {
  return questionDatabase;
}

/**
 * Get questions for a specific topic
 * @param {string} topic - The topic to get questions for
 * @returns {Array|null} Array of questions for the topic or null if topic not found
 */
function getQuestionsByTopic(topic) {
  return questionDatabase[topic] || null;
}

/**
 * Get a specific question by ID
 * @param {string} questionId - The ID of the question to retrieve
 * @returns {Object|null} The question object or null if not found
 */
function getQuestionById(questionId) {
  // Extract topic from question ID (format: "topic-number")
  const topicId = questionId.split('-')[0];
  
  if (questionDatabase[topicId]) {
    return questionDatabase[topicId].find(q => q.id === questionId) || null;
  }
  
  return null;
}

/**
 * Get random questions from a specific topic
 * @param {string} topic - The topic to get questions from
 * @param {number} count - Number of questions to return
 * @returns {Array} Array of random questions
 */
function getRandomQuestionsByTopic(topic, count = 5) {
  if (!questionDatabase[topic]) {
    return [];
  }
  
  const questions = [...questionDatabase[topic]];
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
}

/**
 * Get random questions from all topics
 * @param {number} count - Number of questions to return
 * @param {Array} excludeTopics - Topics to exclude
 * @returns {Array} Array of random questions from various topics
 */
function getRandomQuestions(count = 5, excludeTopics = []) {
  const allQuestions = [];
  
  // Collect all questions from non-excluded topics
  Object.keys(questionDatabase).forEach(topic => {
    if (!excludeTopics.includes(topic)) {
      questionDatabase[topic].forEach(question => {
        allQuestions.push(question);
      });
    }
  });
  
  // Shuffle and return requested number of questions
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allQuestions.length));
}

module.exports = {
  getAllQuestions,
  getQuestionsByTopic,
  getQuestionById,
  getRandomQuestionsByTopic,
  getRandomQuestions
};
