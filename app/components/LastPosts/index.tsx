import Link from 'next/link';
import React from 'react';
import Section from '../Section';

const LastPosts = async () => {
  const postsErr = undefined;
  const posts: any[] = [
    {
      slug: 'task-management-app',
      title: 'Task Management App',
      description:
        'React, NestJS ve PostgreSQL kullanarak geliştirdiğim fullstack task management uygulaması.',
    },
  ];

  return (
    <Section title="Last Posts">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {postsErr
          ? '-'
          : posts.slice(0, 6).map((post: any, index: number) => (
              <Link
                key={index}
                href={`/posts/${post.slug}`}
                className="w-full px-4 py-2 rounded border box-border hover:border-slate-300 group"
                target="_blank"
              >
                <h4 className="text-slate-700 hover:text-black font-semibold line-clamp-1">
                  {post.title}
                </h4>
                <p className="line-clamp-2 text-sm text-slate-600">
                  {post.description}
                </p>
              </Link>
            ))}
      </div>
    </Section>
  );
};

export default LastPosts;
