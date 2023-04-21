import React from 'react';
import AktualityPageCard from '~/components/AktualityPageCard';
import { Aktuality } from '~/texts/Aktuality';

function AktualityPage() {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="flex text-2xl">Aktuality</h1>
      {Aktuality.map((aktualita, index) => (
        <AktualityPageCard key={index} title={aktualita.title} text={aktualita.preview_text} slug={aktualita.slug} />
      ))}
    </div>
  );
}

export default AktualityPage;
