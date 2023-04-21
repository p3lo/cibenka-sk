import { Link } from '@remix-run/react';
import React from 'react';

function InfoCard({ image, title, text, link }: { image: string; title: string; text: string; link: string }) {
  return (
    <div className="flex flex-col flex-1 w-full space-y-3 ">
      <img src={image} alt={title} />
      <Link className="text-2xl font-semibold" to={link}>
        {title}
      </Link>

      <p className="text-sm">{text}</p>
      <Link className="text-xs text-red-500" to={link}>
        Viac
      </Link>
    </div>
  );
}

export default InfoCard;
