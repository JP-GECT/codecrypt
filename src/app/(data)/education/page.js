import VideoCard from "@/components/VideoCard";

import { embedIds } from "@/_constants";

const Education = () => {
  return (
    <div>
      <h1 className="text-[50px] font-bold  font-sans pl-4">Education</h1>
       <div className="flex flex-col gap-4 p-4">
      {embedIds.map((item) => (
        <VideoCard 
        key={item.id}
          embedId={item.id}
          heading = {item.heading}
          description={item.description}
        />
      ))}
    </div>

    </div>
   
  );
};
export default Education;
