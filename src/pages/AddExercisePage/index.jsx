import React, { useState } from 'react';
import { listExer } from '../../context/ExerciseContext';
import ExercisesList from '../../sections/ExercisesList';
import MuscleGroup from '../../sections/MuscleGroup';
import WorkoutPanel from '../../sections/WorkoutPanel';

const AddExercisePage = (props) => {
  const [activeList, setActiveList] = useState(true);
  const [exersiceChoose, setExersiceChoose] = useState('');

  return (
    <div>
      <MuscleGroup
        activeList={activeList}
        setExersiceChoose={setExersiceChoose}
        exersiceChoose={exersiceChoose}
      />
      <ExercisesList />
      <WorkoutPanel />
    </div>
  );
};

export default AddExercisePage;
