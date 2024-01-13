import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import React from 'react';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Aktuality - Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.',
    },
    {
      name: 'description',
      content:
        'Získajte najnovšie informácie z právneho sveta prostredníctvom našej stránky s aktuálnymi správami. Naša advokátska kancelária prináša odborné články a informácie o zmenách v právnych predpisoch, ktoré Vám môžu byť užitočné. Sledujte nás a nezmeškajte žiadne dôležité informácie z oblasti práva.',
    },
  ];
};

function AktualityLayout() {
  return (
    <div className="mx-2 my-10 md:mx-[15%] flex flex-col">
      <Outlet />
    </div>
  );
}

export default AktualityLayout;
