export function setupLangSwitch(buttonId = 'lang-switch') {
  const langSwitch = document.getElementById(buttonId);
  if (!langSwitch) {
    console.warn('🔁 Lang switch button not found');
    return;
  }

  const pathParts = window.location.pathname.split('/');
  console.log('🧩 Path parts:', pathParts);

  if (pathParts.length >= 4 && (pathParts[1] === 'fr' || pathParts[1] === 'en') && pathParts[2] === 'projects') {
    const currentLang = pathParts[1];
    const currentSlug = pathParts[3];
    const otherLang = currentLang === 'fr' ? 'en' : 'fr';
    const baseSlug = currentSlug.replace(/[_-](fr|en)$/i, '');

    console.log('🌍 Current lang:', currentLang);
    console.log('📂 Section: projects');
    console.log('🔗 Current slug:', currentSlug);
    console.log('🔁 Base translationOf:', baseSlug);

    fetch('/api/projects.json')
      .then(res => res.json())
      .then((projects) => {
        console.log('📦 All projects:', projects);

        const current = projects.find(p => p.slug === currentSlug && p.locale === currentLang);
        console.log('🔎 Current project:', current);

        if (!current || !current.translationOf) {
          console.warn('⚠️ Current project not found or missing translationOf');
          return;
        }

        const translated = projects.find(p =>
          p.translationOf === current.translationOf && p.locale === otherLang
        );

        if (translated) {
          const targetUrl = `/${translated.locale}/projects/${translated.slug}`;
          langSwitch.href = targetUrl;
          console.log('✅ Lang switch href set to:', targetUrl);
        } else {
          console.warn('⚠️ No translated project found');
        }
      })
      .catch(err => {
        console.error('❌ Error fetching project list:', err);
      });
  } else {
    const currentLang = pathParts[1];
    const otherLang = currentLang === 'fr' ? 'en' : 'fr';
    const fallbackPath = window.location.pathname.replace(/^\/(fr|en)/, '');
    const fallbackUrl = `/${otherLang}${fallbackPath}`;
    langSwitch.href = fallbackUrl;
    console.log('🔄 Fallback lang switch href set to:', fallbackUrl);
  }
}
