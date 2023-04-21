import { Link } from '@remix-run/react';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AktualityCard from '~/components/AktualityCard';
import InfoCard from '~/components/InfoCard';
import { Separator } from '~/components/ui/Separator';

function Main() {
  return (
    <div className="flex flex-col w-full space-y-14">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="hidden w-full h-full border-b shadow lg:block"
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center w-full">
            <img alt="1" src="assets/slider1-2.jpg" />
            <div className="absolute w-[60%] h-[50%] top-0 lg:top-[25%] 2xl:top-[30%] bg-stone-600/80">
              <div className="flex items-center justify-center text-slate-100">
                <div className="flex flex-col items-center my-[3%] space-y-3">
                  <h2 className="text-3xl font-bold">Právne služby a právne poraďenstvo</h2>
                  <p className="font-semibold">
                    Sme advokátska kancelária poskytujúca právne služby a právne poradenstvo v oblasti slovenského a
                    českého práva
                  </p>
                  <Link to="/">Čítaj viac</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center w-full">
            <img alt="1" src="assets/slider22-1.jpg" />
            <div className="absolute w-[60%] h-[50%] top-[25%] bg-stone-600/80">
              <div className="flex items-center justify-center text-slate-100">
                <div className="flex flex-col items-center my-[3%] space-y-3">
                  <h2 className="text-3xl font-bold">Založenie spoločnosti</h2>
                  <p className="font-semibold">Pomôžeme Vám so založením spoločnosti</p>
                  <Link to="/">Čítaj viac</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center w-full">
            <img alt="1" src="assets/slider33.jpg" />
            <div className="absolute w-[60%] h-[50%] top-[25%] bg-stone-600/80">
              <div className="flex items-center justify-center text-slate-100">
                <div className="flex flex-col items-center my-[3%] space-y-3">
                  <h2 className="text-3xl font-bold">Pracovné právo</h2>
                  <p className="font-semibold">Podrobné informácie o Novele zákonníka práce</p>
                  <Link to="/">Čítaj viac</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="grid max-w-full grid-cols-2 gap-16 lg:grid-cols-4 mx-2 md:mx-[15%]">
        <InfoCard
          image="assets/obcianske-pravo.jpeg"
          text="Pomáhame občanom s nájomnými zmluvami, darovacími zmluvami, s dedičským konaním, vymáhaním pohľadávok, so zastupovaním v súdnom, ako i exekučnom konaní."
          title="Občianske právo"
          link="/"
        />

        <InfoCard
          image="assets/obchodne-pravo.jpeg"
          text="Zaoberáme sa obchodnoprávnymi zmluvami a nárokmi, ktoré z nich vznikajú, vymáhaním pohľadávok vzniknutých z obchodnoprávnych vzťahov. Pracujeme na zakladaní spoločností, vykonávaní zmien v spoločnostiach, a tiež na ich rušení."
          title="Obchodné právo"
          link="/"
        />

        <InfoCard
          image="assets/rodinne-pravo.jpeg"
          text="Našich klientov zastupujeme pri rozvodoch, pri vyporiadaní majetku po rozvode, v konaniach o úprave pomerov neplnoletých detí pred a po rozvode manželstva, ako i v konaniach týkajúcich sa vyživovacej povinnosti a podobne."
          title="Rodinné právo"
          link="/"
        />

        <InfoCard
          image="assets/nehnutelnosti.jpeg"
          text="Zabezpečujeme kompletný poradenský servis vo veciach prevodu nehnuteľností, pri zriadení vecného bremena a predkupného práva k nehnuteľnostiam, ale i pri realizácii záložného práva."
          title="Nehnuteľnosti"
          link="/"
        />
      </div>

      <div className="flex flex-col w-full h-40 space-y-5 bg-slate-200">
        <h2 className="flex items-center justify-center py-5 text-3xl font-semibold">SLUŽBY PRE FIRMY</h2>
        <div className="flex justify-center space-x-5">
          <Link to="/">Založenie spoločnosti (SRO)</Link>
          <Separator className="bg-black" orientation="vertical" />
          <Link to="/">Založenie živnosti (SZČO)</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="flex items-center justify-center py-2 text-2xl font-semibold">AKTUALITY</h2>
        <Separator className="w-16 mx-auto bg-black" orientation="horizontal" />
      </div>
      <div className="grid max-w-full grid-cols-1 sm:grid-cols-2 gap-16 lg:grid-cols-3 mx-2 md:mx-[15%]">
        <AktualityCard
          image="assets/akt-1.jpeg"
          link="/"
          title="Rozsah vyživovacej povinnosti"
          text="Rozsah vyživovacej povinnosti Základom pre určenie výšky výživného sú odôvodnené potreby oprávneného (ten, kto má nárok na výživné) a schopnosti, možnosti a majetkové..."
        />
        <AktualityCard
          image="assets/akt-2.jpeg"
          link="/"
          title="Dôkazná povinnosť daňového subjektu v daňovej kontrole"
          text="Dôkazná povinnosť daňové subjektu v daňovej kontrole v prípade nadmerného odpočtu DPH V prípade, že firma ako daňový subjekt disponuje..."
        />
        <AktualityCard
          image="assets/akt-3.jpeg"
          link="/"
          title="Nájom priestoru slúžiaceho na podnikanie podľa nového Občianskeho zákoníka v ČR"
          text="Ustanovení o nájmu prostoru sloužíciho k podnikání Ustanovení o nájmu prostoru sloužíciho k podnikání se vztahují na nájem prostoru nebo..."
        />
      </div>
    </div>
  );
}

export default Main;
