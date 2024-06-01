import Link from 'next/link';
import React from 'react';
import Section from '../Section';

const LastPosts = async () => {
  const postsErr = undefined;
  const posts: any[] = [
    {
      slug: '#',
      title: 'JavaScript reduce() Metodu',
      description:
        'JavaScript reduce() metodunun kullanımı, avantajları ve gerçek dünya örnekleri.',
    },
    {
      slug: '#',
      title: 'CSS Transform ile Ayna Efekti Oluşturma',
      description:
        'CSS transform özelliğini kullanarak web tasarımında ayna efekti oluşturmayı öğrenin.',
    },
    {
      slug: '#',
      title: 'JavaScript map() Metodu',
      description:
        'JavaScript map() metodunu kullanarak dizileri dönüştürmek ve verileri işlemek için güçlü bir araç keşfedin.',
    },
    {
      slug: '#',
      title:
        'Three.js ile 3D Dünyaları Keşfedin: Web Tabanlı 3D Modellerin Gücü',
      description:
        'Three.js ile web sayfalarınızı görsel olarak zenginleştirin! 3D modeller ve animasyonlarla etkileyici web deneyimleri oluşturun.',
    },
    {
      slug: '#',
      title: 'Modern JavaScript Araçları ve Kütüphaneleri',
      description:
        'Web geliştiriciler için en iyi JavaScript araçları ve kütüphaneleri.',
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
                href={post.slug}
                className="w-full px-4 py-2 rounded border box-border hover:border-slate-300 group"
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
