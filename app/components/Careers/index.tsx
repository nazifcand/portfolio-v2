// @ts-nocheck
'use client';
import React from 'react';
import Section from '../Section';
import { CAREERS, TECH_IMAGES } from '@/constants';
import Image from 'next/image';

const Careers = () => {
  return (
    <Section title="Careers">
      <div className="w-full min-h-[400px] pl-16 pt-8 box-border relative flex flex-col gap-4">
        <div className="w-[1px] h-full absolute left-8 top-0 bg-slate-200"></div>

        {CAREERS.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-lg border hover:border-slate-300 p-4 box-border relative group cursor-pointer flex flex-col"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-slate-200 group-hover:bg-slate-300 absolute top-1/2 -left-[39px] -translate-y-1/2"></div>
            <strong className="text-lg font-semibold text-slate-700">
              {item.company}
            </strong>
            <span className="text-sm mt-1">
              <span>{item.location}</span> |{' '}
              <span>
                {item.start} - {item.end}
              </span>{' '}
              | <span>{item.type}</span>
            </span>
            <p className="mt-2 w-full md:max-w-[75%]">{item.summary}</p>
            <div className="flex items-center flex-wrap gap-2 mt-4 grayscale-[25%] hover:grayscale-0">
              {item.techs.map((i: keyof typeof TECH_IMAGES, iIndex) => (
                <Image
                  key={iIndex}
                  loader={() => TECH_IMAGES[i].image}
                  src={TECH_IMAGES[i].image}
                  alt={i}
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Careers;
