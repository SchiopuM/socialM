import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Post from './components/Post';

const App: React.FC = () => (
  <div className='h-[200vh]'>
    <Navbar />
    <Layout>
      <Post />
    </Layout>
  </div>
);

export default App;
