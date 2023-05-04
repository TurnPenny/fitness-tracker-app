import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../../context/ExerciseContext';

const Sidebar = () => {
  const state = useContext(ExerciseContext);
  return (
    <div className=' bg-red-200 w-[300px] p-5'>
      <div>Profile image</div>
      <ul>
        <li onClick={() => console.log(state)}>My training</li>
        <li>Weight curve</li>
        <li>
          <Link to='/exercise'>Add exercise</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
