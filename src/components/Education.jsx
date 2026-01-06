import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de los items de educación
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.set(item, {
            x: -100,
            opacity: 0
          });

          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out'
          });
        }
      });

      // Efecto Parallax en el Avatar 3D
      if (avatarRef.current) {
        gsap.to(avatarRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
          y: 200,
          ease: 'none'
        });

        // Rotación sutil mientras hace scroll
        gsap.to(avatarRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
          rotation: 5,
          ease: 'none'
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const education = [
    {
      period: "2018 – Presente (X Ciclo)",
      institution: "Universidad Nacional José Faustino Sánchez Carrión",
      title: "Ingeniería Informática",
      description: "Cursando el décimo ciclo de la Escuela Profesional de Ingeniería Informática. Formación enfocada en desarrollo web, bases de datos, gestión de proyectos tecnológicos y metodologías ágiles."
    },
    {
      period: "Certificación",
      institution: "Plataforma de Aprendizaje en Línea",
      title: "Desarrollo de Software en Java",
      description: "Certificación en programación orientada a objetos, estructuras de datos y desarrollo de aplicaciones empresariales con Java."
    },
    {
      period: "Certificación",
      institution: "Plataforma de Aprendizaje en Línea",
      title: "Lenguaje de Programación Web",
      description: "Certificación en desarrollo web frontend y backend, incluyendo HTML5, CSS3, JavaScript, PHP y frameworks modernos."
    },
    {
      period: "Certificación",
      institution: "Plataforma de Aprendizaje en Línea",
      title: "Hacking Ético",
      description: "Certificación en seguridad informática, análisis de vulnerabilidades, pruebas de penetración y mejores prácticas de ciberseguridad."
    },
    {
      period: "Certificación",
      institution: "Plataforma de Aprendizaje en Línea",
      title: "Ciencia de Datos 1: Exploratory Data Analysis",
      description: "Certificación en análisis exploratorio de datos, visualización de información y aplicación de técnicas estadísticas para la toma de decisiones basadas en datos."
    }
  ];

  return (
    <section ref={sectionRef} className="section education" id="educacion">
      <div className="section-number">04. EDUCACIÓN</div>

      {/* Avatar 3D con efecto Parallax */}
      <div ref={avatarRef} className="education-avatar">
        <img src="/images/fellso.jpg" alt="3D Avatar" />
      </div>

      <div className="education-list">
        {education.map((edu, index) => (
          <div 
            key={index}
            ref={el => itemsRef.current[index] = el}
            className="education-item"
          >
            <div className="edu-header">
              <div className="edu-period">{edu.period}</div>
              <div className="edu-institution">{edu.institution}</div>
            </div>
            <h3 className="edu-title">{edu.title}</h3>
            <p className="edu-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
