import Image from 'next/image';
import delhi from '../../public/delhi.jpg'

const WideCard = () => {
  return (
    <div className="h-[400px] w-full bg-slate-100 rounded-2xl p-3 flex gap-2 drop-shadow-lg mt-2">
      <Image
        src={delhi}
        alt="school"
        className='rounded-xl w-[400px] flex flex-1'
      />
      <div className='flex flex-col gap-3 justify-center align-middle items-center flex-1'>
      <h2 className='font-bold text-[60px]   text-slate-500'>NEW DELHI</h2>
      <p className='text-sm font-light'>this is the description of the expences for a specific type</p>
      
      </div>
      
    </div>
  );
};
export default WideCard;
