import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de los items de experiencia
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
            scrub: 1.5, // Suavidad del parallax
          },
          y: 200, // Distancia de movimiento
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

  const experiences = [
    {
      period: "Abril 2025 – Diciembre 2025",
      location: "UNFSC • Huacho, Perú",
      title: "Desarrollador de Sistema Web - Bolsa de Trabajo",
      description: "Diseño y codificación de sistema web para gestión de ofertas laborales y postulaciones de egresados. Desarrollo con Visual Studio (C#) y ASP.NET, implementación de base de datos en SQL Server. Creación de módulos para registro de usuarios, gestión de empresas y control de postulaciones."
    },
    {
      period: "Noviembre 2025 – Diciembre 2025",
      location: "Freelance • Huacho, Perú",
      title: "Desarrollador Web - Sistema Profit Gym",
      description: "Desarrollo de aplicación web completa para administración de gimnasio con PHP, MySQL y arquitectura MVC. Implementación de sistema de autenticación, gestión de personal y coaches, dashboard administrativo con métricas en tiempo real y módulo de reportes con análisis de ingresos."
    },
    {
      period: "Noviembre 2025 – Diciembre 2025",
      location: "Freelance • Huacho, Perú",
      title: "Desarrollador Web - Sitio PsicoMotiva",
      description: "Diseño y desarrollo de sitio web responsivo para servicios de psicoterapia. Implementación de estructura HTML5 semántica, desarrollo de páginas especializadas, integración de formulario de contacto con validación y optimización responsive utilizando CSS3 y JavaScript."
    },
    {
      period: "Septiembre 2025 – Diciembre 2025",
      location: "Edificaciones Hnos. Gutiérrez • Remoto",
      title: "Analista de Datos / Coordinador de Información",
      description: "Gestión y análisis de datos con Microsoft Excel. Creación de informes y dashboards para indicadores clave de desempeño. Automatización del registro de datos con tablas dinámicas y desarrollo de modelos de análisis para optimizar la toma de decisiones."
    },
    {
      period: "Septiembre 2023 – Diciembre 2023",
      location: "AICON Planos • Cruza Blanca, Perú",
      title: "Asistente Técnico en Diseño (AutoCAD)",
      description: "Creación de planos detallados y dibujos técnicos utilizando AutoCAD para proyectos de construcción y arquitectura. Elaboración de informes y documentación técnica profesional."
    }
  ];

  return (
    <section ref={sectionRef} className="section experience" id="experiencia">
      <div className="section-number">02. EXPERIENCIA</div>
      
      {/* Avatar 3D con efecto Parallax */}
      <div ref={avatarRef} className="experience-avatar">
        <img src="/images/head.jpg" alt="3D Avatar" />
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            ref={el => itemsRef.current[index] = el}
            className="experience-item"
          >
            <div className="exp-header">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-location">{exp.location}</div>
            </div>
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
