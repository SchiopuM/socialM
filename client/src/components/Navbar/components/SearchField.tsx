import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchField: React.FC = () => {
  return (
    <div className='flex items-center '>
      <input
        className='block px-4 bg-gray-100 outline-none h-10 rounded-l-2xl'
        placeholder='Search for anything...'
        type='text'
        name='search'
      />
      <button className='bg-primary h-10 flex items-center rounded-r-2xl px-4 active:bg-sky-500'>
        <MagnifyingGlassIcon className='h-5 text-white' />
      </button>
    </div>
  );
};

export default SearchField;
