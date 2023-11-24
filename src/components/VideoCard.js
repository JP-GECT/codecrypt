const VideoCard = ({ embedId, description }) => {
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div className="lg:w-1/2 aspect-w-16 aspect-h-9">
        <iframe
          width="800" // Adjusted width
          height="450" // Adjusted height
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-lg min-h-[300px]"
        ></iframe>
      </div>
      <div className="lg:w-1/2 p-4">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
