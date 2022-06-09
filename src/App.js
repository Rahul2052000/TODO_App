import React, { useState } from 'react';

import TODOGoalList from './components/TODOGoals/TODOGoalList/TODOGoalList';
import TODOInput from './components/TODOGoals/TODOInput/TODOInput';
import './App.css';

const App = () => {
  const [TODOGoals, setTODOGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the TODO!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setTODOGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setTODOGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (TODOGoals.length > 0) {
    content = (
      <TODOGoalList items={TODOGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <TODOInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {TODOGoals.length > 0 && (
          <TODOGoalList
            items={TODOGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
