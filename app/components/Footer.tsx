import { Link } from '@remix-run/react';
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Map } from './map.client';
import { ClientOnly } from 'remix-utils';

function Footer() {
  const mapHeight = '150px';
  return (
    <div className="grow bg-slate-100">
      <div className="h-52 mx-2 my-10 md:mx-[15%] flex ">
        <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 justify-evenly">
          <div className="flex flex-col mb-8 space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">K</span>ontakt
            </h3>
            <div className="flex flex-col space-y-4 text-xs">
              <p className="font-semibold">Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</p>
              <p>F. Urbánka 797/14, 020 01 Púchov</p>
              <div className="flex items-center space-x-1">
                <MdPhone />
                <a href="tel:+421 940 505 051">+421 940 505 051</a>
              </div>
              <div className="flex items-center space-x-1">
                <MdEmail />
                <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">R</span>ýchle odkazy
            </h3>
            <div className="flex flex-col space-y-4 text-sm">
              <Link to="/podla-odvetvia/obcianske-pravo">Občianske právo</Link>
              <Link to="/sluzby/vymahanie-pohladavok">Vymáhanie pohľadávok</Link>
              <Link to="/sluzby/sluzby-pre-firmy">Služby pre firmy</Link>
              <Link to="/sluzby/sluzby-pre-obcanov">Služby pre občanov</Link>
            </div>
            <div className="flex flex-col space-y-2"></div>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">K</span>de nás nájdete
            </h3>
            <div className="flex flex-col space-y-2">
              <ClientOnly fallback={<div id="skeleton" style={{ height: mapHeight, background: '#d1d1d1' }} />}>
                {() => <Map height={mapHeight} />}
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
