import type { V2_MetaFunction } from '@remix-run/react';
import { Outlet } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Cibenka.sk' }];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}
