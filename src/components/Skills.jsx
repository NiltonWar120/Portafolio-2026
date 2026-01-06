import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiAmazonwebservices,
  SiOpenai,
  SiPython,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiOracle,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaCode,
  FaUsers,
  FaBug,
  FaPencilAlt,
  FaCheckCircle,
  FaLightbulb,
  FaVial,
  FaJava,
  FaDatabase
} from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(skillsRef.current, {
        scale: 0.8,
        opacity: 0,
      });

      gsap.to(skillsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skills = [
    // Frontend
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: SiPython },
    { name: 'C#', icon: SiDotnet },
    { name: '.NET', icon: SiDotnet },
    { name: 'PHP', icon: SiPhp },
    { name: 'Laravel', icon: SiLaravel },
    
    // Mobile
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Dart', icon: SiDart },
    
    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'SQL Server', icon: FaDatabase },
    { name: 'Oracle', icon: SiOracle },
    
    // Tools & Others
    { name: 'Git', icon: SiGit },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'AI', icon: SiOpenai },
    
    // Soft Skills (en español)
    { name: 'Diseño de sistemas', icon: FaCode },
    { name: 'Redacción técnica', icon: FaPencilAlt },
    { name: 'Revisión de código', icon: FaCheckCircle },
    { name: 'Optimización de rendimiento', icon: MdSpeed },
    { name: 'Pensamiento de producto', icon: FaLightbulb },
    { name: 'Pruebas de software', icon: FaVial },
    { name: 'Depuración', icon: FaBug },
    { name: 'Colaboración remota', icon: FaUsers }
  ];

  return (
    <section ref={sectionRef} className="section skills" id="skills">
      <div className="section-number">03. SKILLS</div>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="skill-tag"
            >
              <span className="skill-icon">
                <IconComponent />
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
