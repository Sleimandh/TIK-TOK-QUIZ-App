/**
 * Timeline Manager for the TikTok Quiz Generator
 * Coordinates timing of all elements in the quiz video
 */

/**
 * Create a timeline for a quiz video
 * @param {Array} questions - Array of question objects
 * @param {Object} settings - Video settings
 * @returns {Object} Timeline object with timing information for all elements
 */
function createVideoTimeline(questions, settings = {}) {
  // Default settings
  const defaultSettings = {
    videoDuration: 35, // Total video duration in seconds
    introTime: 2, // Time for intro in seconds
    outroTime: 3, // Time for outro in seconds
    questionTime: 4, // Time per question in seconds (includes ticking clock)
    answerTime: 2, // Time to show answer in seconds
    transitionTime: 0.5 // Time for transitions in seconds
  };
  
  // Merge with provided settings
  const videoSettings = {...defaultSettings, ...settings};
  
  // Calculate available time for questions and answers
  const contentTime = videoSettings.videoDuration - videoSettings.introTime - videoSettings.outroTime;
  
  // Calculate time per question-answer pair
  const timePerQuestion = contentTime / questions.length;
  
  // Initialize timeline
  const timeline = {
    totalDuration: videoSettings.videoDuration,
    intro: {
      start: 0,
      end: videoSettings.introTime
    },
    questions: [],
    outro: {
      start: videoSettings.videoDuration - videoSettings.outroTime,
      end: videoSettings.videoDuration
    }
  };
  
  // Current time tracker
  let currentTime = videoSettings.introTime;
  
  // Add each question to the timeline
  questions.forEach((question, index) => {
    const questionStart = currentTime;
    const questionEnd = questionStart + videoSettings.questionTime;
    const answerStart = questionEnd;
    const answerEnd = answerStart + videoSettings.answerTime;
    const transitionStart = answerEnd;
    const transitionEnd = transitionStart + videoSettings.transitionTime;
    
    timeline.questions.push({
      questionNumber: question.questionNumber,
      question: {
        start: questionStart,
        end: questionEnd
      },
      answer: {
        start: answerStart,
        end: answerEnd
      },
      transition: {
        start: transitionStart,
        end: transitionEnd
      }
    });
    
    // Update current time
    currentTime = transitionEnd;
  });
  
  return timeline;
}

/**
 * Adjust timeline based on actual media durations
 * @param {Object} timeline - Original timeline
 * @param {Object} mediaDurations - Object with actual durations of media elements
 * @returns {Object} Adjusted timeline
 */
function adjustTimelineForMediaDurations(timeline, mediaDurations) {
  // Clone the original timeline
  const adjustedTimeline = JSON.parse(JSON.stringify(timeline));
  
  // Adjust question timings based on voiceover durations
  if (mediaDurations.voiceovers) {
    adjustedTimeline.questions.forEach((questionTimeline, index) => {
      const voiceoverDuration = mediaDurations.voiceovers[index] || 0;
      
      // If voiceover is longer than allocated question time, extend it
      if (voiceoverDuration > (questionTimeline.question.end - questionTimeline.question.start)) {
        const difference = voiceoverDuration - (questionTimeline.question.end - questionTimeline.question.start);
        questionTimeline.question.end += difference;
        questionTimeline.answer.start += difference;
        questionTimeline.answer.end += difference;
        questionTimeline.transition.start += difference;
        questionTimeline.transition.end += difference;
        
        // Adjust all subsequent questions
        for (let i = index + 1; i < adjustedTimeline.questions.length; i++) {
          adjustedTimeline.questions[i].question.start += difference;
          adjustedTimeline.questions[i].question.end += difference;
          adjustedTimeline.questions[i].answer.start += difference;
          adjustedTimeline.questions[i].answer.end += difference;
          adjustedTimeline.questions[i].transition.start += difference;
          adjustedTimeline.questions[i].transition.end += difference;
        }
        
        // Adjust outro
        adjustedTimeline.outro.start += difference;
        adjustedTimeline.outro.end += difference;
        adjustedTimeline.totalDuration += difference;
      }
    });
  }
  
  return adjustedTimeline;
}

/**
 * Generate cue points for video elements
 * @param {Object} timeline - Video timeline
 * @returns {Array} Array of cue points for video elements
 */
function generateCuePoints(timeline) {
  const cuePoints = [];
  
  // Add intro cue point
  cuePoints.push({
    time: timeline.intro.start,
    type: 'intro',
    action: 'start'
  });
  
  cuePoints.push({
    time: timeline.intro.end,
    type: 'intro',
    action: 'end'
  });
  
  // Add question cue points
  timeline.questions.forEach(questionTimeline => {
    // Question start
    cuePoints.push({
      time: questionTimeline.question.start,
      type: 'question',
      questionNumber: questionTimeline.questionNumber,
      action: 'start'
    });
    
    // Clock start (same as question start)
    cuePoints.push({
      time: questionTimeline.question.start,
      type: 'clock',
      questionNumber: questionTimeline.questionNumber,
      action: 'start'
    });
    
    // Question end / Answer start
    cuePoints.push({
      time: questionTimeline.question.end,
      type: 'question',
      questionNumber: questionTimeline.questionNumber,
      action: 'end'
    });
    
    // Clock end (same as question end)
    cuePoints.push({
      time: questionTimeline.question.end,
      type: 'clock',
      questionNumber: questionTimeline.questionNumber,
      action: 'end'
    });
    
    // Answer start
    cuePoints.push({
      time: questionTimeline.answer.start,
      type: 'answer',
      questionNumber: questionTimeline.questionNumber,
      action: 'start'
    });
    
    // Answer end
    cuePoints.push({
      time: questionTimeline.answer.end,
      type: 'answer',
      questionNumber: questionTimeline.questionNumber,
      action: 'end'
    });
    
    // Transition start
    cuePoints.push({
      time: questionTimeline.transition.start,
      type: 'transition',
      questionNumber: questionTimeline.questionNumber,
      action: 'start'
    });
    
    // Transition end
    cuePoints.push({
      time: questionTimeline.transition.end,
      type: 'transition',
      questionNumber: questionTimeline.questionNumber,
      action: 'end'
    });
  });
  
  // Add outro cue points
  cuePoints.push({
    time: timeline.outro.start,
    type: 'outro',
    action: 'start'
  });
  
  cuePoints.push({
    time: timeline.outro.end,
    type: 'outro',
    action: 'end'
  });
  
  // Sort cue points by time
  return cuePoints.sort((a, b) => a.time - b.time);
}

/**
 * Get total video duration from timeline
 * @param {Object} timeline - Video timeline
 * @returns {number} Total video duration in seconds
 */
function getTotalDuration(timeline) {
  return timeline.totalDuration;
}

module.exports = {
  createVideoTimeline,
  adjustTimelineForMediaDurations,
  generateCuePoints,
  getTotalDuration
};
