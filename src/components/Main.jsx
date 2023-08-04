import Search from './Search';
import Filter from './Filter';
import PropertyList from './PropertyList';
import { housingData } from '../util/data';
import { useState, useEffect } from 'react';
import Empty from './Empty';

const Main = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedType, setSelectedType] = useState('All');
  const [searchInput, setSearchInput] = useState('');

  const [list, setList] = useState(housingData);
  const [resultsFound, setResultsFound] = useState(true);

  const handleSelectLocation = (event) =>
    setSelectedLocation(event.target.value);
  const handleSelectDate = (event) => setSelectedDate(event.target.value);
  const handleSelectPrice = (event) => setSelectedPrice(event.target.value);
  const handleSelectType = (event) => setSelectedType(event.target.value);

  const [originalData] = useState(housingData);

  const applyFilters = () => {
    let updatedList = originalData;

    // Location filter applied
    if (selectedLocation !== 'All') {
      updatedList = updatedList.filter(
        (item) => item.country === selectedLocation
      );
    }

    // Property Type filter applied
    if (selectedType !== 'All') {
      updatedList = updatedList.filter((item) => item.type === selectedType);
    }

    // Price filter applied
    if (selectedPrice && selectedPrice !== '0') {
      let minPrice = 0;
      let maxPrice = 300000;

      if (selectedPrice === '1') {
        maxPrice = 100000;
      } else if (selectedPrice === '2') {
        minPrice = 100000;
        maxPrice = 150000;
      } else if (selectedPrice === '3') {
        minPrice = 150000;
        maxPrice = 200000;
      } else {
        minPrice = 200000;
        maxPrice = 300000;
      }

      updatedList = updatedList.filter(
        (item) =>
          parseInt(item.price) >= minPrice && parseInt(item.price) <= maxPrice
      );
    }

    // Date filter applied
    if (selectedDate) {
      updatedList = updatedList.filter((item) => {
        const moveDate = new Date(item.availableFrom);
        const selectedDateObj = new Date(selectedDate);

        // Compare dates using timestamp values
        return moveDate.getTime() >= selectedDateObj.getTime();
      });
    }

    // Search filter applied
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList); // Update the list with the items filtered
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };
  return (
    <div>
      <div className=' mt-12 max-w-6xl mx-auto'>
        <Search
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />
        <Filter
          selectedLocation={selectedLocation}
          selectedType={selectedType}
          selectedDate={selectedDate}
          selectedPrice={selectedPrice}
          selectLocation={handleSelectLocation}
          selectType={handleSelectType}
          selectPrice={handleSelectPrice}
          selectDate={handleSelectDate}
          submitForm={handleSubmit}
        />
        {/* result */}
        <>{resultsFound ? <PropertyList list={list} /> : <Empty />}</>
      </div>
      {/*  */}
    </div>
  );
};

export default Main;
