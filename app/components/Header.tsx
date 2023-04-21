import React from 'react';
import { MdEmail, MdPhone, MdFacebook } from 'react-icons/md';
import { Link } from '@remix-run/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/NavMenu';
import logo from '../images/cropped-cibo-2-2.png';

function Header() {
  return (
    <div className="flex flex-col">
      <div className="h-10 mx-2 my-[0.5px] md:mx-[15%] flex justify-between text-xs">
        <div className="flex space-x-5">
          <div className="flex items-center space-x-1">
            <MdPhone />
            <a href="tel:+421 940 505 051">+421 940 505 051</a>
          </div>
          <div className="flex items-center space-x-1">
            <MdEmail />
            <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://www.facebook.com/advokatskakancelariaJUDr.Cibenka/"
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <MdFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="flex w-full border-b shadow drop-shadow-md" />
      <div className="flex items-center justify-center my-5">
        <Link to="/">
          <img alt="Logo" src={logo} />
        </Link>
      </div>
      <div className="mx-2 my-[0.5px] md:mx-[15%] flex flex-col">
        <div className="w-full border-t" />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Služby pre občanov</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-4 lg:w-[700px] xl:w-[900px] 2xl:w-[1100px] text-sm">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">NEHNUTELNOSTI</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/kupna-zmluva">
                        Kúpna zmluva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/darovacia-zmluva">
                        Darovacia zmluva
                      </Link>
                      <Link
                        className="hover:bg-slate-50"
                        to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                      >
                        Vysporiadanie podielového spoluvlastníctva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/navrhy-na-kataster">
                        Návrhy na kataster
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/vecne-bremena">
                        Vecné bremená
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/najomna-zmluva">
                        Nájomná zmluva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/slovensky-pozemkovy-fond">
                        Slovenský pozemkový fond (SPF)
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">RODINNÉ PRÁVO</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/navrh-na-rozvod">
                        Návrh na rozvod
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zverenie-dietata-do-starostlivosti-pri-rozvode">
                        Zverenie dieťaťa do starostlivosti pri rozvode
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/rozsah-vyzivovacej-povinnosti">
                        Výživné
                      </Link>
                      <Link
                        className="hover:bg-slate-50"
                        to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                      >
                        Vysporiadanie bezpodielového spoluvlastníctva manželov
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">DEDIČSKÉ PRÁVO</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/dozivotne-pravo-uzivania">
                        Doživotné právo užívania
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zavet">
                        Závet
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/prava-opomenuteho-dedica">
                        Práva opomenutého dediča
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/obnova-dedicskeho-konania">
                        Obnova dedičského konania
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zastupenie-vlastnika">
                        Zastúpenie vlastníka
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/slovensky-pozemkovy-fond">
                        Slovenský pozemkový fond (SPF)
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">ĎALŠIE SLUŽBY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/elektronicke-podania-na-organy-verejnej-spravy">
                        Elektronické podania na orgány verejnej správy
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zastupovanie-pred-sudmi">
                        Zastupovanie pred súdmi
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/vymahanie-pohladavok">
                        Vymáhanie pohľadávok
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zalozenie-obcianskeho-zdruzenia-a-nadacie">
                        Založenie občianského združenia a nadácie
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/povolenie-na-pobyt-cudzincov-na-uzemi-sr">
                        Povolenie na pobyt cudzincov na území SR
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/pracovne-zmluvy-a-skoncenie-pracovneho-pomeru">
                        Pracovné zmluvy a skončenie pracovného pomeru
                      </Link>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Služby pre podnikateľov</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-4 lg:w-[700px] xl:w-[900px] 2xl:w-[1100px]">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">OBCHODNÉ SPOLOČNOSTI</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/zalozenie-spolocnosti">
                        Založenie spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zmeny-pri-zakladani-sro">
                        Zmeny pri zakladaní s.r.o.
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zmeny-v-spolocnosti">
                        Zmeny v spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zrusenie-spolocnosti">
                        Zrušenie spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zrusenie-spolocnosti-bez-likvidacie">
                        Zrušenie spoločnosti bez likvidácie (zlúčenie spoločností, fúzia)
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/konkurz">
                        Konkurz
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/predaj-podniku-alebo-jeho-casti">
                        Predaj podniku alebo jeho časti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/virtualne-sidlo">
                        Virtuálne sídlo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/fuzie-akvizicie">
                        Fúzie/akvizície
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zalozenie-spolocnosti-v-eu">
                        Založenie spoločnosti v EU
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zalozenie-offshore-spolocnosti">
                        Založenie offshore spoločnosti
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">GDPR A RPVS</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/vseobecne-nariadenie-na-ochranu-osobnych-udajov">
                        Všeobecné nariadenie na ochranu osobných údajov (GDRP)
                      </Link>
                      <Link
                        className="hover:bg-slate-50"
                        to="/sluzby/zapis-konecneho-uzivatela-vyhod-do-obchodneho-registra"
                      >
                        Zápis konečného užívateľa výhod do obchodného registra
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/register-partnerov-verejneho-sektora-rpvs">
                        Register partnerov verejného sektora, rpvs
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">POHĽADÁVKY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/sluzby/elektronicky-platobny-rozkaz-do-10-dni">
                        Elektronický platobný rozkaz do 10 dní
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zabezpecenie-zavazkov-dlznika">
                        Zabezpečenie záväzkov dlžníka
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/uznanie-a-pristupenie-k-dlhu">
                        Uznanie a pristúpenie k dlhu
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/navrh-na-vykonanie-exekucie">
                        Návrh na vykonanie exekúcie
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">OSTATNÉ SLUŽBY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/podla-odvetvia/danove-pravo">
                        Daňové právo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/podla-odvetvia/stavebne-pravo">
                        Stavebné právo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zmluvy-o-dielo">
                        Zmluvy o dielo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/sluzby/zapis-dopravcov-do-obchodneho-registra">
                        Zápis dopravcov do obchodného registra
                      </Link>
                      <Link
                        className="hover:bg-slate-50"
                        to="/sluzby/povolenie-na-pobyt-a-pracovne-povolenie-cudzincov-na-uzemi-sr"
                      >
                        Povolenie na pobyt a pracovné povolenie cudzincov na území SR
                      </Link>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Služby podľa odvetvia</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-4 lg:w-[700px] xl:w-[900px] 2xl:w-[1100px]">
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/obcianske-pravo">
                    OBČIANSKE PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/obchodne-pravo">
                    OBCHODNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/danove-pravo">
                    DAŇOVÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/exekucne-pravo">
                    EXEKUČNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/pracovne-pravo">
                    PRACOVNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/dedicske-pravo">
                    DEDIČSKÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/stavebne-pravo">
                    STAVEBNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/konkurzne-pravo">
                    KONKURZNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/podla-odvetvia/spravne-pravo">
                    SPRÁVNE PRÁVO
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/aktuality" className={navigationMenuTriggerStyle()}>
                Aktuality
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/">
                Kontakt
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-full border-b" />
      </div>
    </div>
  );
}

export default Header;
