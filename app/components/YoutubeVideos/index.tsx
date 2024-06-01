import { fetchVideos } from '@/app/services/common.service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Section from '../Section';

const YoutubeVideos = async () => {
  const [videosErr, videos] = await fetchVideos();

  return (
    <Section
      title="Youtube Videos"
      link="https://www.youtube.com/@nazifcand/videos"
    >
      {videosErr ? (
        '-'
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {videos.items.map((video: any, index: number) => (
            <Link
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="">
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  width={480}
                  height={270}
                  className="rounded-lg"
                />
              </div>
              <h5 className="text-sm text-black mt-1 font-semibold group-hover:text-purple-500">
                {video.snippet.title.replace('&#39;', "'")}
              </h5>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
};

export default YoutubeVideos;
