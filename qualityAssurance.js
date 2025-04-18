/**
 * Quality Assurance for the TikTok Quiz Generator
 * Verifies video meets requirements
 */

/**
 * Validate a video composition
 * @param {Object} composition - Video composition
 * @param {Object} requirements - Video requirements
 * @returns {Object} Validation results
 */
function validateComposition(composition, requirements = {}) {
  // Default requirements
  const defaultRequirements = {
    minDuration: 30,
    maxDuration: 40,
    minQuestions: 3,
    maxQuestions: 6,
    requiredElements: ['questions', 'answers', 'clock', 'background', 'music']
  };
  
  // Merge with provided requirements
  const videoRequirements = {...defaultRequirements, ...requirements};
  
  // Initialize validation results
  const validationResults = {
    valid: true,
    issues: [],
    warnings: []
  };
  
  // Check duration
  if (composition.duration < videoRequirements.minDuration) {
    validationResults.valid = false;
    validationResults.issues.push({
      type: 'duration',
      message: `Video duration (${composition.duration}s) is less than minimum required (${videoRequirements.minDuration}s)`
    });
  }
  
  if (composition.duration > videoRequirements.maxDuration) {
    validationResults.valid = false;
    validationResults.issues.push({
      type: 'duration',
      message: `Video duration (${composition.duration}s) exceeds maximum allowed (${videoRequirements.maxDuration}s)`
    });
  }
  
  // Count questions
  const questionLayers = composition.layers.filter(layer => 
    layer.id && layer.id.startsWith('questionText-')
  );
  
  const questionCount = questionLayers.length;
  
  if (questionCount < videoRequirements.minQuestions) {
    validationResults.valid = false;
    validationResults.issues.push({
      type: 'questions',
      message: `Video has too few questions (${questionCount}). Minimum required: ${videoRequirements.minQuestions}`
    });
  }
  
  if (questionCount > videoRequirements.maxQuestions) {
    validationResults.valid = false;
    validationResults.issues.push({
      type: 'questions',
      message: `Video has too many questions (${questionCount}). Maximum allowed: ${videoRequirements.maxQuestions}`
    });
  }
  
  // Check for required elements
  const elementTypes = {
    'questions': layer => layer.id && layer.id.startsWith('questionText-'),
    'answers': layer => layer.id && layer.id.startsWith('option-'),
    'clock': layer => layer.type === 'clock',
    'background': layer => layer.type === 'background',
    'music': layer => layer.type === 'audio' && layer.volume === 0.3
  };
  
  videoRequirements.requiredElements.forEach(element => {
    const hasElement = composition.layers.some(elementTypes[element]);
    
    if (!hasElement) {
      validationResults.valid = false;
      validationResults.issues.push({
        type: 'missing-element',
        message: `Required element "${element}" is missing from the composition`
      });
    }
  });
  
  // Check for potential issues
  
  // Check for overlapping text
  const textLayers = composition.layers.filter(layer => layer.type === 'text');
  for (let i = 0; i < textLayers.length; i++) {
    for (let j = i + 1; j < textLayers.length; j++) {
      const layer1 = textLayers[i];
      const layer2 = textLayers[j];
      
      // Check if layers overlap in time
      const timeOverlap = !(layer1.end <= layer2.start || layer2.end <= layer1.start);
      
      // Check if layers are at similar positions
      const positionOverlap = 
        layer1.position.x === layer2.position.x && 
        Math.abs(parseFloat(layer1.position.y) - parseFloat(layer2.position.y)) < 10;
      
      if (timeOverlap && positionOverlap) {
        validationResults.warnings.push({
          type: 'overlapping-text',
          message: `Text layers "${layer1.id || 'unnamed'}" and "${layer2.id || 'unnamed'}" may overlap`
        });
      }
    }
  }
  
  // Check for audio balance
  const voiceoverLayers = composition.layers.filter(
    layer => layer.type === 'audio' && layer.volume === 1.0
  );
  
  if (voiceoverLayers.length === 0) {
    validationResults.warnings.push({
      type: 'missing-voiceover',
      message: 'No voiceover audio found in composition'
    });
  }
  
  return validationResults;
}

/**
 * Check if a rendered video meets TikTok requirements
 * @param {string} videoPath - Path to video file
 * @returns {Promise<Object>} Promise resolving to validation results
 */
function validateRenderedVideo(videoPath) {
  // In a real implementation, this would analyze the video file
  // For now, we'll return a placeholder
  
  return {
    execute: async function(videoPath) {
      console.log(`Validating rendered video: "${videoPath}"`);
      
      // Return placeholder validation results
      return {
        valid: true,
        issues: [],
        warnings: [],
        tiktokCompatible: true,
        fileSize: '8MB',
        duration: '35s',
        resolution: '1080x1920',
        aspectRatio: '9:16',
        frameRate: '30fps',
        audioBitrate: '128kbps'
      };
    }
  };
}

/**
 * Generate a quality report for a video
 * @param {Object} composition - Video composition
 * @param {Object} validationResults - Validation results
 * @returns {string} HTML quality report
 */
function generateQualityReport(composition, validationResults) {
  // This would generate an HTML report with validation results
  // For now, we'll return a placeholder
  
  const issuesList = validationResults.issues.map(issue => 
    `<li class="text-red-500">${issue.message}</li>`
  ).join('');
  
  const warningsList = validationResults.warnings.map(warning => 
    `<li class="text-yellow-500">${warning.message}</li>`
  ).join('');
  
  return `
    <div class="quality-report">
      <h2 class="text-xl font-bold">Quality Report</h2>
      
      <div class="status">
        <span class="font-bold">Status:</span> 
        <span class="${validationResults.valid ? 'text-green-500' : 'text-red-500'}">
          ${validationResults.valid ? 'PASSED' : 'FAILED'}
        </span>
      </div>
      
      <div class="video-info">
        <p><span class="font-bold">Name:</span> ${composition.name}</p>
        <p><span class="font-bold">Duration:</span> ${composition.duration}s</p>
        <p><span class="font-bold">Resolution:</span> ${composition.width}x${composition.height}</p>
        <p><span class="font-bold">Layers:</span> ${composition.layers.length}</p>
      </div>
      
      ${validationResults.issues.length > 0 ? `
        <div class="issues mt-4">
          <h3 class="font-bold">Issues:</h3>
          <ul class="list-disc pl-5">
            ${issuesList}
          </ul>
        </div>
      ` : ''}
      
      ${validationResults.warnings.length > 0 ? `
        <div class="warnings mt-4">
          <h3 class="font-bold">Warnings:</h3>
          <ul class="list-disc pl-5">
            ${warningsList}
          </ul>
        </div>
      ` : ''}
      
      ${validationResults.valid && validationResults.warnings.length === 0 ? `
        <div class="success mt-4 text-green-500">
          <p>✓ Video meets all quality requirements and is ready for TikTok!</p>
        </div>
      ` : ''}
    </div>
  `;
}

module.exports = {
  validateComposition,
  validateRenderedVideo,
  generateQualityReport
};
