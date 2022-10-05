import manSleep from '../assets/homem-dormindo.png'

export const DefaultContent: React.FC = () => {
  return (
    <div className="flex items-center gap-8 mt-10">
      <h1 className="w-xl text-white lg:text-3xl text-2xl">Nada por aqui</h1>
      <img src={manSleep} className='lg:w-60 lg:h-60 w-24 h-24' alt="homem-dormindo" />
    </div>
  );
};
