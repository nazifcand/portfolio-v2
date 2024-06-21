import Breadcrumb from '@/app/components/Breadcrumb';
import PostSummary from '@/app/components/PostSummary';
import React, { FC } from 'react';

const TAGS = ['javascript', 'programlama', 'array', 'dizi', 'reduce', 'web'];

interface IPostDetail {
  params: {
    postId: string;
  };
}

const PostDetail: FC<IPostDetail> = ({ params }) => {
  const { postId } = params;

  return (
    <div className="container mt-4 flex flex-col gap-8 pb-48 md:mt-12">
      <Breadcrumb
        breadcrumbs={[
          { to: '/posts', label: 'posts' },
          {
            to: '/posts/javascript-reduce-metodu',
            label: 'JavaScript reduce() Metodu',
          },
        ]}
      />

      <PostSummary />

      <article className="text-lg">
        <p>
          JavaScript, çok yönlü bir programlama dilidir ve geliştiricilere temiz
          ve etkili kod yazma imkanı sunan zengin bir dizi dizi metod içerir. Bu
          metodlardan biri olan{' '}
          <code className="font-medium text-purple-500 bg-purple-100 py-0.5 px-1 rounded ">
            reduce()
          </code>{' '}
          metodu, esnekliği ile ön plana çıkar. Bu makalede,{' '}
          <code className="font-medium text-purple-500 bg-purple-100 py-0.5 px-1 rounded ">
            reduce()
          </code>{' '}
          metodunun sözdizimi, uygulamaları, en iyi uygulamaları ve gerçek dünya
          örneklerini keşfedeceğiz. Siz bir acemi ya da deneyimli bir
          geliştirici olun,{' '}
          <code className="font-medium text-purple-500 bg-purple-100 py-0.5 px-1 rounded ">
            reduce()
          </code>{' '}
          metodunu anlamak ve kullanmak, kodlama becerilerinizi önemli ölçüde
          artırabilir.
        </p>
      </article>

      <div className="flex flex-wrap gap-2 mt-4 border-t border-slate-200 pt-8">
        {TAGS.map((tag, index) => (
          <span
            key={index}
            className="py-1 px-2 box-border rounded text-xs text-slate-600 bg-slate-100 border border-slate-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
