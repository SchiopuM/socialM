import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <div className='h-[200vh]'>
    <Navbar />
    <Layout>{'tes'}</Layout>
  </div>
);

export default App;
