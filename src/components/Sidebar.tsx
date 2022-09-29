import { FiHome, FiYoutube, FiBookmark, FiCalendar, FiSettings } from 'react-icons/fi'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const {pathname} = useLocation();
  return (
  <>
    <section className="fixed z-50 h-screen bg-gray-100 w-64">
      <nav className=' flex flex-col gap-4'>
        <section className={`p-2 hover:bg-gray-200 ${pathname === '/' && 'bg-gray-200'}`}>
          <NavLink to="/" className='text-gray-600 hover:bg-gray-200 p-2 flex items-center gap-2'><FiHome className='text-xl text-blue-700' />Home</NavLink>
        </section>
        <section className={`p-2 hover:bg-gray-200 ${pathname === '/program' && 'bg-gray-200'}`}>
          <NavLink to='/program' className='text-gray-600 items-center flex p-2 gap-2'><FiCalendar className='text-blue-700 text-xl' /> Programação </NavLink>
        </section>
        <section className={`p-2 hover:bg-gray-200 ${pathname === '/event' && 'bg-gray-200'}`}>
          <NavLink to='/event' className='text-gray-600 flex gap-2 p-2 items-center'><FiBookmark className='text-blue-700 text-xl' /> Eventos</NavLink>
        </section>
        <section className={`p-2 hover:bg-gray-200 border-b-[1px] border-gray-300 ${pathname === '/recording' && 'bg-gray-200'}`}>
          <NavLink to='/recording' className='text-gray-600 flex gap-2 p-2 items-center'><FiYoutube className='text-blue-700 text-xl' /> Gravações</NavLink>
        </section>
        <section className={`p-2 hover:bg-gray-200 ${pathname === '/settings' && 'bg-gray-200'}`}>
          <NavLink to='/settings' className='text-gray-600 flex gap-2 p-2 items-center'><FiSettings className='text-blue-700 text-xl' /> Gerenciar conteúdo</NavLink>
        </section>
      </nav>
    </section>
  </>

  );
};
