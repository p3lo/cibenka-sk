import React from 'react';
import { Aktuality } from '~/texts/Actuality';
import { marked } from 'marked';
import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ params }: LoaderArgs) => {
  // invariant(params.slug, `params.slug is required`);

  // const post = await getPost(params.slug);
  // invariant(post, `Post not found: ${params.slug}`);

  const html = marked(Aktuality[0].markdown_text);
  return json({ html });
};

function AktualityPage() {
  const { html } = useLoaderData<typeof loader>();
  return (
    <div className="mx-2 my-10 md:mx-[15%] flex flex-col">
      <h1 className="flex mb-10 text-2xl">Aktuality</h1>
      <div className="flex items-center justify-center">
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}

export default AktualityPage;
