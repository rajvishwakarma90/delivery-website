
import { useState } from 'react';
import './CustomizeModal.css';

const CustomizeModal = ({ food, onClose, onSave }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientToggle = (ingredient) => {
    setSelectedIngredients(prev => 
      prev.some(ing => ing.name === ingredient.name)
        ? prev.filter(ing => ing.name !== ingredient.name)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Customize {food.name}</h2>
        <div className="ingredients-list">
          {food.ingredients.map(ingredient => (
            <label key={ingredient.name} className="ingredient-item">
              <input
                type="checkbox"
                checked={selectedIngredients.some(ing => ing.name === ingredient.name)}
                onChange={() => handleIngredientToggle(ingredient)}
              />
              {ingredient.name} (+₹{ingredient.price})
            </label>
          ))}
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave(selectedIngredients)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeModal;