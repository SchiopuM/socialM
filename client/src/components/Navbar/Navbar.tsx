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
  <div className='flex justify-between items-center py-5 space-x-8 px-layout'>
    <div className='text-primary font-bold text-4xl'>SocialM</div>
    <div className='flex justify-between content-center w-[32rem] h-fit'>
      <HomeIcon className='h-6 text-primary' />
      <UserGroupIcon className='h-6 text-gray-500' />
      <BriefcaseIcon className='h-6 text-gray-500' />
      <BellIcon className='h-6 text-gray-500' />
      <ChatBubbleOvalLeftEllipsisIcon className='h-6 text-gray-500' />
      <UserIcon className='h-6 text-gray-500' />
    </div>
    <SearchField />
  </div>
);

export default Navbar;
