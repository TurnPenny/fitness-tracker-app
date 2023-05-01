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
const whole = [
  //   { name: '', reps: '', weight: '', image: '' },
  //   { name: '', reps: '', weight: '', image: '' },
  //   { name: '', reps: '', weight: '', image: '' },
  //   { name: '', reps: '', weight: '', image: '' },
];

const Main = () => {
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
      {/* left part */}
      <div className='flex w-full flex-col justify-center items-center'>
        <h2 className='uppercase text-3xl m-2'>Choose muscle group</h2>
        {activeList && (
          <ul className='flex'>
            {listExer.map(({ category, image }) => (
              <li
                onClick={() => {
                  setExersiceChoose(category);
                }}
                key={category}
              >
                <div className=' cursor-pointer flex flex-col items-center rounded-xl p-7 bg-slate-400 m-2'>
                  <p className='text-xl uppercase my-5'>{category}</p>
                  <div className='w-24 h-24'>
                    <img src={image} alt='exersice image' />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {exersiceChoose && (
          <div className='flex bg-slate-400 items-center flex-col p-3 my-2'>
            <h3 className='text-2xl uppercase'>List of exercises:</h3>
            <ul className='flex'>
              {listExer.map((item) => {
                if (item.category === exersiceChoose) {
                  return item.exersises.map(({ name, image }) => (
                    <li
                      className=' cursor-pointer m-3 bg-green-200 rounded-xl p-3'
                      key={Math.random()}
                      onClick={() => {
                        setObj(() => ({
                          ...exobj,
                          name,
                          image,
                        }));
                      }}
                    >
                      {name}
                      <img className='w-24' src={image} alt='' />
                    </li>
                  ));
                }
              })}
            </ul>
          </div>
        )}
      </div>
      {/* left part */}
      {/* right part */}
      <div className='min-w-[700px] h-screen p-3 '>
        <h3 className='text-xl uppercase my-5'>active</h3>
        <div className='flex bg-indigo-800 p-5 rounded-2xl text-white'>
          <div className='w-2/3'>
            <h2 className='text-xl uppercase'>
              {`Your exersice: ${exobj.name}`}
            </h2>
            <div className='py-3 my-2'>
              <div>
                <p className='uppercase py-2'>reps:</p>
                <input
                  onChange={(e) => handler(e, 'reps')}
                  value={exobj.reps}
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div>
                <p className='uppercase py-2'>weight:</p>
                <input
                  onChange={(e) => handler(e, 'weight')}
                  value={exobj.weight}
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
            <img className='w-24 h-24' src={exobj.image} alt='' />
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
                  <img
                    className='w-24 m-3 rounded-lg'
                    src={image}
                    alt='ex img'
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='text-3xl'>you have not done anything yet</p>
          )}
        </div>
      </div>
      {/* right part */}
    </div>
  );
};

export default Main;
