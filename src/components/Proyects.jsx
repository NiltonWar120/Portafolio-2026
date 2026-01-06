import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project) => {
        if (project) {
          const image = project.querySelector('.project-image');
          const content = project.querySelector('.project-content');
          const tags = project.querySelectorAll('.tech-tag');
          const buttons = project.querySelectorAll('.project-btn');

          // Timeline para animación compleja
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            }
          });

          // Estado inicial
          gsap.set(project, { opacity: 0 });
          gsap.set(image, { scale: 0.8, opacity: 0, rotateY: -15 });
          gsap.set(content, { x: 50, opacity: 0 });
          gsap.set(tags, { y: 20, opacity: 0 });
          gsap.set(buttons, { scale: 0.8, opacity: 0 });

          // Secuencia de animación
          tl.to(project, {
            opacity: 1,
            duration: 0.3
          })
          .to(image, {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'back.out(1.2)'
          }, '-=0.2')
          .to(content, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
          }, '-=0.4')
          .to(tags, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out'
          }, '-=0.3')
          .to(buttons, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(1.5)'
          }, '-=0.2');

          // Hover effects
          const handleMouseEnter = () => {
            gsap.to(image, {
              scale: 1.05,
              rotateY: 5,
              duration: 0.4,
              ease: 'power2.out'
            });
          };

          const handleMouseLeave = () => {
            gsap.to(image, {
              scale: 1,
              rotateY: 0,
              duration: 0.4,
              ease: 'power2.out'
            });
          };

          project.addEventListener('mouseenter', handleMouseEnter);
          project.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "Sistema Web Profit Gym",
      description: "Aplicación web completa para administración de gimnasio con dashboard de métricas en tiempo real, gestión de coaches, personal y membresías. Sistema de autenticación con roles y módulo de reportes con análisis de ingresos.",
      image: "/images/profit-gym.jpeg",
      technologies: ["PHP", "MySQL", "MVC", "JavaScript", "CSS3"],
      github: "https://github.com/NiltonWar120/GYMPRUEBA",
      live: null,
      year: "2025"
    },
    {
      title: "Sitio Web PsicoMotiva",
      description: "Sitio web responsivo para servicios de psicoterapia especializada. Incluye páginas especializadas para cada tipo de terapia, formulario de contacto con validación y diseño optimizado para todos los dispositivos.",
      image: "/images/psicomotivape.jpeg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/NiltonWar120/PsicoMotiva",
      live: "https://psicomotivape.netlify.app/",
      year: "2025"
    },
    {
      title: "Bolsa de Trabajo UNFSC",
      description: "Sistema web para gestión de ofertas laborales y postulaciones de egresados universitarios. Módulos para registro de usuarios, gestión de empresas, publicación de ofertas y control de postulaciones.",
      image: "/images/bolsa-trabajo.jpeg",
      technologies: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/tuusuario/bolsa-trabajo",
      live: null,
      year: "2026-En Desarrollo"
    },
    {
      title: "Página Web IESTP Chancay",
      description: "Mejoramiento de sitio web institucional con diseño moderno de interfaz mediante Figma. Sistema optimizado para mejorar la experiencia de estudiantes y personal administrativo.",
      image: "/images/iestp-chancay.jpeg",
      technologies: ["HTML", "CSS", "Figma", "VSCode","Javascript","Boostrap"],
      github: "https://github.com/NiltonWar120/IESTP-Chancay",
      live: null,
      year: "2025"
    }
  ];

  return (
    <section ref={sectionRef} className="section projects" id="proyectos">
      <div className="section-number">06. PROYECTOS</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={el => projectsRef.current[index] = el}
            className="project-card"
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/1a1a1a/00ff88?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="project-overlay">
                <span className="project-year">{project.year}</span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub />
                    <span>Ver en GitHub</span>
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt />
                    <span>Ver Proyecto</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
