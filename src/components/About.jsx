import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RiveAnimation from './RiveAnimation';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const riveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, {
        y: 100,
        opacity: 0
      });

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.set(riveRef.current, {
        x: 100,
        opacity: 0
      });

      gsap.to(riveRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section about" id="sobre-mi">
      <div className="section-number">01. SOBRE MI</div>
      <div className="about-container">
        <div ref={contentRef} className="section-content">
          <p className="about-text">
            Ingeniero Informático Junior con más de 2 años de experiencia 
            construyendo aplicaciones web, herramientas y plataformas internas. 
            Me preocupo por el código limpio, interfaces claras y enviar cosas que 
            perduren. Actualmente basado en Huacho, Perú, disponible para trabajo 
            freelance o colaboración en productos digitales innovadores.
          </p>
        </div>
        
        {/* Animación Rive */}
        <div ref={riveRef} className="about-rive">
          <RiveAnimation 
            src="/animations/5626-11124-planet-loop.riv"
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
