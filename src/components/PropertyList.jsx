import PropertyCard from './PropertyCard';

const PropertyList = ({ list }) => {
  return (
    <div className='grid grid-cols-1 gap-8 my-12 md:grid-cols-2 xl:grid-cols-3'>
      {list.map((item) => (
        <PropertyCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PropertyList;
