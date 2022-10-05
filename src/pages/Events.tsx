import { DefaultContent } from "../components/defaultContent";
import { EventCard } from "../components/EventCard";
  const allEvents = true;

export const ViewEvents: React.FC = () => {
  return (
    <section className="flex bg-blue-600 min-h-screen flex-col">
      <header>
        <h1 className="text-center text-white font-semibold text-3xl p-2">Explore nossos eventos</h1>
      </header>
      <section className="flex flex-wrap gap-8 pt-10 justify-center">
        {allEvents && <DefaultContent />}
      </section>
    </section>
  );
};
