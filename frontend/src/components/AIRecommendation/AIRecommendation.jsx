import React, { useState } from 'react';
import { recommendations } from '../../data/recommendations';
import './AIRecommendation.css';

const AIRecommendation = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [goalRecommendations, setGoalRecommendations] = useState([]);

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    setGoalRecommendations(recommendations[goal]);
  };

  const toggleRecommendations = () => {
    setShowRecommendations(!showRecommendations);
  };

  return (
    <div className="ai-recommendation-container">
      {/* AI Recommendation Button */}
      <button className="ai-recommendation-btn" onClick={toggleRecommendations}>
        AI Health Recommendations
      </button>

      {/* Conditional Rendering of Recommendations */}
      {showRecommendations && (
        <div className="ai-recommendation">
          <h2>AI-Powered Health Recommendations</h2>
          
          <div className="goal-buttons">
            {Object.keys(recommendations).map((goal) => (
              <button
                key={goal}
                className={`goal-button ${selectedGoal === goal ? 'active' : ''}`}
                onClick={() => handleGoalSelection(goal)}
              >
                {goal.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>

          {selectedGoal && (
            <div className="recommendations-list">
              <h3>Recommendations for {selectedGoal.replace(/([A-Z])/g, ' $1').trim()}:</h3>
              <ul>
                {goalRecommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIRecommendation;
