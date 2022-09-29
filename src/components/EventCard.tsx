import logo from '../assets/church-logo.png';
import {FiMapPin, FiBookmark, FiClock, FiCalendar, FiArrowUpRight} from 'react-icons/fi';

interface IEventCardprops {
  title: string;
  time: string;
  date: string;
  location: string
}

export const EventCard: React.FC<IEventCardprops> = ({title, time, date, location}: IEventCardprops) => {
  return (
    <main className="flex flex-col rounded-lg hover:scale-105 transition cursor-pointer bg-gray-100 w-96 p-4 shadow-xl">
      <section className="flex justify-between items-center mb-6">
        <div className='flex items-center gap-2'>
          <img src={logo} className='w-12 h-12' alt="Logo" />
          <h1 className='tex-lg'>{title}</h1>
        </div>
        <FiBookmark className='text-blue-600 text-2xl' />
      </section>
      <section className='relative'>
        <div className='flex flex-col'>
          <p className=' flex text-gray-600 items-center gap-2'><FiMapPin className='text-blue-600' /> {location}</p>
          <p className=' flex text-gray-600 items-center gap-2'><FiClock className='text-blue-600' /> {time}</p>
          <p className=' flex text-gray-600 items-center gap-2'><FiCalendar className='text-blue-600' /> {date}</p>
        </div>
        <p className='absolute right-8 bottom-1 text-sm'>Ver Detalhes</p>
        <FiArrowUpRight className='text-blue-600 absolute right-0 bottom-1 text-2xl' />
      </section>
    </main>
  );
};
