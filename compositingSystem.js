/**
 * Compositing System for the TikTok Quiz Generator
 * Layers all elements together to create the final video
 */

/**
 * Create a composition configuration for a quiz video
 * @param {Array} questions - Array of question objects
 * @param {Object} timeline - Video timeline
 * @param {Object} assets - Media assets for the video
 * @param {Object} settings - Video settings
 * @returns {Object} Composition configuration
 */
function createVideoComposition(questions, timeline, assets, settings = {}) {
  // Default settings
  const defaultSettings = {
    width: 1080, // TikTok portrait video width
    height: 1920, // TikTok portrait video height
    fps: 30, // Frames per second
    format: 'mp4', // Output format
    quality: 'high' // Output quality
  };
  
  // Merge with provided settings
  const videoSettings = {...defaultSettings, ...settings};
  
  // Create base composition
  const composition = {
    name: 'TikTok Quiz Video',
    width: videoSettings.width,
    height: videoSettings.height,
    fps: videoSettings.fps,
    duration: timeline.totalDuration,
    format: videoSettings.format,
    quality: videoSettings.quality,
    layers: []
  };
  
  // Add background layer
  composition.layers.push({
    type: 'background',
    source: assets.background,
    start: 0,
    end: timeline.totalDuration,
    zIndex: 0
  });
  
  // Add background music layer
  composition.layers.push({
    type: 'audio',
    source: assets.music,
    start: 0,
    end: timeline.totalDuration,
    volume: 0.3, // Background music at 30% volume
    zIndex: 1
  });
  
  // Add intro layers
  composition.layers.push({
    type: 'text',
    content: 'TEST',
    style: {
      fontFamily: 'Impact',
      fontSize: 120,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadow: '0 0 10px rgba(0,0,0,0.5)'
    },
    position: {
      x: 'center',
      y: 'center'
    },
    start: timeline.intro.start,
    end: timeline.intro.end,
    animation: 'bounce',
    zIndex: 10
  });
  
  // Add layers for each question
  timeline.questions.forEach((questionTimeline, index) => {
    const question = questions[index];
    
    // Question number
    composition.layers.push({
      type: 'text',
      id: `questionNumber-${question.questionNumber}`,
      content: `#${question.questionNumber}`,
      style: {
        fontFamily: 'Impact',
        fontSize: 80,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0 0 10px rgba(0,0,0,0.5)'
      },
      position: {
        x: 'center',
        y: '15%'
      },
      start: questionTimeline.question.start,
      end: questionTimeline.answer.end,
      animation: 'bounce',
      zIndex: 10
    });
    
    // Question text
    composition.layers.push({
      type: 'text',
      id: `questionText-${question.questionNumber}`,
      content: question.questionText,
      style: {
        fontFamily: 'Arial',
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
        textAlign: 'center',
        maxWidth: '80%'
      },
      position: {
        x: 'center',
        y: '30%'
      },
      start: questionTimeline.question.start,
      end: questionTimeline.answer.end,
      animation: 'slideInBottom',
      zIndex: 10
    });
    
    // Question image
    if (assets.images && assets.images[index]) {
      composition.layers.push({
        type: 'image',
        source: assets.images[index],
        position: {
          x: 'center',
          y: '50%',
          width: '60%',
          height: 'auto'
        },
        start: questionTimeline.question.start,
        end: questionTimeline.answer.end,
        animation: 'fadeIn',
        zIndex: 5
      });
    }
    
    // Options
    question.options.forEach((option, optionIndex) => {
      const isCorrectOption = optionIndex === question.correctOptionIndex;
      const optionLetter = String.fromCharCode(65 + optionIndex); // A, B, C, D...
      
      // Option background (circle for letter)
      composition.layers.push({
        type: 'shape',
        shape: 'circle',
        id: `optionBg-${question.questionNumber}-${optionIndex}`,
        style: {
          fill: isCorrectOption ? '#FF9500' : '#FFFFFF',
          stroke: '#000000',
          strokeWidth: 2,
          radius: 30
        },
        position: {
          x: '25%',
          y: `${65 + (optionIndex * 10)}%`
        },
        start: questionTimeline.question.start,
        end: questionTimeline.answer.end,
        animation: 'slideInLeft',
        zIndex: 11
      });
      
      // Option letter
      composition.layers.push({
        type: 'text',
        content: optionLetter,
        style: {
          fontFamily: 'Arial',
          fontSize: 40,
          fontWeight: 'bold',
          color: '#000000'
        },
        position: {
          x: '25%',
          y: `${65 + (optionIndex * 10)}%`
        },
        start: questionTimeline.question.start,
        end: questionTimeline.answer.end,
        animation: 'slideInLeft',
        zIndex: 12
      });
      
      // Option text
      composition.layers.push({
        type: 'text',
        id: `option-${question.questionNumber}-${optionIndex}`,
        content: option,
        style: {
          fontFamily: 'Arial',
          fontSize: 50,
          fontWeight: 'bold',
          color: '#FFFFFF',
          textShadow: '0 0 5px rgba(0,0,0,0.5)'
        },
        position: {
          x: '55%',
          y: `${65 + (optionIndex * 10)}%`
        },
        start: questionTimeline.question.start,
        end: questionTimeline.answer.end,
        animation: 'slideInLeft',
        zIndex: 11
      });
      
      // Highlight for correct answer (only visible during answer phase)
      if (isCorrectOption) {
        composition.layers.push({
          type: 'shape',
          shape: 'rectangle',
          style: {
            fill: 'rgba(0, 255, 0, 0.3)',
            stroke: '#00FF00',
            strokeWidth: 3,
            width: '70%',
            height: '8%',
            cornerRadius: 10
          },
          position: {
            x: '50%',
            y: `${65 + (optionIndex * 10)}%`
          },
          start: questionTimeline.answer.start,
          end: questionTimeline.answer.end,
          animation: 'fadeIn',
          zIndex: 9
        });
      }
    });
    
    // Clock animation
    composition.layers.push({
      type: 'clock',
      id: `clock-${question.questionNumber}`,
      style: {
        size: 100,
        color: '#FF0000',
        strokeWidth: 5
      },
      position: {
        x: '85%',
        y: '15%'
      },
      duration: questionTimeline.question.end - questionTimeline.question.start,
      start: questionTimeline.question.start,
      end: questionTimeline.question.end,
      zIndex: 15
    });
    
    // Clock ticking sound
    composition.layers.push({
      type: 'audio',
      source: assets.clockSound,
      start: questionTimeline.question.start,
      end: questionTimeline.question.end,
      volume: 1.0,
      zIndex: 2
    });
    
    // Question voiceover
    if (assets.voiceovers && assets.voiceovers.questions[index]) {
      composition.layers.push({
        type: 'audio',
        source: assets.voiceovers.questions[index],
        start: questionTimeline.question.start,
        end: questionTimeline.question.end,
        volume: 1.0,
        zIndex: 3
      });
    }
    
    // Answer voiceover
    if (assets.voiceovers && assets.voiceovers.answers[index]) {
      composition.layers.push({
        type: 'audio',
        source: assets.voiceovers.answers[index],
        start: questionTimeline.answer.start,
        end: questionTimeline.answer.end,
        volume: 1.0,
        zIndex: 3
      });
    }
    
    // Transition sound
    composition.layers.push({
      type: 'audio',
      source: assets.transitionSound,
      start: questionTimeline.transition.start,
      end: questionTimeline.transition.end,
      volume: 1.0,
      zIndex: 2
    });
  });
  
  // Add outro layers
  composition.layers.push({
    type: 'text',
    id: 'outroTitle',
    content: 'FOLLOW:',
    style: {
      fontFamily: 'Impact',
      fontSize: 80,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadow: '0 0 10px rgba(0,0,0,0.5)'
    },
    position: {
      x: 'center',
      y: '40%'
    },
    start: timeline.outro.start,
    end: timeline.outro.end,
    animation: 'fadeIn',
    zIndex: 10
  });
  
  composition.layers.push({
    type: 'text',
    id: 'followButton',
    content: '@CHEETAHTRIVIATRIBE',
    style: {
      fontFamily: 'Arial',
      fontSize: 60,
      fontWeight: 'bold',
      color: '#FF0050',
      textShadow: '0 0 10px rgba(0,0,0,0.5)',
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: 20,
      borderRadius: 10
    },
    position: {
      x: 'center',
      y: '50%'
    },
    start: timeline.outro.start + 0.5,
    end: timeline.outro.end,
    animation: 'bounce',
    zIndex: 10
  });
  
  return composition;
}

