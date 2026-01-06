import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBars, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Asegúrate de que el navbar esté visible inmediatamente
    gsap.set(navRef.current, {
      y: 0,
      opacity: 1
    });

    // Luego anima desde arriba (opcional)
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    });
  }, { scope: navRef });

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <span className="name">NILTON GUERRA</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-right">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#educacion">Educación</a>
          <a href="#skills">Skills</a>
          <a href="#contacto">Contacto</a>
          <button className="status-btn">
            <span className="status-dot"></span>
            Disponible Para Trabajar
          </button>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#educacion" onClick={closeMenu}>Educación</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <button className="status-btn-mobile">
            <span className="status-dot"></span>
            Disponible Para Trabajar
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;

