import React, { useState } from 'react';
import { listExer } from '../../context/ExerciseContext';
import ExercisesList from '../../sections/ExercisesList';
import MuscleGroup from '../../sections/MuscleGroup';
import WorkoutPanel from '../../sections/WorkoutPanel';

const AddExercisePage = (props) => {
  const [activeList, setActiveList] = useState(true);
  const [exersiceChoose, setExersiceChoose] = useState('');
  const [exobj, setObj] = useState({
    name: '',
    reps: '',
    weight: '',
    image: '',
  });

  const handler = (e, type) => {
    if (type === 'reps') {
      console.log('type reps', exobj);
      setObj((exobj) => ({
        ...exobj,
        reps: e.target.value,
      }));
    }
    if (type === 'weight') {
      console.log('type weight', exobj);
      setObj((exobj) => ({
        ...exobj,
        weight: e.target.value,
      }));
    }
  };

  return (
    <div>
      <MuscleGroup
        activeList={activeList}
        listExer={listExer}
        setExersiceChoose={setExersiceChoose}
        exersiceChoose={exersiceChoose}
        setObj={setObj}
        exobj={exobj}
      />
      <ExercisesList />
      <WorkoutPanel exobj={exobj} handler={handler} />
    </div>
  );
};

export default AddExercisePage;
