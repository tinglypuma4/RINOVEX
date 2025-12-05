<script lang="ts">
  import { onMount } from 'svelte';

  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Función para calcular el parallax relativo a cada sección
  const getParallax = (sectionStart: number, speed: number) => {
    return Math.max(0, (scrollY - sectionStart) * speed);
  };
</script>

<div class="relative">
  
  <!-- SECCIÓN 1: RINOVEX -->
  <section id="home" class="section-hero">
    
    <!-- Capa de fondo - movimiento muy lento -->
    <div 
      class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
      style="transform: translateY({scrollY * 0.15}px);"
    >
      <img 
        src="/src/assets/images/LOGO.png" 
        alt="Background" 
        class="w-[500px] h-[500px] blur-[100px]"
      />
    </div>

    <!-- Círculos decorativos con diferentes velocidades -->
    <div 
      class="absolute top-20 left-20 w-40 h-40 bg-purple/40 rounded-full blur-[60px] pointer-events-none"
      style="transform: translate({scrollY * 0.4}px, {scrollY * 0.3}px);"
    ></div>
    
    <div 
      class="absolute bottom-32 right-32 w-48 h-48 bg-cyan/40 rounded-full blur-[60px] pointer-events-none"
      style="transform: translate({-scrollY * 0.35}px, {scrollY * 0.25}px);"
    ></div>

    <!-- Contenido principal - movimiento medio -->
    <div 
      class="relative z-10 text-center px-8"
      style="transform: translateY({scrollY * 0.5}px); opacity: {Math.max(0, 1 - scrollY / 600)};"
    >
      
      <img 
        src="/src/assets/images/LOGO.png" 
        alt="RINOVEX Logo" 
        class="logo-main mb-8"
      />
      
      <h1 class="title-main">
        RINOVEX
      </h1>
      
      <p class="subtitle-main">
        SOFTWARE & INNOVATION
      </p>
      
      <button class="cta-button">
        Saber más
      </button>
    </div>

    <!-- Elementos delanteros - movimiento rápido -->
    <div 
      class="absolute top-8 right-8 w-32 h-32 bg-cyan/30 rounded-full blur-[40px] pointer-events-none"
      style="transform: translate({scrollY * 0.8}px, {scrollY * 0.7}px);"
    ></div>

    <!-- Indicador de scroll -->
    <div 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      style="opacity: {Math.max(0, 1 - scrollY / 300)};"
    >
      <svg class="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>

  <!-- SECCIÓN 2: SOFTWARE -->
  <section id="software" class="section-service bg-purple/5">
    
    <!-- Texto de fondo con parallax -->
    <div 
      class="text-background"
      style="transform: translateY({getParallax(800, 0.15)}px);"
    >
      <h1 class="text-[12rem] font-black text-white">SOFTWARE</h1>
    </div>

    <!-- Círculo decorativo -->
    <div 
      class="absolute top-40 right-40 w-56 h-56 bg-purple/30 rounded-full blur-[60px] pointer-events-none"
      style="transform: translate({getParallax(800, 0.3)}px, {getParallax(800, 0.2)}px);"
    ></div>

    <!-- Contenido con fade-in -->
    <div 
      class="content-service"
      style="transform: translateY({getParallax(800, 0.25)}px); opacity: {Math.min(1, Math.max(0, (scrollY - 600) / 300))};"
    >
      <h1 class="title-section">
        DESARROLLO
      </h1>
      <h2 class="title-section-gradient gradient-purple-cyan">
        DE SOFTWARE
      </h2>
      <p class="description-section">
        Soluciones personalizadas para tu negocio. Desde aplicaciones de escritorio hasta sistemas empresariales completos.
      </p>
      <button class="cta-button gradient-purple-cyan-bg">
        Saber más
      </button>
    </div>
  </section>

  <!-- SECCIÓN 3: WEB -->
  <section id="web" class="section-service bg-cyan/5">
    
    <div 
      class="text-background"
      style="transform: translateY({getParallax(1700, 0.15)}px) rotate(-3deg);"
    >
      <h1 class="text-[12rem] font-black text-cyan">WEB</h1>
    </div>

    <div 
      class="absolute bottom-40 left-40 w-56 h-56 bg-cyan/30 rounded-full blur-[60px] pointer-events-none"
      style="transform: translate({getParallax(1700, 0.3)}px, {-getParallax(1700, 0.2)}px);"
    ></div>

    <div 
      class="content-service"
      style="transform: translateY({getParallax(1700, 0.25)}px); opacity: {Math.min(1, Math.max(0, (scrollY - 1500) / 300))};"
    >
      <h1 class="title-section">
        DESARROLLO Y
      </h1>
      <h2 class="title-section-gradient gradient-cyan-purple">
        DISEÑO WEB
      </h2>
      <p class="description-section">
        Sitios web modernos, responsivos y optimizados. Convertimos tu visión en experiencias digitales impactantes.
      </p>
      <button class="cta-button gradient-cyan-purple-bg">
        Saber más
      </button>
    </div>
  </section>

  <!-- SECCIÓN 4: MARKETING -->
  <section id="marketing" class="section-service bg-purple/5">
    
    <div 
      class="text-background"
      style="transform: translateY({getParallax(2600, 0.15)}px);"
    >
      <h1 class="text-[12rem] font-black text-white">SOCIAL</h1>
    </div>

    <div 
      class="content-service"
      style="transform: translateY({getParallax(2600, 0.25)}px); opacity: {Math.min(1, Math.max(0, (scrollY - 2400) / 300))};"
    >
      <h1 class="title-section">
        MARKETING Y
      </h1>
      <h2 class="title-section-gradient gradient-purple-cyan">
        REDES SOCIALES
      </h2>
      <p class="description-section">
        Estrategias digitales que conectan con tu audiencia. Contenido que genera engagement y resultados medibles.
      </p>
      <button class="cta-button gradient-purple-cyan-bg">
        Saber más
      </button>
    </div>
  </section>

  <!-- SECCIÓN 5: AUTOMATIZACIONES -->
  <section id="automatizaciones" class="section-service bg-cyan/5">
    
    <div 
      class="text-background"
      style="transform: translateY({getParallax(3500, 0.15)}px) rotate(2deg);"
    >
      <h1 class="text-[12rem] font-black text-cyan/80">AUTO</h1>
    </div>

    <div 
      class="content-service"
      style="transform: translateY({getParallax(3500, 0.25)}px); opacity: {Math.min(1, Math.max(0, (scrollY - 3300) / 300))};"
    >
      <h1 class="title-section-gradient gradient-full">
        AUTOMATIZACIONES
      </h1>
      <p class="description-section">
        Optimiza tus procesos con inteligencia artificial. Automatización que ahorra tiempo y aumenta la productividad.
      </p>
      <button class="cta-button gradient-full-bg">
        Saber más
      </button>
    </div>
  </section>

