import React from 'react';

const Layout: React.FC<{ children: any }> = ({ children }) => (
  <div className='px-layout h-[100%] pb-8 pt-[7rem] bg-gray-100'>
    {children}
  </div>
);

export default Layout;
