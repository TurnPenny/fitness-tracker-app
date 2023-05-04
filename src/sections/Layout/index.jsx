import { Route, Routes } from 'react-router-dom';
import AddExercisePage from '../../pages/AddExercisePage';

const Layout = () => {
  return (
    <div className='flex bg-slate-400 w-full h-screen'>
      <Routes>
        <Route path='/exercise' element={<AddExercisePage />} />
      </Routes>
    </div>
  );
};

export default Layout;