</div>

<style>
  /* Secciones */
  .section-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .section-service {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Logo principal */
  .logo-main {
    width: 320px;
    height: 320px;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.6));
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  /* Tipografía - Hero */
  .title-main {
    font-size: clamp(4rem, 15vw, 11rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1rem;
    line-height: 0.9;
    letter-spacing: -0.05em;
    text-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  .subtitle-main {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.3em;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  /* Tipografía - Secciones */
  .title-section {
    font-size: clamp(2.5rem, 10vw, 7rem);
    font-weight: 900;
    color: white;
    margin-bottom: 0.5rem;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .title-section-gradient {
    font-size: clamp(3rem, 12vw, 8rem);
    font-weight: 900;
    margin-bottom: 2rem;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .description-section {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }

  /* Gradientes */
  .gradient-purple-cyan {
    background: linear-gradient(135deg, #5f429c, #3ab0cb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-cyan-purple {
    background: linear-gradient(135deg, #3ab0cb, #5f429c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-full {
    background: linear-gradient(135deg, #3ab0cb, #5f429c, #3ab0cb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Botones */
  .cta-button {
    padding: 1.25rem 2.5rem;
    background: linear-gradient(135deg, #5f429c, #3ab0cb);
    color: white;
    font-weight: 700;
    font-size: 1.125rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(95, 66, 156, 0.5);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cta-button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 15px 40px rgba(95, 66, 156, 0.7);
  }

  .gradient-purple-cyan-bg {
    background: linear-gradient(135deg, #5f429c, #3ab0cb);
  }

  .gradient-cyan-purple-bg {
    background: linear-gradient(135deg, #3ab0cb, #5f429c);
  }

  .gradient-full-bg {
    background: linear-gradient(135deg, #3ab0cb, #5f429c, #3ab0cb);
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Texto de fondo */
  .text-background {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.08;
    pointer-events: none;
  }

  /* Contenido de servicios */
  .content-service {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Variables de color globales */
  :global(:root) {
    --purple: #5f429c;
    --cyan: #3ab0cb;
  }
</style>