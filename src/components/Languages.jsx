import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Languages = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
      const ctx = gsap.context(() => {
      // Establece el estado inicial
      gsap.set(cardsRef.current, {
        y: 60,
        opacity: 0
      });

      // Anima hacia el estado visible
      gsap.to(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const languages = [
    { name: 'Español', level: 'Hablante nativo' },
    { name: 'Ingles', level: 'Intermedio B1' },
    { name: 'Português', level: 'Básico A2' },
  ];

  return (
    <section ref={sectionRef} className="section languages" id="idiomas">
      <div className="section-number">05. IDIOMAS</div>
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="language-card"
          >
            <h3 className="lang-name">{lang.name}</h3>
            <p className="lang-level">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
