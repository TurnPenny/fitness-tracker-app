import Layout from './sections/Layout';
import Nav from './sections/Nav';
import Sidebar from './sections/Sidebar';

export default function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Layout />
    </div>
  );
}
