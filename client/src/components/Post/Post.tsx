import React from 'react';
import {
  EllipsisVerticalIcon,
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
  ShareIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';
import DevImg from '../../assets/dev.png';

const User: React.FC = () => {
  return (
    <div className='flex items-center cursor-pointer w-[fit-content]'>
      <img
        src={DevImg}
        alt='userImg'
        className='rounded-[18px] align-middle h-[44px] w-[44px]'
      />

      <div className='ml-[10px]'>
        <p className='font-semibold'>Nume Premnume</p>
        <p className='text-gray-500'>Lucru Pozitia</p>
      </div>
    </div>
  );
};

const Post: React.FC = () => {
  return (
    <div className='card'>
      <div className='flex justify-between items-center'>
        <User />
        <EllipsisVerticalIcon className='h-[34px] cursor-pointer text-gray-500' />
      </div>
      <p className='font-bold my-[15px]'>Post title</p>
      <div className='flex justify-center'>
        <img
          src={DevImg}
          alt='post-img'
          className='rounded-[18px] align-middle'
        />
      </div>
      <div className='flex items-center justify-between text-gray-500 my-[15px]'>
        <div className='flex items-center space-x-2'>
          <HandThumbUpIcon className='h-[25px]' />
          <ChatBubbleOvalLeftIcon className='h-[25px]' />
          <ShareIcon className='h-[25px]' />
        </div>
        <BookmarkIcon className='h-[25px]' />
      </div>
      <div className='bg-gray-100 rounded-[18px] py-[8px] px-[12px]'>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
