import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaEnvelope, 
  FaGlobe, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Establece el estado inicial de los elementos de contacto
      gsap.set(contentRef.current.children, {
        y: 100,
        opacity: 0
      });

      // Anima los elementos de contacto
      gsap.to(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Anima el footer message
      gsap.from(footerRef.current.children, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section contact" id="contacto">
      <div className="section-number">09. CONTACTO</div>
      <div ref={contentRef} className="contact-content">
        <div className="contact-item">
          <label>
            <FaEnvelope className="contact-label-icon" />
            Email
          </label>
          <a href="mailto:guerraramireznilton@gmail.com">
            guerraramireznilton@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <label>
            <FaWhatsapp className="contact-label-icon" />
            WhatsApp
          </label>
          <a href="https://niltonguerra.dev" target="_blank" rel="noopener noreferrer">
            +51 959272339
          </a>
        </div>
        <div className="contact-item">
          <label>Redes Sociales</label>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/nilthon____/?hl=es-la" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nilthon-guerra-648457285/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/NiltonWar120" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div ref={footerRef} className="footer-message">
        <h2>GRACIAS POR LLEGAR AQUÍ</h2>
        <p className="footer-tagline">Hagamos Algo Grandioso</p>
        <p className="footer-credit">Hecho por Nilton Guerra™</p>
      </div>
    </section>
  );
};

export default Contact;
