import { getCollection } from 'astro:content';

export async function GET({ url }: { url: URL }) {
  const lang = url.searchParams.get('lang');
  const slug = url.searchParams.get('slug');
  const translationOf = url.searchParams.get('translationOf');

  console.log('🔎 API received:', { lang, slug, translationOf });
  
  if (!lang || !slug || !translationOf) {
    return new Response(
      JSON.stringify({ error: 'Missing parameters' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  if (!url.searchParams.has('lang')) {
  return new Response(
    JSON.stringify({ error: 'Ignored automatic request' }),
    { status: 204 } // No Content
  );
}


  const allProjects = await getCollection('projects');
  const targetLang = lang === 'fr' ? 'en' : 'fr';

  const match = allProjects.find(
    (p) =>
      p.data.translationOf === translationOf &&
      p.data.locale === targetLang
  );

  const result = match
    ? { slug: match.slug, lang: targetLang }
    : { slug, lang };

  return new Response(
    JSON.stringify(result),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
