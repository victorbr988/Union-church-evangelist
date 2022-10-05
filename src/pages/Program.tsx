import { DefaultContent } from "../components/defaultContent";
// import { EventCard } from "../components/EventCard";

export const Program: React.FC = () => {
  const allPrograms = true
  return (
    <section className="flex min-h-screen bg-blue-600 flex-col">
      <header>
        <h1 className="text-center text-white font-semibold text-3xl p-2">Programação semanal</h1>
      </header>
      <section className="flex flex-wrap gap-8 pt-10 justify-center">
        {allPrograms && <DefaultContent />}
      </section>
    </section>
  );
};
