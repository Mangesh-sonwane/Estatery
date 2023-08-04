import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const Filter = ({
  selectedLocation,
  selectedType,
  selectedDate,
  selectedPrice,
  selectLocation,
  selectType,
  selectPrice,
  selectDate,
  submitForm,
}) => {
  return (
    <div>
      <form className='bg-white w-full max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto mt-10 py-4 shadow-sm rounded-lg '>
        <div className='flex flex-col items-center md:flex-row lg:flex-row justify-evenly'>
          <div className='pt-2 text-center space-y-2 items-center'>
            <p className='text-start text-gray-400 text-md font-bold'>
              Location
            </p>
            <select
              className='select select-ghost w-full max-w-xs pl-0 font-bold focus:outline-none text-lg text-darkText'
              value={selectedLocation}
              onChange={selectLocation}
            >
              <option value='All'>All</option>
              <option value='New York'>New York</option>
              <option value='United States'>United States</option>
              <option value='Russia'>Russia</option>
              <option value='Canada'>Canada</option>
            </select>
          </div>
          {/*  */}
          <div className='h-12 w-[2px] rounded-full bg-gray-300 '></div>
          {/*  */}
          <div className='pt-2 text-center space-y-2 items-center'>
            <p className='text-start text-gray-400 text-md font-bold'>When</p>
            <div className='flex flex-row items-center'>
              <input
                type='date'
                value={selectedDate}
                onChange={selectDate}
                className='w-full max-w-xs text-lg font-semibold text-darkText focus:outline-none'
              />
            </div>
          </div>
          {/*  */}
          <div className='h-12 w-[2px] rounded-full bg-gray-300 '></div>
          {/*  */}
          <div className='pt-2 text-center space-y-2 items-center '>
            <p className='text-start text-gray-400 text-md font-bold'>Price</p>
            <select
              className='w-full max-w-xs pl-0 font-bold focus:outline-none text-lg  text-darkText'
              value={selectedPrice}
              onChange={selectPrice}
            >
              <option value={0}>All</option>
              <option value={1}>$0 - $100,000</option>
              <option value={2}>$100,000 - $150,000</option>
              <option value={4}>$200,000 - $300,000</option>
            </select>
          </div>
          {/*  */}
          <div className='h-12 w-[2px] rounded-full bg-gray-300 '></div>
          {/*  */}
          <div className='pt-2 text-center space-y-2 items-center'>
            <p className='text-start text-gray-400 text-md font-bold'>
              Property Type
            </p>
            <select
              className='select select-ghost w-full max-w-xs pl-0 font-bold focus:outline-none text-lg text-darkText'
              value={selectedType}
              onChange={selectType}
            >
              <option value='All'>All</option>
              <option value='House'>Houses</option>
              <option value='Villa'>Villa</option>
              <option value='Apartment'>Aparments</option>
            </select>
          </div>
          {/*  */}
          <div className='h-12 w-[2px] rounded-full bg-gray-300 '></div>
          {/*  */}
          <div className='flex justify-center items-center'>
            <button
              className='bg-blue text-white font-base px-4 py-2 rounded-md'
              onClick={submitForm}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
