'use client';
import Image from 'next/image';
import React, { FC } from 'react';

interface IPostSummary {
  image: string;
  title: string;
  summary: string;
}

const PostSummary: FC<IPostSummary> = ({ title, summary, image }) => {
  return (
    <section className="border-b border-b-slate-200 pb-8">
      <Image
        loader={() => image}
        src={image}
        alt={title}
        width={1280}
        height={720}
        className="aspect-video rounded-lg"
        unoptimized
      />
      <h1 className="text-4xl font-bold text-black mt-4">{title}</h1>
      <span className="text-slate-600 text-lg mt-2 inline-block">
        {summary}
      </span>
    </section>
  );
};

export default PostSummary;
