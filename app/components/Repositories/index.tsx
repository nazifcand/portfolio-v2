import GithubStar from '@/app/icons/GithubStar';
import { fetchRepositories } from '@/app/services/common.service';
import Link from 'next/link';
import React from 'react';
import Section from '../Section';

const Repositories = async () => {
  const [repositoriesErr, repositories] = await fetchRepositories();

  return (
    <Section
      title="Starred Repositories"
      link="https://github.com/nazifcand?tab=repositories"
    >
      {repositoriesErr ? (
        '-'
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          {repositories.slice(0, 10).map((rep: any, index: number) => (
            <Link
              key={index}
              href={rep.clone_url}
              className="w-full px-4 py-2 rounded border box-border hover:border-slate-300"
              target="_blank"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-black font-semibold">{rep.name}</h4>
                <span className="text-sm inline-flex items-center gap-1">
                  <strong className="font-semibold">
                    {rep.stargazers_count}
                  </strong>
                  <span className="text-purple-500">
                    <GithubStar />
                  </span>
                </span>
              </div>
              <p className="line-clamp-2 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                repellat quia excepturi cupiditate possimus accusamus, deleniti
                commodi minus distinctio ut molestias tenetur culpa laborum.
                Obcaecati autem deleniti harum consequuntur.
              </p>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Repositories;
