import { Link } from '@remix-run/react';
import React from 'react';

function AktualityPageCard({ title, text, slug }: { title: string; text: string; slug: string }) {
  return (
    <Link to={`/aktuality/${slug}`} className="flex flex-col flex-1 w-full p-3 space-y-3 border shadow">
      <h1 className="flex text-xl font-semibold">{title}</h1>
      <p className="px-2 text-sm">{text}</p>
    </Link>
  );
}

export default AktualityPageCard;
