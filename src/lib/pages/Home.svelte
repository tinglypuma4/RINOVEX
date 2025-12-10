<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import './styles/home.css';

  gsap.registerPlugin(ScrollTrigger);

  let showTitle = false;

  onMount(() => {
    const isMobile = window.innerWidth < 768;
    
    // ===================================
    // EFECTO TECNOLÓGICO EN RINOVEX
    // ===================================
    
    setTimeout(() => {
      showTitle = true;
      const title = document.querySelector('.title-main');
      if (title) {
        const text = 'RINOVEX';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        let iterations = 0;
        
        const interval = setInterval(() => {
          title.textContent = text
            .split('')
            .map((letter, index) => {
              if (index < iterations) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
          
          if (iterations >= text.length) {
            clearInterval(interval);
          }
          
          iterations += 1 / 3;
        }, 30);
      }
    }, 500);

    // ===================================
    // ANIMACIONES GSAP
    // ===================================
    
    // Logo flotante
    gsap.to('.logo-main', {
      y: isMobile ? -15 : -25,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Logo de fondo
    gsap.to('.background-logo', {
      y: isMobile ? 100 : 200,
      scale: isMobile ? 1.1 : 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Contenido hero
    gsap.to('.hero-content', {
      y: isMobile ? 80 : 150,
      opacity: 0,
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Círculos decorativos (solo desktop)
    if (!isMobile) {
      gsap.to('.circle-hero-purple', {
        x: 100, y: 80, opacity: 0,
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 2 }
      });

      gsap.to('.circle-hero-cyan', {
        x: -80, y: 60, opacity: 0,
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1.8 }
      });

      gsap.to('.circle-hero-front', {
        x: 150, y: 120, opacity: 0,
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 2.5 }
      });
    }

    // Scroll indicator
    gsap.to('.scroll-indicator', {
      opacity: 0, y: 20,
      scrollTrigger: { trigger: '#home', start: 'top top', end: '20% top', scrub: true }
    });

    // Secciones de servicios
    const sections = [
      { id: '#software', bg: '.bg-text-software', circle: '.circle-software' },
      { id: '#web', bg: '.bg-text-web', circle: '.circle-web' },
      { id: '#marketing', bg: '.bg-text-marketing', circle: '.circle-marketing' },
      { id: '#automatizaciones', bg: '.bg-text-auto', circle: '.circle-auto' },
    ];

    sections.forEach((section) => {
      gsap.fromTo(section.bg, { y: -100, opacity: 0 }, {
        y: 100, opacity: isMobile ? 0.03 : 0.05,
        scrollTrigger: { trigger: section.id, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });

      if (!isMobile) {
        gsap.fromTo(section.circle, { x: -50, y: -50, opacity: 0 }, {
          x: 50, y: 50, opacity: 0.5,
          scrollTrigger: { trigger: section.id, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
        });
      }

      gsap.fromTo(`${section.id} .content-service`, { y: isMobile ? 40 : 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: section.id, start: 'top 70%', end: 'top 40%', toggleActions: 'play none none reverse' }
      });
    });

    if (!isMobile) {
      gsap.utils.toArray('.title-section').forEach((title: any) => {
        gsap.to(title, {
          y: 30,
          scrollTrigger: { trigger: title, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      });
    }

    // Animación flotante en botones
    gsap.to('.btn-gradient', {
      y: -8, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1, stagger: 0.2
    });

    // Hover en botones
    document.querySelectorAll('.btn-gradient').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.1, boxShadow: '0 20px 60px rgba(95, 66, 156, 0.8)', duration: 0.3, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, boxShadow: '0 15px 40px rgba(95, 66, 156, 0.6)', duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });
</script>

<div class="main-container">
  
  <section id="home" class="section-hero">
    <div class="container-centered">
      <div class="background-logo">
        <img src="/src/assets/images/LOGO.png" alt="Background" class="background-logo-img" />
      </div>

      <div class="circle-hero-purple circle-decorative"></div>
      <div class="circle-hero-cyan circle-decorative"></div>
      <div class="circle-hero-front circle-decorative"></div>

      <div class="hero-content">
        <img src="/src/assets/images/LOGO.png" alt="RINOVEX Logo" class="logo-main" />
        <h1 class="title-main" class:show={showTitle}>RINOVEX</h1>
        <p class="subtitle-main">SOFTWARE & INNOVATION</p>
        <button class="btn-gradient">
          <span class="btn-text">SABER MÁS</span>
          <span class="btn-icon">→</span>
        </button>
      </div>

      <div class="scroll-indicator">
        <svg class="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>

  <section id="software" class="section-service bg-purple-overlay">
    <div class="container-centered">
      <div class="bg-text-software text-background">
        <h1 class="text-background-word">SOFTWARE</h1>
      </div>
      <div class="circle-software circle-decorative blur-circle-purple-light"></div>
      <div class="content-service">
        <h1 class="title-section">DESARROLLO</h1>
        <h2 class="title-section-gradient gradient-text-purple-cyan">DE SOFTWARE</h2>
        <p class="description-section">Soluciones personalizadas para tu negocio. Desde aplicaciones de escritorio hasta sistemas empresariales completos.</p>
        <button class="btn-gradient">
          <span class="btn-text">SABER MÁS</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>
  </section>

  <section id="web" class="section-service bg-cyan-overlay">
    <div class="container-centered">
      <div class="bg-text-web text-background text-background-rotated">
        <h1 class="text-background-word text-cyan">WEB</h1>
      </div>
      <div class="circle-web circle-decorative blur-circle-cyan-light circle-web-pos"></div>
      <div class="content-service">
        <h1 class="title-section">DESARROLLO Y</h1>
        <h2 class="title-section-gradient gradient-text-cyan-purple">DISEÑO WEB</h2>
        <p class="description-section">Sitios web modernos, responsivos y optimizados. Convertimos tu visión en experiencias digitales impactantes.</p>
        <button class="btn-gradient">
          <span class="btn-text">SABER MÁS</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>
  </section>

  <section id="marketing" class="section-service bg-purple-overlay">
    <div class="container-centered">
      <div class="bg-text-marketing text-background">
        <h1 class="text-background-word">SOCIAL</h1>
      </div>
      <div class="circle-marketing circle-decorative blur-circle-purple-light circle-marketing-pos"></div>
      <div class="content-service">
        <h1 class="title-section">MARKETING Y</h1>
        <h2 class="title-section-gradient gradient-text-purple-cyan">REDES SOCIALES</h2>
        <p class="description-section">Estrategias digitales que conectan con tu audiencia. Contenido que genera engagement y resultados medibles.</p>
        <button class="btn-gradient">
          <span class="btn-text">SABER MÁS</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>
  </section>

  <section id="automatizaciones" class="section-service bg-cyan-overlay">
    <div class="container-centered">
      <div class="bg-text-auto text-background text-background-rotated-right">
        <h1 class="text-background-word text-cyan text-background-small">AUTOMATIZA</h1>
      </div>
      <div class="circle-auto circle-decorative blur-circle-cyan-light circle-auto-pos"></div>
      <div class="content-service">
        <h1 class="title-section-gradient gradient-text-cyan-purple title-auto">AUTOMATIZACIONES</h1>
        <p class="description-section">Optimiza tus procesos con inteligencia artificial. Automatización que ahorra tiempo y aumenta la productividad.</p>
        <button class="btn-gradient">
          <span class="btn-text">SABER MÁS</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>
  </section>

</div>