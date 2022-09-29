import { EventCard } from "../components/EventCard";

export const ViewEvents: React.FC = () => {
  return (
    <section className="flex bg-blue-600 min-h-screen flex-col">
      <header>
        <h1 className="text-center text-white font-semibold text-3xl p-2">Explore nossos eventos</h1>
      </header>
      <section className="flex flex-wrap gap-8 pt-10 justify-center">
        <EventCard
          title="Vigília Jovem"
          location="Jardim Panorama"
          date="10/10/2022"
          time="09:00 ás 12:00"
        />
      </section>
    </section>
  );
};
