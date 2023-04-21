import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { marked } from 'marked';
import React from 'react';
import invariant from 'tiny-invariant';
import { getInfo } from '~/lib/utils';

export const loader = async ({ params }: LoaderArgs) => {
  const post = getInfo('o-nas');
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown_text);
  return json({ html });
};

function ONas() {
  const { html } = useLoaderData<typeof loader>();
  return (
    <div className="mx-2 my-10 md:mx-[15%] flex flex-col">
      <div className="flex flex-col space-y-2">
        <Link to="/" className="flex items-end justify-end text-xs opacity-50">
          ← Domov
        </Link>
        <div
          className="prose max-w-none prose-h1:text-2xl prose-ul:text-sm prose-ol:text-sm prose-h2:text-xl prose-h2:font-semibold prose-h1:font-semibold prose-p:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}

export default ONas;
