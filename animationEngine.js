/**
 * Animation Engine for the TikTok Quiz Generator
 * Creates text animations and transitions for quiz videos
 */

/**
 * Generate animation keyframes for text elements
 * @param {string} animationType - Type of animation ('fadeIn', 'slideIn', 'bounce', etc.)
 * @param {number} duration - Duration of animation in seconds
 * @param {Object} options - Additional animation options
 * @returns {Object} Animation keyframes and configuration
 */
function generateTextAnimation(animationType = 'fadeIn', duration = 0.5, options = {}) {
  // Default options
  const defaultOptions = {
    delay: 0,
    easing: 'ease-out',
    direction: 'normal',
    fillMode: 'forwards'
  };
  
  // Merge with provided options
  const animationOptions = {...defaultOptions, ...options};
  
  // Animation keyframes definitions
  const animations = {
    fadeIn: {
      keyframes: [
        { opacity: 0 },
        { opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    fadeOut: {
      keyframes: [
        { opacity: 1 },
        { opacity: 0 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    slideInLeft: {
      keyframes: [
        { transform: 'translateX(-100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    slideInRight: {
      keyframes: [
        { transform: 'translateX(100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    slideInTop: {
      keyframes: [
        { transform: 'translateY(-100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    slideInBottom: {
      keyframes: [
        { transform: 'translateY(100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: animationOptions.easing,
        fill: animationOptions.fillMode
      }
    },
    bounce: {
      keyframes: [
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1.2)', opacity: 1 },
        { transform: 'scale(0.9)', opacity: 1 },
        { transform: 'scale(1)', opacity: 1 }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fill: animationOptions.fillMode
      }
    },
    pulse: {
      keyframes: [
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: 'ease-in-out',
        iterations: 2,
        fill: animationOptions.fillMode
      }
    },
    shake: {
      keyframes: [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
      ],
      options: {
        duration: duration * 1000,
        delay: animationOptions.delay * 1000,
        easing: 'ease-in-out',
        fill: animationOptions.fillMode
      }
    }
  };
  
  // Return the requested animation or default to fadeIn
  return animations[animationType] || animations.fadeIn;
}

/**
 * Generate transition effect between scenes
 * @param {string} transitionType - Type of transition ('fade', 'wipe', 'zoom', etc.)
 * @param {number} duration - Duration of transition in seconds
 * @param {Object} options - Additional transition options
 * @returns {Object} Transition configuration
 */
function generateSceneTransition(transitionType = 'fade', duration = 0.5, options = {}) {
  // Default options
  const defaultOptions = {
    direction: 'left',
    easing: 'ease-in-out'
  };
  
  // Merge with provided options
  const transitionOptions = {...defaultOptions, ...options};
  
  // Transition definitions
  const transitions = {
    fade: {
      type: 'fade',
      duration: duration,
      params: {
        easing: transitionOptions.easing
      }
    },
    wipe: {
      type: 'wipe',
      duration: duration,
      params: {
        direction: transitionOptions.direction,
        easing: transitionOptions.easing
      }
    },
    zoom: {
      type: 'zoom',
      duration: duration,
      params: {
        scale: transitionOptions.direction === 'in' ? 2 : 0.5,
        easing: transitionOptions.easing
      }
    },
    slide: {
      type: 'slide',
      duration: duration,
      params: {
        direction: transitionOptions.direction,
        easing: transitionOptions.easing
      }
    },
    dissolve: {
      type: 'dissolve',
      duration: duration,
      params: {
        easing: transitionOptions.easing
      }
    }
  };
  
  // Return the requested transition or default to fade
  return transitions[transitionType] || transitions.fade;
}

/**
 * Generate clock ticking animation
 * @param {number} duration - Duration of clock animation in seconds
 * @param {Object} options - Additional animation options
 * @returns {Object} Clock animation configuration
 */
function generateClockAnimation(duration = 4, options = {}) {
  // Default options
  const defaultOptions = {
    color: '#FF0000',
    size: 100,
    strokeWidth: 5,
    easing: 'linear'
  };
  
  // Merge with provided options
  const clockOptions = {...defaultOptions, ...options};
  
  return {
    type: 'clock',
    duration: duration,
    params: {
      color: clockOptions.color,
      size: clockOptions.size,
      strokeWidth: clockOptions.strokeWidth,
      easing: clockOptions.easing
    }
  };
}

/**
 * Generate animation for revealing correct answer
 * @param {string} animationType - Type of animation ('highlight', 'glow', 'zoom')
 * @param {number} duration - Duration of animation in seconds
 * @param {Object} options - Additional animation options
 * @returns {Object} Answer reveal animation configuration
 */
function generateAnswerRevealAnimation(animationType = 'highlight', duration = 1, options = {}) {
  // Default options
  const defaultOptions = {
    color: '#00FF00',
    easing: 'ease-out'
  };
  
  // Merge with provided options
  const revealOptions = {...defaultOptions, ...options};
  
  // Answer reveal animation definitions
  const revealAnimations = {
    highlight: {
      type: 'highlight',
      duration: duration,
      params: {
        color: revealOptions.color,
        easing: revealOptions.easing
      }
    },
    glow: {
      type: 'glow',
      duration: duration,
      params: {
        color: revealOptions.color,
        intensity: 2,
        easing: revealOptions.easing
      }
    },
    zoom: {
      type: 'zoom',
      duration: duration,
      params: {
        scale: 1.2,
        easing: revealOptions.easing
      }
    }
  };
  
  // Return the requested animation or default to highlight
  return revealAnimations[animationType] || revealAnimations.highlight;
}

/**
 * Generate animation sequence for a complete quiz video
 * @param {Array} questions - Array of question objects
 * @param {Object} timeline - Video timeline
 * @returns {Array} Array of animation instructions
 */
function generateVideoAnimationSequence(questions, timeline) {
  const animationSequence = [];
  
  // Add intro animations
  animationSequence.push({
    time: timeline.intro.start,
    element: 'introTitle',
    animation: generateTextAnimation('bounce', 1)
  });
  
  // Add animations for each question
  timeline.questions.forEach((questionTimeline, index) => {
    const question = questions[index];
    
    // Question number animation
    animationSequence.push({
      time: questionTimeline.question.start,
      element: `questionNumber-${question.questionNumber}`,
      animation: generateTextAnimation('bounce', 0.5)
    });
    
    // Question text animation
    animationSequence.push({
      time: questionTimeline.question.start + 0.2,
      element: `questionText-${question.questionNumber}`,
      animation: generateTextAnimation('slideInBottom', 0.7)
    });
    
    // Options animations (staggered)
    question.options.forEach((option, optionIndex) => {
      animationSequence.push({
        time: questionTimeline.question.start + 0.5 + (optionIndex * 0.15),
        element: `option-${question.questionNumber}-${optionIndex}`,
        animation: generateTextAnimation('slideInLeft', 0.5)
      });
    });
    
    // Clock animation
    animationSequence.push({
      time: questionTimeline.question.start,
      element: `clock-${question.questionNumber}`,
      animation: generateClockAnimation(questionTimeline.question.end - questionTimeline.question.start)
    });
    
    // Correct answer reveal animation
    animationSequence.push({
      time: questionTimeline.answer.start,
      element: `option-${question.questionNumber}-${question.correctOptionIndex}`,
      animation: generateAnswerRevealAnimation('highlight', 1)
    });
    
    // Scene transition animation
    animationSequence.push({
      time: questionTimeline.transition.start,
      element: 'scene',
      animation: generateSceneTransition('fade', questionTimeline.transition.end - questionTimeline.transition.start)
    });
  });
  
  // Add outro animations
  animationSequence.push({
    time: timeline.outro.start,
    element: 'outroTitle',
    animation: generateTextAnimation('fadeIn', 0.5)
  });
  
  animationSequence.push({
    time: timeline.outro.start + 0.5,
    element: 'followButton',
    animation: generateTextAnimation('bounce', 0.7)
  });
  
  // Sort animation sequence by time
  return animationSequence.sort((a, b) => a.time - b.time);
}

module.exports = {
  generateTextAnimation,
  generateSceneTransition,
  generateClockAnimation,
  generateAnswerRevealAnimation,
  generateVideoAnimationSequence
};
