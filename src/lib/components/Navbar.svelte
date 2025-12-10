<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import '../pages/styles/navbar.css';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Software', href: '#software' },
    { label: 'Web', href: '#web' },
    { label: 'Marketing', href: '#marketing' },
    { label: 'Automatizaciones', href: '#automatizaciones' }
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  function handleNavClick(e: MouseEvent, href: string) {
    e.preventDefault();
    closeMobileMenu();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);

    // SIN ROTACIÓN DEL LOGO - Solo hover effect con GSAP
    document.querySelectorAll('.logo-link').forEach((logo) => {
      logo.addEventListener('mouseenter', () => {
        gsap.to('.logo-img', {
          scale: 1.08,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
      
      logo.addEventListener('mouseleave', () => {
        gsap.to('.logo-img', {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    // Hover effect en nav links con GSAP
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Animación del botón de contacto
    gsap.to('.cta-btn', {
      boxShadow: '0 8px 30px rgba(95, 66, 156, 0.6)',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });

    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="navbar-container">
    <div class="navbar-content">
      
      <!-- Logo -->
      <div class="logo-container">
        <a href="#home" on:click={(e) => handleNavClick(e, '#home')} class="logo-link">
          <div class="logo-wrapper">
            <img
              src="/src/assets/images/LOGO.png"
              alt="RINOVEX Logo"
              class="logo-img"
            />
            <div class="logo-glow"></div>
          </div>
          <span class="logo-text">RINOVEX</span>
        </a>
      </div>

      <!-- Desktop Menu -->
      <ul class="desktop-menu">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class="nav-link"
              on:click={(e) => handleNavClick(e, item.href)}
            >
              <span class="nav-link-text">{item.label}</span>
              <span class="nav-link-line"></span>
            </a>
          </li>
        {/each}
      </ul>

      <!-- CTA Button (Desktop) -->
      <div class="cta-container">
        <button class="cta-btn">
          <span class="cta-text">Contacto</span>
          <span class="cta-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div class="hamburger" class:open={isMobileMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" class:open={isMobileMenuOpen}>
      <div class="mobile-menu-content">
        {#each navItems as item}
          <a
            href={item.href}
            class="mobile-nav-link"
            on:click={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        {/each}
        <button class="mobile-cta-btn">
          <span>Contacto</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>