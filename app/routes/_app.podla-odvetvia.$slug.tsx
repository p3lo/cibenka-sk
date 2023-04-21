import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react';
import { marked } from 'marked';
import React from 'react';
import invariant from 'tiny-invariant';
import { getPodlaOdvetvia } from '~/lib/utils';

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.slug) return redirect('/');
  const post = getPodlaOdvetvia(params.slug!);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown_text);
  return json({ html });
};

function PodlaOdvetvia() {
  const { html } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col space-y-2">
      <Link to="/" className="flex items-end justify-end text-xs opacity-50">
        ← Domov
      </Link>
      <div
        className="prose max-w-none prose-ul:text-sm prose-h1:text-2xl prose-h2:text-xl prose-h2:font-semibold prose-h1:font-semibold prose-p:text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export default PodlaOdvetvia;

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  let errorMessage = 'Táto stránka neexistuje.';

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Uh oh ...</h1>
      <p>Niečo sa pokazilo.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}
