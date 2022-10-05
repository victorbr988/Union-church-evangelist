import { Features } from "../components/Features";
import { FiYoutube, FiBookmark, FiCalendar } from 'react-icons/fi'
import { Sidebar } from "../components/Sidebar";

export const Home: React.FC = () => {
  return (
    <section className="bg-blue-600">
      <section className="backgroundImage h-[400px]">
        <h2 className="flex items-center bg-black/50 px-2 text-white font-bold text-3xl h-full justify-center">Unindo as pessoas para a graça de Deus</h2>
      </section>
      <main className=" justify-center items-center">
        <h2 className="text-center p-10 text-3xl text-white">Fique por dentro de tudo que acontece</h2>
        <section>
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Features 
              title="Eventos especiais"
              description="Veja todos os eventos que acontecerão e venha para a casa de Deus"
              >
                <FiBookmark className="text-2xl text-blue-600" />
              </Features>
              <Features 
                title="Programação dos Cultos"
                description="Fique por dentro dos horários dos cultos"
              >
                <FiCalendar className="text-2xl text-blue-600" />
              </Features>
              <Features 
                title="Gravações"
                description="Assista aos cultos e eventos que são gravados"
              >
                <FiYoutube className="text-2xl text-blue-600" />
              </Features>
            </div>  
          </div>
        </section>
      </main>
    </section>
  );
};
