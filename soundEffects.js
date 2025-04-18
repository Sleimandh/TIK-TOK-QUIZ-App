/**
 * Sound Effects Manager for the TikTok Quiz Generator
 * Handles clock ticking and transition sounds
 */

// Collection of sound effects
const soundEffects = {
  // Clock ticking sounds
  clockTicking: [
    { id: 'clock-standard', name: 'Standard Ticking', path: '/sounds/clock-standard.mp3', duration: 4 },
    { id: 'clock-fast', name: 'Fast Ticking', path: '/sounds/clock-fast.mp3', duration: 4 },
    { id: 'clock-dramatic', name: 'Dramatic Ticking', path: '/sounds/clock-dramatic.mp3', duration: 4 }
  ],
  
  // Transition sounds
  transitions: [
    { id: 'transition-slide', name: 'Slide Effect', path: '/sounds/transition-slide.mp3', duration: 0.5 },
    { id: 'transition-whoosh', name: 'Whoosh Effect', path: '/sounds/transition-whoosh.mp3', duration: 0.7 },
    { id: 'transition-pop', name: 'Pop Effect', path: '/sounds/transition-pop.mp3', duration: 0.3 }
  ],
  
  // Correct/incorrect answer sounds
  answers: [
    { id: 'answer-correct', name: 'Correct Answer', path: '/sounds/answer-correct.mp3', duration: 1.2 },
    { id: 'answer-incorrect', name: 'Incorrect Answer', path: '/sounds/answer-incorrect.mp3', duration: 1 }
  ],
  
  // UI sounds
  ui: [
    { id: 'ui-click', name: 'Button Click', path: '/sounds/ui-click.mp3', duration: 0.2 },
    { id: 'ui-hover', name: 'Button Hover', path: '/sounds/ui-hover.mp3', duration: 0.1 }
  ],
  
  // Intro/outro sounds
  bookends: [
    { id: 'intro-jingle', name: 'Intro Jingle', path: '/sounds/intro-jingle.mp3', duration: 2 },
    { id: 'outro-jingle', name: 'Outro Jingle', path: '/sounds/outro-jingle.mp3', duration: 2 }
  ],
  
  // Placeholder URLs for free sound effects
  placeholders: {
    clockTicking: 'https://freesound.org/search/?q=clock+ticking',
    transitions: 'https://freesound.org/search/?q=whoosh+transition',
    answers: 'https://freesound.org/search/?q=game+correct+incorrect',
    ui: 'https://freesound.org/search/?q=ui+click',
    bookends: 'https://freesound.org/search/?q=jingle+short'
  }
};

/**
 * Get a clock ticking sound effect
 * @param {string} style - Style of ticking ('standard', 'fast', 'dramatic')
 * @returns {Object} Sound effect object
 */
function getClockTickingSound(style = 'standard') {
  const clockId = `clock-${style}`;
  return soundEffects.clockTicking.find(sound => sound.id === clockId) || soundEffects.clockTicking[0];
}

/**
 * Get a transition sound effect
 * @param {string} type - Type of transition ('slide', 'whoosh', 'pop')
 * @returns {Object} Sound effect object
 */
function getTransitionSound(type = 'slide') {
  const transitionId = `transition-${type}`;
  return soundEffects.transitions.find(sound => sound.id === transitionId) || soundEffects.transitions[0];
}

/**
 * Get an answer sound effect
 * @param {boolean} correct - Whether the answer is correct
 * @returns {Object} Sound effect object
 */
function getAnswerSound(correct = true) {
  const answerId = `answer-${correct ? 'correct' : 'incorrect'}`;
  return soundEffects.answers.find(sound => sound.id === answerId);
}

/**
 * Get a UI sound effect
 * @param {string} type - Type of UI sound ('click', 'hover')
 * @returns {Object} Sound effect object
 */
function getUiSound(type = 'click') {
  const uiId = `ui-${type}`;
  return soundEffects.ui.find(sound => sound.id === uiId);
}

/**
 * Get an intro or outro sound effect
 * @param {string} type - Type of bookend sound ('intro', 'outro')
 * @returns {Object} Sound effect object
 */
function getBookendSound(type = 'intro') {
  const bookendId = `${type}-jingle`;
  return soundEffects.bookends.find(sound => sound.id === bookendId);
}

/**
 * Get placeholder URL for finding free sound effects
 * @param {string} category - Category of sound effects
 * @returns {string} URL for finding free sound effects
 */
function getSoundPlaceholderUrl(category) {
  return soundEffects.placeholders[category] || 'https://freesound.org/';
}

/**
 * Get all sound effects
 * @returns {Object} All sound effects
 */
function getAllSoundEffects() {
  return soundEffects;
}

module.exports = {
  getClockTickingSound,
  getTransitionSound,
  getAnswerSound,
  getUiSound,
  getBookendSound,
  getSoundPlaceholderUrl,
  getAllSoundEffects
};
