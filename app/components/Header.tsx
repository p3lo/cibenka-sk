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
                      <Link className="hover:bg-slate-50" to="/">
                        Kúpna zmluva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Darovacia zmluva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Vysporiadanie podielového spoluvlastníctva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Návrhy na kataster
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Vecné bremená
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Nájomná zmluva
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Slovenský pozemkový fond (SPF)
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">RODINNÉ PRÁVO</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Návrh na rozvod
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zverenie dieťaťa do starostlivosti pri rozvode
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Výživné
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Vysporiadanie bezpodielového spoluvlastníctva manželov
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">DEDIČSKÉ PRÁVO</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Doživotné právo užívania
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Závet
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Práva opomenutého dediča
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Obnova dedičského konania
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zastúpenie vlastníka
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Slovenský pozemkový fond (SPF)
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">ĎALŠIE SLUŽBY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Elektronické podania na orgány verejnej správy
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zastupovanie pred súdmi
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Vymáhanie pohľadávok
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Založenie občianského združenia a nadácie
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Povolenie na pobyt cudzincov na území SR
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
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
                      <Link className="hover:bg-slate-50" to="/">
                        Založenie spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zmeny pri zakladaní s.r.o.
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zmeny v spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zrušenie spoločnosti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zrušenie spoločnosti bez likvidácie (zlúčenie spoločností, fúzia)
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Konkurz
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Predaj podniku alebo jeho časti
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Virtuálne sídlo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Fúzie/akvizície
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Založenie spoločnosti v EU
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Založenie offshore spoločnosti
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">GDPR A RPVS</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Všeobecné nariadenie na ochranu osobných údajov (GDRP)
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zápis konečného užívateľa výhod do obchodného registra
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Register partnerov verejného sektora, rpvs
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">POHĽADÁVKY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Elektronický platobný rozkaz do 10 dní
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zabezpečenie záväzkov dlžníka
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Uznanie a pristúpenie k dlhu
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Návrh na vykonanie exekúcie
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">OSTATNÉ SLUŽBY</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <Link className="hover:bg-slate-50" to="/">
                        Daňové právo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Stavebné právo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zmluvy o dielo
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
                        Zápis dopravcov do obchodného registra
                      </Link>
                      <Link className="hover:bg-slate-50" to="/">
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
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    OBČIANSKE PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    OBCHODNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    DAŇOVÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    EXEKUČNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    PRACOVNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    DEDIČSKÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    STAVEBNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    KONKURZNÉ PRÁVO
                  </Link>
                  <Link className="font-semibold hover:bg-slate-50" to="/">
                    SPRÁVNE PRÁVO
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
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