/**
 * Apply animations to composition layers
 * @param {Object} composition - Video composition
 * @param {Array} animationSequence - Animation sequence from animation engine
 * @returns {Object} Composition with animations applied
 */
function applyAnimationsToComposition(composition, animationSequence) {
  // Clone the composition
  const animatedComposition = JSON.parse(JSON.stringify(composition));
  
  // Apply animations to layers
  animationSequence.forEach(animation => {
    // Find the layer to animate
    const layer = animatedComposition.layers.find(l => l.id === animation.element);
    
    if (layer) {
      // Apply animation to layer
      layer.animation = animation.animation;
    }
  });
  
  return animatedComposition;
}

/**
 * Generate a preview of the composition
 * @param {Object} composition - Video composition
 * @returns {string} HTML representation of the composition for preview
 */
function generateCompositionPreview(composition) {
  // This would generate HTML/CSS to preview the composition
  // In a real implementation, this would create a visual representation
  // For now, we'll return a placeholder
  
  return `
    <div class="composition-preview" style="width: ${composition.width}px; height: ${composition.height}px; position: relative; background-color: black;">
      <!-- Layers would be rendered here -->
      <div class="preview-info">
        <h3>${composition.name}</h3>
        <p>Duration: ${composition.duration}s</p>
        <p>Resolution: ${composition.width}x${composition.height}</p>
        <p>Layers: ${composition.layers.length}</p>
      </div>
    </div>
  `;
}

module.exports = {
  createVideoComposition,
  applyAnimationsToComposition,
  generateCompositionPreview
};
