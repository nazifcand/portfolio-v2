import Github from '@/app/icons/Github';
import Instagram from '@/app/icons/Instagram';
import Linkedin from '@/app/icons/Linkedin';
import X from '@/app/icons/X';
import Youtube from '@/app/icons/Youtube';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SOCIAL_MEDIAS = [
  {
    label: 'Youtube',
    icon: <Youtube />,
    url: 'https://www.youtube.com/channel/UCwBUHoMilKCiwg_P4IOVcKA',
  },
  {
    label: 'LinkedIn',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/nazif-can-durgut-261804181/',
  },
  {
    label: 'X',
    icon: <X />,
    url: 'https://www.x.com/nazifcand',
  },
  {
    label: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/nazifcandurgut',
  },
  {
    label: 'GitHub',
    icon: <Github />,
    url: 'https://github.com/nazifcand',
  },
];

const Me = () => {
  return (
    <>
      <div className="w-full min-h-[100px] flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black font-bold text-4xl">
                Nazif Can DURGUT
              </h1>
              <span>a fullstack developer based in Turkey.</span>
            </div>

            <Image
              src={'/me.jpg'}
              alt="Nazif Can DURGUT"
              width={75}
              height={75}
              className="rounded-xl w-[75px] h-[75px]"
            />
          </div>

          <p className="text-lg mt-4">
            Hello, I&lsquo;m Nazif. I love working with Javascript technologies.
            If you have a project, I would like to help you. You can contact me
            at{' '}
            <Link
              href="mailto:nazifcandurgut@icloud.com"
              className="text-black font-medium hover:text-purple-600"
            >
              nazifcandurgut@icloud.com
            </Link>{' '}
            or through my social media accounts.
          </p>

          <div className="mt-4 flex items-center gap-4">
            {SOCIAL_MEDIAS.map((social, index) => (
              <Link key={index} href={social.url} target="_blank">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
