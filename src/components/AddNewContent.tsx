export const AddNewContent: React.FC = () => {
  return (
    <section className="mt-10 flex justify-center gap-2 flex-col">
      <section className="flex flex-wrap gap-2">
        <input type="text" className="p-2 w-full border-2 border-blue-600 rounded-lg" placeholder="Nome" />
        <input type="text" className="p-2 w-full border-2 border-blue-600 rounded-lg" placeholder="Local" />
      </section>
      <section className="flex gap-2 justify-center items-center">
        <input type="time" defaultValue='12:12' className="p-2 border-2 border-blue-600 rounded-lg" />
        <input type="date" defaultValue='2022-06-13' className="p-2 border-2 border-blue-600 rounded-lg" />
      </section>
    </section>
  );
};
