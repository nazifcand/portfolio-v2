import React from 'react';
import Me from '../components/Me';
import LastPosts from '../components/LastPosts';
import Repositories from '../components/Repositories';
import YoutubeVideos from '../components/YoutubeVideos';
import Careers from '../components/Careers';

export const metadata = {
  title: 'Nazif Can DURGUT',
};

const Home = async () => {
  return (
    <div className="container mt-4 flex flex-col gap-12 pb-48 md:mt-12">
      <Me />
      <Careers />
      <YoutubeVideos />
      {/* <LastPosts /> */}
      <Repositories />
    </div>
  );
};

export default Home;
