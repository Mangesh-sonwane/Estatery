import { IoIosArrowDown } from 'react-icons/io';

const Search = ({ value, changeInput }) => {
  return (
    <div>
      <div className='flex justify-between items-center py-5 '>
        <h1 className='font-bold text-5xl text-darkText'>
          Search properties to rent
        </h1>
        <div className=' items-center flex bg-white py-2 rounded-md  font-medium border-gray-300 border-2 shadow-sm'>
          <input
            type='text'
            placeholder='Search with search Bar'
            className='rounded h-6 p-3 outline-none'
            value={value}
            onChange={changeInput}
          />
          <IoIosArrowDown className='m-2 text-xl bg-bagblue rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Search;
