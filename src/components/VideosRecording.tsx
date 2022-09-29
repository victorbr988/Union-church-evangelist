type LabelContent = 'Cultos' | 'Eventos';

interface VideosRecordingProps {
  label: LabelContent
  linkVideo: string;
  date: string
}

export const VideosRecording: React.FC<VideosRecordingProps>= ({ label, date, linkVideo }) => {
  const idVideo: string | undefined = linkVideo.replace('https://www.youtube.com/watch?v=', '');

  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-xl rounded-lg">
        <div className="">
          <h2 className="bg-blue-600 w-20 m-2 text-center rounded-3xl text-gray-100 text-sm">{label}</h2>
          <p className="m-2 w-22 flex"> Dia: {date}</p>
        </div>
        {
          idVideo && (<iframe
          className="lg:w-[560px] lg:h-[315px] w-full h-80"
          src={`https://www.youtube.com/embed/${idVideo}`}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          )
        }
      </div>
    </div>
  );
};
