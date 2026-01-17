// Constantes partagées pour le portfolio

// Couleurs des catégories de projets - utilisées partout
export const categoryStyles = {
  pro: {
    label: { fr: 'Pro', en: 'Pro' },
    color: 'bg-blue-600',
    textColor: 'text-white'
  },
  perso: {
    label: { fr: 'Perso', en: 'Personal' },
    color: 'bg-emerald-600',
    textColor: 'text-white'
  },
  study: {
    label: { fr: 'Étude', en: 'Study' },
    color: 'bg-purple-600',
    textColor: 'text-white'
  }
} as const;

export type CategoryKey = keyof typeof categoryStyles;

// Helper pour obtenir le style d'une catégorie
export function getCategoryStyle(category: string | undefined, lang: 'fr' | 'en' = 'fr') {
  if (!category || !(category in categoryStyles)) return null;
  const style = categoryStyles[category as CategoryKey];
  return {
    label: style.label[lang],
    color: style.color,
    textColor: style.textColor,
    classes: `${style.color} ${style.textColor}`
  };
}
