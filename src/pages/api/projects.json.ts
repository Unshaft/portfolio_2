import { getCollection } from 'astro:content';

export async function GET() {
  const allProjects = await getCollection('projects');

  const result = allProjects.map((p) => ({
    slug: p.slug,
    locale: p.data.locale,
    translationOf: p.data.translationOf || null,
  }));

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
