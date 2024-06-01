import React from 'react';
import Me from '../components/Me';
import LastPosts from '../components/LastPosts';
import Repositories from '../components/Repositories';
import YoutubeVideos from '../components/YoutubeVideos';

export const metadata = {
  title: 'Nazif Can DURGUT',
};

const Home = async () => {
  return (
    <div className="container mt-12 flex flex-col gap-12 pb-48">
      <Me />
      <YoutubeVideos />
      <LastPosts />
      <Repositories />
    </div>
  );
};

export default Home;
