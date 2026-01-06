import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Publications = () => {
  const sectionRef = useRef(null);
  const pubsRef = useRef([]);

useEffect(() => {
    const ctx = gsap.context(() => {
      pubsRef.current.forEach((pub, index) => {
        if (pub) {
          // Establece el estado inicial
          gsap.set(pub, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0
          });

          // Anima hacia el estado visible
          gsap.to(pub, {
            scrollTrigger: {
              trigger: pub,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const publications = [
    {
      title: "How I Built and Launched a Micro SaaS in 30 Days",
      source: "Indie Hackers",
      year: "2024"
    },
    {
      title: "Designing Developer Tools with UX in Mind",
      source: "Smashing Magazine",
      year: "2023"
    },
    {
      title: "The Cost of Overengineering: A Case Study from a Failed Product",
      source: "TechCrunch",
      year: "2022"
    }
  ];

  return (
    <section ref={sectionRef} className="section publications" id="publicaciones">
      <div className="section-number">08. PUBLICATIONS</div>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div 
            key={index}
            ref={el => pubsRef.current[index] = el}
            className="publication-item"
          >
            <h3 className="pub-title">{pub.title}</h3>
            <div className="pub-meta">
              <span className="pub-source">{pub.source}</span>
              <span className="pub-year">• {pub.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
