import Image from "next/image";

const Card = ({ title, img, description, amount }) => {
  return (
    <div className="h-[350px] w-[280px] bg-slate-100 rounded-2xl p-3 flex flex-col gap-2 drop-shadow-lg">
      <Image
        src={img}
        alt="img"
        className="rounded-xl max-h-[170px] object-cover"
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-slate-500">{title}</h2>
        <p className="text-sm font-light">{description}</p>
        <div className="flex justify-center align-middle mt-3">
          <p className="text-3xl text-green-500 font-bold">{amount}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
