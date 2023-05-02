import ExercisesList from '../ExercisesList';
import MuscleGroup from '../MuscleGroup';
import WorkoutPanel from '../WorkoutPanel';
import { useState } from 'react';
import chestImage from '../../assets/chest.jpg';
import backImage from '../../assets/back.jpg';
import liftImage from '../../assets/lift.jpg';
import pushUpImage from '../../assets/push-up.jpg';
import pullUpImage from '../../assets/pull-up.jpg';

const listExer = [
  {
    category: 'chest',
    image: chestImage,
    exersises: [
      { name: 'push up', ccal: 2, image: pushUpImage },
      { name: 'lift', ccal: 3, image: liftImage },
    ],
  },
  {
    category: 'back',
    image: backImage,
    exersises: [
      { name: 'pullups', ccal: 2, image: pullUpImage },
      { name: 'lift weight', ccal: 3, image: liftImage },
    ],
  },
];
const whole = [];

const Layout = () => {
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

  const addHandler = () => {
    const { name, weight, reps, image } = { ...exobj };
    if (!name || !reps || !weight) {
      return;
    } else {
      whole.push({ name, weight, reps, image });
      setObj({ name: '', reps: '', weight: '', image: '' });
    }
  };
  return (
    <div className='flex w-full h-screen'>
      <MuscleGroup
        activeList={activeList}
        listExer={listExer}
        setExersiceChoose={setExersiceChoose}
        exersiceChoose={exersiceChoose}
        setObj={setObj}
        exobj={exobj}
      />
      <ExercisesList />
      <WorkoutPanel
        exobj={exobj}
        whole={whole}
        addHandler={addHandler}
        handler={handler}
      />
    </div>
  );
};

export default Layout;
