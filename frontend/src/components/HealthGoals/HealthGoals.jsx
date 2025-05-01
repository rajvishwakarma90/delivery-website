import React from 'react';
import './HealthGoals.css';

const goals = [
  "Weight Loss",
  "Muscle Gain",
  "Balanced Diet",
  "Detox / Clean Eating",
  "Heart Health",
  "Low Cholesterol",
  "Low Sugar"
];

const HealthGoals = ({ onGoalSelect }) => {
  return (
    <div className="health-goals-container">
      <h2>Suggestions Based on Your Goals</h2>
      <div className="goal-buttons">
        {goals.map((goal, index) => (
          <button
            key={index}
            onClick={() => onGoalSelect(goal)}
            className="goal-btn"
          >
            {goal}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HealthGoals;
