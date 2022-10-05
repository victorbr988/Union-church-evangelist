import logo from '../assets/church-logo.png';
import { FiAlignJustify } from 'react-icons/fi';

interface IHeaderProps {
  setIsOpen(value: boolean): void;
  isOpen: boolean;
}
export const Header: React.FC<IHeaderProps> = ({setIsOpen, isOpen}: IHeaderProps) => {
  return (
    <div className='fixed w-full'>
      <header className='flex w-full items-center gap-10 bg-gray-100 px-4 py-2'>
        <FiAlignJustify
          onClick={() => setIsOpen(!isOpen)}
          className='text-3xl cursor-pointer text-blue-700'
        />
        <section className='flex items-center gap-5'> 
          <img src={logo} className='w-12 h-12' alt="Logo" />
          <h1 className='text-lg text-gray-600'>Igreja adventista do sétimo dia</h1>
        </section>
      </header>
    </div>
  );
};
