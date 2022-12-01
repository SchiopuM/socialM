import React from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import SearchField from './components/SearchField';

const Navbar: React.FC = () => (
  <div className='flex justify-between items-center py-5 space-x-8 px-layout top-0 shadow-md w-[100%] overflow-hidden bg-white fixed'>
    <div className='text-primary font-bold text-4xl cursor-pointer'>
      SocialM
    </div>
    <div className='flex justify-between content-center w-[32rem] h-6 text-gray-500'>
      <HomeIcon className='text-primary' />
      <UserGroupIcon />
      <BriefcaseIcon />
      <BellIcon />
      <ChatBubbleOvalLeftEllipsisIcon />
      <UserIcon />
    </div>
    <SearchField />
  </div>
);

export default Navbar;
