import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const labelsRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Establece el estado inicial primero
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          textRef.current,
          labelsRef.current,
          actionsRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Luego anima desde ese estado
      tl.to(labelsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
      })
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
          },
          "-=0.6"
        )
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.8"
        )
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.6"
        )
        .to(
          actionsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Función para descargar CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Nilton_Guerra_2026.pdf"; // Ruta del PDF en la carpeta public
    link.download = "CV_Nilton_Guerra_2026.pdf"; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para enviar mensaje a WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = "51959272339"; // Reemplaza con tu número (código país + número sin espacios)
    const message = encodeURIComponent(
      "¡Hola Nilton! Vi tu portafolio y me gustaría ponerme en contacto contigo."
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-content">
        <div ref={labelsRef} className="hero-labels">
          <span className="year-label">2024 2026</span>
          <span className="exp-label">
            2 años de experiencia en desarrollo de software.
          </span>
        </div>
        <h1 ref={titleRef} className="hero-title">
          NILTON
          <br />
          GUERRA
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Ingeniero Informático, Huacho-Perú
        </p>
        <p ref={textRef} className="hero-text">
          YA SEA PROGRAMANDO O ESTUDIANDO, MI NIVEL BUSCA CLARIDAD, CALMA Y UN
          IMPACTO A LARGO PLAZO. CREO QUE LOS BUENOS SISTEMAS SE CONSTRUYEN CON
          INTENCIÓN Y COHERENCIA.
        </p>
        <div ref={actionsRef} className="hero-actions">
          <button className="btn-primary" onClick={handleDownloadCV}>
            <FaDownload /> Descargar CV
          </button>
          <button className="btn-secondary" onClick={handleWhatsApp}>
            <FaWhatsapp /> Contacto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;




