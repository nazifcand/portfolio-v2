'use client';
import Breadcrumb from '@/app/components/Breadcrumb';
import PostSummary from '@/app/components/PostSummary';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

const POSTS = {
  'task-management-app': {
    title: 'Task Management App',
    slug: 'task-management-app',
    summary:
      'React, NestJS ve PostgreSQL kullanarak geliştirdiğim fullstack task management uygulaması.',
    image:
      'https://placehold.co/800x450/EEE/31343C.jpg?text=Task%20Management%20App',
    tags: ['javascript', 'typescript', 'react', 'postgresql', 'nestjs'],
    content: `<p>
          Uzun zamandır fullstack bir uygulama geliştirme fikri vardı. Bu fikri
          hayata geçirmek için birkaç farklı teknolojiyi bir araya getirerek bir
          uygulama geliştirmeye karar verdim. Bu uygulama, task management
          uygulaması olacak ve kullanıcılar, uygulama üzerinden
          task&lsquo;larını oluşturabilecek, güncelleyebilecek ve
          silebilecekler.
        </p>

        <h3 style="font-weight:600; margin-top:16px;">Frontend Repo:</h3>
        <a
          style="padding:4px 12px;color:rgb(168, 85, 247);background-color:rgba(168, 85, 247,.25);border-radius:2px;"
          href="https://github.com/nazifcand/task-management-frontend"
          target="_blank"
        >
          https://github.com/nazifcand/task-management-frontend
        </a>

        <h3 style="font-weight:600; margin-top:16px;">Backend Repo:</h3>
        <a
          style="padding:4px 12px;color:rgb(168, 85, 247);background-color:rgba(168, 85, 247,.25);border-radius:2px;"
          href="https://github.com/nazifcand/task-management-backend"
          target="_blank"
        >
          https://github.com/nazifcand/task-management-backend
        </a>`,
  },
};

interface IPostDetail {
  params: {
    postId: keyof typeof POSTS;
  };
}

const PostDetail: FC<IPostDetail> = ({ params }) => {
  const { postId } = params;
  const router = useRouter();

  useEffect(() => {
    if (!POSTS[postId]) {
      return router.push('/');
    }
  }, [postId, router]);

  const selectedPost = POSTS[postId];

  return (
    selectedPost && (
      <div className="container mt-4 flex flex-col gap-8 pb-48 md:mt-12">
        <Breadcrumb
          breadcrumbs={[
            { to: '#', label: 'posts' },
            {
              to: `/posts/${selectedPost.slug}`,
              label: selectedPost.title,
            },
          ]}
        />

        <PostSummary
          title={selectedPost.title}
          summary={selectedPost.summary}
          image={selectedPost.image}
        />

        <article
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
        ></article>

        <div className="flex flex-wrap gap-2 mt-4 border-t border-slate-200 pt-8">
          {selectedPost.tags.map((tag, index) => (
            <span
              key={index}
              className="py-1 px-2 box-border rounded text-xs text-slate-600 bg-slate-100 border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default PostDetail;
