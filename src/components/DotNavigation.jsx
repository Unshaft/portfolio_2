import { useEffect, useState } from 'react';

const sections = ['welcome', 'projects', 'metrics', 'skills'];

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
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-4 h-4 rounded-full transition ${
            activeSection === id ? 'bg-gold scale-125 shadow-md' : 'bg-gray-300 hover:bg-gold'
          }`}
          aria-label={`Aller à ${id}`}
        ></button>
      ))}
    </div>
  );
}
