import VideoCard from "@/components/VideoCard";

import { embedIds } from "@/_constants";

const Education = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {embedIds.map((item) => (
        <VideoCard
          embedId={item.id}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default Education;
