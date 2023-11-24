import Image from 'next/image';
import schoolImg from '../../public/school.jpg'

const Card = () => {
  return (
    <div className="h-[350px] w-[280px] bg-slate-100 rounded-2xl p-3 flex flex-col gap-2 drop-shadow-lg">
      <Image
        src={schoolImg}
        alt="school"
        className='rounded-xl '
      />
      <div className='flex flex-col gap-3'>
      <h2 className='font-bold text-lg text-slate-500'>Card Title</h2>
      <p className='text-sm font-light'>this is the description of the expences for a specific type</p>
      <div className='flex justify-center align-middle mt-3'>
      <p className='text-3xl text-green-500 font-bold'>5000</p>
      </div>
      </div>
      
    </div>
  );
};
export default Card;
