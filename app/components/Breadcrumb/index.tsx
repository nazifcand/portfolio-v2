import Link from 'next/link';
import Image from 'next/image';
import React, { FC, Fragment } from 'react';
import classNames from 'classnames';

interface IBreadcrumb {
  breadcrumbs?: { to: string; label: string }[];
}

const Breadcrumb: FC<IBreadcrumb> = ({ breadcrumbs = [] }) => {
  return (
    <div className="flex items-center gap-1.5 bg-slate-100 py-2 px-3 rounded-lg border border-slate-200 box-border">
      <Link href="/">
        <Image
          src="/me.jpg"
          width={25}
          height={25}
          alt="Nazif Can DURGUT"
          className="rounded-full"
        />
      </Link>

      {breadcrumbs.map((item, index) => (
        <Fragment key={index}>
          <span className="text-slate-500 text-sm">/</span>
          <Link
            key={index}
            href={item.to}
            className={classNames('text-black font-medium truncate', {
              '!font-semibold': index == breadcrumbs.length - 1,
            })}
          >
            {item.label}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
