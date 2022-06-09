import React from 'react';

import TODOGoalItem from '../TODOGoalItem/TODOGoalItem';
import './TODOGoalList.css';

const TODOGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <TODOGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </TODOGoalItem>
      ))}
    </ul>
  );
};

export default TODOGoalList;
