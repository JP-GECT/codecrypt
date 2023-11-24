const VideoCard = ({ embedId, description,heading }) => {
  return (
    <div className="flex  justify-center lg:justify-start bg-slate-100 drop-shadow-sm p-3 rounded-2xl hover:bg-slate-200">
      <div className="lg:w-1/2 aspect-w-16 aspect-h-9">
        <iframe
          width="800" // Adjusted width
          height="450" // Adjusted height
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-2xl min-h-[300px]"
        ></iframe>
      </div>
      <div className="lg:w-1/2 p-4 flex flex-col  gap-3 ">
        <h2 className="text-[30px] font-bold justify-center items-start">{heading}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
