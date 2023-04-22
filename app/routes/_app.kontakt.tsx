import { Turnstile } from '@marsidev/react-turnstile';
import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, Link, useActionData, useLocation } from '@remix-run/react';
import React from 'react';
import { Button } from '~/components/ui/Button';
import { Checkbox } from '~/components/ui/CheckBox';
import { Input } from '~/components/ui/Input';
import { Label } from '~/components/ui/Label';
import { Textarea } from '~/components/ui/TextArea';
import { getMailer } from '~/lib/email.server';

export async function action({ request }: ActionArgs) {
  const cloudflareSecret = process.env.CLOUDFLARE_SECRET;
  const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const formData = await request.formData();
  const token = formData.get('cf-turnstile-response');
  if (token && cloudflareSecret) {
    const body = `secret=${encodeURIComponent(cloudflareSecret?.toString())}&response=${encodeURIComponent(
      token.toString()
    )}`;
    const res = await fetch(endpoint, {
      method: 'POST',
      body,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await res.json();
    if (data && !data.success) {
      return json({ error: true });
    }
  }

  getMailer();
  return json({ error: false });
}

function Kontakt() {
  const data = useActionData<typeof action>();
  const [checked, setChecked] = React.useState(false);
  const [cfStatus, setCfStatus] = React.useState(false);
  let { key } = useLocation();
  function changeChecked() {
    setChecked((prev) => !prev);
  }
  React.useEffect(() => {
    setCfStatus(false);
    setChecked(false);
  }, [key]);
  return (
    <div className="mx-2 my-10 md:mx-[15%] flex flex-col">
      <div className="flex flex-col space-y-5">
        <Link to="/" className="flex items-end justify-end text-xs opacity-50">
          ← Domov
        </Link>
        <div className="flex flex-col text-sm">
          <h2 className="text-2xl font-semibold">Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</h2>
          <p>F. Urbánka 797/14, 020 01 Púchov</p>
          <p>
            Tel.: <a href="tel:+421 940 505 051">+421 940 505 051</a>
          </p>
          <p>
            E-mail: <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
          </p>
        </div>
        <div className="flex flex-col text-sm">
          <h3 className="font-semibold">Fakturačné údaje:</h3>
          <p>Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</p>
          <p>F. Urbánka 797/14, 020 01 Púchov</p>
          <p>IČO: 47254181</p>
          <p>DIČ: 2024064416</p>
          <p>IČ DPH: SK2024064416</p>
          <p>č. účtu: IBAN: SK39 0900 0000 0050 7610 4167</p>
        </div>
        <div className="flex flex-col text-sm">
          <h2 className="text-xl font-semibold">Kontaktný formulár</h2>
          <p className="font-semibold">
            Po vyplnení formulára Vám odpovieme bezplatne na Vašu otázku, ak bude možné na otázku možno jednoducho
            odpovedať. V prípade potreby vyhotovenia zmluvy Vám zašleme informáciu o odmene za prípadné vyhotovenie
            takejto listiny. Následne sa môžete rozhodnúť využijete služby našej advokátskej kancelárie.
          </p>
        </div>
        {data &&
          (data.error ? (
            <p className="font-semibold text-red-500 text-md">Niečo sa pokazilo, skúste poslať správu znova.</p>
          ) : (
            <p className="font-semibold text-green-500 text-md">Vaša správa bola odoslaná.</p>
          ))}
        <Form key={key} method="post" className="flex flex-col space-y-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Vaše meno *</Label>
            <Input type="text" id="name" placeholder="Meno" required />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Váš email *</Label>
            <Input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="predmet">Predmet *</Label>
            <Input type="text" id="predmet" placeholder="Predmet" required />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Vaša správa *</Label>
            <Textarea placeholder="Správa" id="message" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" defaultChecked={false} onCheckedChange={changeChecked} />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Súhlasím so spracovaním osobných údajov
            </label>
          </div>
          <Turnstile siteKey="0x4AAAAAAAELF4hgDHO9jQhV" onSuccess={() => setCfStatus(true)} />
          {cfStatus && (
            <Button type="submit" disabled={!checked}>
              Odoslať
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Kontakt;
