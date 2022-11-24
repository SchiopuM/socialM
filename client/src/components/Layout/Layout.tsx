import React from 'react';

const Layout: React.FC<{ children: any }> = ({ children }) => (
  <div className='px-layout h-[100%] py-8 bg-gray-100'>{children}</div>
);

export default Layout;
