import { useEffect, useState } from 'react';

const sections = ['welcome', 'projects', 'metrics', 'skills'];

const sectionLabels = {
  welcome: 'Accueil',
  projects: 'Projets',
  metrics: 'Chiffres clés',
  skills: 'Compétences',
};

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const container = document.getElementById('scroll-frame');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const container = document.getElementById('scroll-frame');
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-3 h-3 rounded-full transition-all duration-200 p-0 border-0 cursor-pointer ring-offset-2 ring-offset-transparent hover:ring-2 hover:ring-gold/50 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
            activeSection === id ? 'bg-gold scale-125 shadow-md' : 'bg-gray-300 hover:bg-gold'
          }`}
          style={{ touchAction: 'manipulation', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label={`Aller à ${sectionLabels[id] || id}`}
        >
          <span className={`block w-3 h-3 rounded-full ${activeSection === id ? 'bg-gold' : 'bg-gray-300'}`} />
        </button>
      ))}
    </div>
  );
}
