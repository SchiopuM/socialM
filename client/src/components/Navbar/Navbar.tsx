import React from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Navbar: React.FC = () => (
  <div className="flex justify-between items-center pt-5 px-[8.75rem]">
    <div className="text-primary font-bold text-4xl">SocialM</div>
    <div className="flex justify-between content-center w-[32rem] h-fit">
      <HomeIcon className="h-6 text-primary" />
      <UserGroupIcon className="h-6 text-gray-500" />
      <BriefcaseIcon className="h-6 text-gray-500" />
      <BellIcon className="h-6 text-gray-500" />
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 text-gray-500" />
      <UserIcon className="h-6 text-gray-500" />
    </div>
  </div>
);

export default Navbar;
