import { Outlet } from '@remix-run/react';
import React from 'react';

function PodlaOdvetviaPravoLayout() {
  return (
    <div className="mx-2 my-10 md:mx-[15%] flex flex-col">
      <Outlet />
    </div>
  );
}

export default PodlaOdvetviaPravoLayout;
