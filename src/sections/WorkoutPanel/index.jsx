import { useContext } from 'react';
import {
  ADD_ACTIVE_EXERCISE,
  ADD_EXERCISE,
  DELETE_ACTIVE_EXERCISE,
} from '../../context/const';
import { ExerciseContext } from '../../context/ExerciseContext';

/* eslint-disable react/prop-types */
const WorkoutPanel = () => {
  const { whole, dispatch, activeExercise } = useContext(ExerciseContext);
  const handler = (e, type) => {
    if (type === 'reps') {
      dispatch({
        type: ADD_ACTIVE_EXERCISE,
        payload: {
          ...activeExercise,
          reps: e.target.value,
        },
      });
    }
    if (type === 'weight') {
      dispatch({
        type: ADD_ACTIVE_EXERCISE,
        payload: {
          ...activeExercise,
          weight: e.target.value,
        },
      });
    }
  };

  const addHandler = () => {
    const { name, weight, reps, image } = { ...activeExercise };
    if (!name || !reps || !weight) {
      return;
    }
    dispatch({
      type: ADD_EXERCISE,
      payload: { name, weight, reps, image },
    });
    dispatch({
      type: DELETE_ACTIVE_EXERCISE,
    });
  };
  return (
    <>
      <div className='min-w-[700px] h-screen p-3 '>
        <h3 className='text-xl uppercase my-5'>active</h3>
        <div className='flex bg-indigo-800 p-5 rounded-2xl text-white'>
          <div className='w-2/3'>
            <h2 className='text-xl uppercase'>
              {`Your exersice: ${activeExercise.name}`}
            </h2>
            <div className='py-3 my-2'>
              <div>
                <p className='uppercase py-2'>reps:</p>
                <input
                  onChange={(e) => handler(e, 'reps')}
                  value={activeExercise.reps}
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div>
                <p className='uppercase py-2'>weight:</p>
                <input
                  onChange={(e) => handler(e, 'weight')}
                  value={activeExercise.weight}
                  type='text'
                />
              </div>
            </div>
            <button
              className='bg-yellow-300 rounded-xl w-full p-3 text-black'
              onClick={() => addHandler()}
            >
              add
            </button>
          </div>
          <div className='w-full flex items-center justify-center'>
            {activeExercise.image && (
              <img className='w-24 h-24' src={activeExercise.image} alt='' />
            )}
          </div>
        </div>

        <h3 className='text-2xl my-3 uppercase'>Your program:</h3>
        <div className=' uppercase w-full bg-slate-200 rounded-xl flex items-center justify-center p-10'>
          {whole.length > 0 ? (
            <div className='flex items-center justify-center flex-wrap'>
              {whole.map(({ name, reps, weight, image }) => (
                <div
                  key={name + reps}
                  className='bg-purple-400 m-4 p-4 rounded-lg flex flex-col'
                >
                  <h3 className=' text-lg my-2'> {`${name}`}</h3>
                  <p className='my-3'>{`reps: ${reps}`}</p>
                  <p>{`weight: ${weight}`}</p>
                  <div>
                    <img
                      className='w-24 m-3 rounded-lg'
                      src={image}
                      alt='ex img'
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-3xl'>you have not done anything yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutPanel;
