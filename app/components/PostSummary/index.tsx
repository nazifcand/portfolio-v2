'use client';
import Image from 'next/image';
import React from 'react';

const PostSummary = () => {
  return (
    <section className="border-b border-b-slate-200 pb-8">
      <Image
        loader={() => '/post-thumbnail.png'}
        src="/post-thumbnail.png"
        alt="JavaScript reduce() Metodu"
        width={1280}
        height={720}
        className="aspect-video rounded-lg"
        unoptimized
      />
      <h1 className="text-4xl font-bold text-black mt-4">
        JavaScript reduce() Metodu
      </h1>
      <span className="text-slate-600 text-lg mt-2 inline-block">
        JavaScript reduce() metodunun kullanımı, avantajları ve gerçek dünya
        örnekleri.
      </span>
    </section>
  );
};

export default PostSummary;
