import Navigate from '@/app/icons/Navigate';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

interface ISection {
  title: string;
  link?: string;
  children: ReactNode;
}

const Section: FC<ISection> = ({ title, link, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        {link && (
          <Link href={link} target="_blank">
            <Navigate className="mb-2 transition-all duration-300 hover:text-purple-500 hover:translate-x-1 hover:-translate-y-1" />
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default Section;
