import { useState } from "react";
import { AddNewContent } from "../components/AddNewContent";
import { ButtonOpenModal } from "../components/ButtonOpenModal";
import { Modal } from "../components/Modal";

export const ManageContent: React.FC = () => {
  const [isOpenmodalEvent, OpenAddEventModal] = useState(false)
  const [isOpenmodalProgram, OpenAddProgramModal] = useState(false)
  const [isOpenmodalVideo, OpenAddVideoModal] = useState(false)
  return (
    <div className="min-h-screen backgroundImageSecond">
      <section className="flex gap-2 justify-center flex-wrap sm:my-0 my-10 items-center h-40">
        <ButtonOpenModal
          title="Adicionar evento"
          isOpen={isOpenmodalEvent}
          Modal={OpenAddEventModal}
        />
        <ButtonOpenModal
          title="Adicionar programação de culto"
          isOpen={isOpenmodalProgram}
          Modal={OpenAddProgramModal}
        />
        <ButtonOpenModal
          title="Adicionar vídeo"
          isOpen={isOpenmodalVideo}
          Modal={OpenAddVideoModal}
        />
      </section>

      <Modal
        title="Adicionar um novo evento"
        isOpen={isOpenmodalEvent}
        closeModal={OpenAddEventModal}
      >
        <AddNewContent />
      </Modal>

      <Modal
        title="Adicionar uma programação"
        isOpen={isOpenmodalProgram}
        closeModal={OpenAddProgramModal}
      >
        <AddNewContent />
      </Modal>

      <Modal
        title="Adicionar um novo vídeo"
        isOpen={isOpenmodalVideo}
        closeModal={OpenAddVideoModal}
      >
        <div className='flex flex-col mt-10'>
          <section className='flex flex-col gap-4 justify-center'>
            <select id="label-video" className="border-blue-600 rounded-lg w-32  border-2 p-2">
              <option>Cultos</option>
              <option>Eventos</option>
            </select>
            <input
              className="p-2 border-2 border-blue-600 rounded-lg"
              type="text"
              placeholder="Cole aqui o link do vídeo"
            />
            <input
              type="date"
              className="p-2 border-2 border-blue-600 rounded-lg" 
              placeholder="Data do evento" 
            />
          </section>
        </div>
      </Modal>
    </div>
  );
};
