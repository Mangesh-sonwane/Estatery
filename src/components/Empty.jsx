import { FaRegSadTear } from 'react-icons/fa';

const Empty = () => {
  return (
    <div className='flex justify-center items-center  mt-48'>
      <div className=' space-y-8 text-blue text-center'>
        <FaRegSadTear className='text-6xl ml-20' />
        <h6 className='font-semibold text-center text-xl bg-bagblue px-4 py-2 text-blue rounded-md shadow-sm'>
          Sorry No Items To Display!
        </h6>
      </div>
    </div>
  );
};

export default Empty;
