import { FiInstagram, FiYoutube, FiAward, FiCalendar } from 'react-icons/fi';
import churchLogo from '../assets/church-logo.png';
import churchHandler from '../assets/church-handlers.jpeg';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { VideosRecording } from '../components/VideosRecording';

export const Recording: React.FC = () => {
  return (
    <main className='min-h-screen bg-blue-600 pb-4'>
      <section className='w-full'>
        <div className='lg:mx-40'>
          <header className='flex h-52 justify-between px-4 py-2'>
            <img src={churchLogo} className='w-10 h-10' alt='logo da igreja' />
            <div className='flex gap-3 mt-2'>
              <a
                className='h-4 text-white'
                target='_blank'
                href='https://www.youtube.com/c/AdventistasJardimPanorama'
              >
                <FiYoutube className='text-xl' />
              </a>
              <a
                className='h-4 text-white'
                target='_blank'
                href='https://www.instagram.com/adventistasjardimpanorama/'
              >
                <FiInstagram className='text-xl' />
              </a>
            </div> 
          </header>
          <section className='p-4 pb-16 lg:gap-0 lg:flex-row flex flex-col lg:justify-between'>
            <div>
              <h2 className='lg:text-[50px] text-3xl lg:w-96 text-white  leading-tight font-semibold'>Explore vídeos</h2>
              <p className='text-xl lg:w-96 w-full text-gray-300'>Assista todos os nossos vídeos, novos conteúdos o tempo todo!</p>
              <div className='mt-10 flex gap-3'>
                <ButtonPrimary>
                  <FiAward className='text-lg' />
                  Cultos
                </ButtonPrimary>
                <ButtonPrimary>
                  <FiCalendar className='text-lg' />
                  Eventos
                </ButtonPrimary> 
              </div>
            </div>
            <div className='lg:block flex justify-center'>
              <img
                className='lg:w-96 lg:h-96 w-40 h-40 box-shadow'
                src={churchHandler}
                alt="mãos levantadas em adoração" />
            </div>
          </section>
        </div>
      </section>
      <section className='flex flex-wrap gap-8 justify-center mt-10'>
        <VideosRecording 
          label='Cultos'
          date='20/08/2022'
          linkVideo='https://www.youtube.com/watch?v=bhy-_N0HSzQ'
        />
        <VideosRecording 
          label='Cultos'
          date='20/08/2022'
          linkVideo='https://www.youtube.com/watch?v=bhy-_N0HSzQ'
        />
        <VideosRecording 
          label='Cultos'
          date='20/08/2022'
          linkVideo='https://www.youtube.com/watch?v=bhy-_N0HSzQ'
        />
      </section>
    </main>
  );
};
