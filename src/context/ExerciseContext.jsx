import { createContext } from 'react';
import chestImage from '../assets/chest.jpg';
import backImage from '../assets/back.jpg';
import liftImage from '../assets/lift.jpg';
import pushUpImage from '../assets/push-up.jpg';
import pullUpImage from '../assets/pull-up.jpg';
import { useReducer } from 'react';
export const ExerciseContext = createContext();

export const listExer = [
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

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        whole: [...state.whole, action.payload],
      };
  }
};

const initialState = {
  whole: [],
};

export function ExerciseProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <ExerciseContext.Provider
      value={{
        whole: state.whole,
        dispatch,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}
