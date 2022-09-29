import { FiPlus } from "react-icons/fi";

interface IButtonOpenModalProps {
  title: string;
  isOpen: boolean;
  Modal(status: boolean): void;
}

export const ButtonOpenModal: React.FC<IButtonOpenModalProps> = ({ title, isOpen, Modal }: IButtonOpenModalProps) => {
  return (
    <button className="flex gap-2 p-2 text-lg items-center rounded-lg bg-blue-600 text-white" onClick={() => Modal(!isOpen)}>
      {title}
      <FiPlus />
    </button>
  );
};
