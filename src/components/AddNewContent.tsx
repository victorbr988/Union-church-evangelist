export const AddNewContent: React.FC = () => {
  return (
    <section className="mt-10 flex justify-center gap-2 flex-col">
      <section className="flex gap-2">
        <input type="text" className="p-2 border-2 border-blue-600 rounded-lg" placeholder="Nome" />
        <input type="text" className="p-2 border-2 border-blue-600 rounded-lg" placeholder="Local" />
      </section>
      <section className="flex gap-2 justify-center">
        <input type="time" className="p-2 border-2 border-blue-600 rounded-lg" placeholder="Horário de início"  />
        <input type="date"className="p-2 border-2 border-blue-600 rounded-lg" placeholder="Data do evento" />
      </section>
    </section>
  );
};
