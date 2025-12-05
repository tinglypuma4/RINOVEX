<script lang="ts">
  import { onMount } from 'svelte';

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
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="navbar-container">
    <div class="navbar-content">
      
      <!-- Logo -->
      <div class="logo-container">
        <a href="#home" on:click={(e) => handleNavClick(e, '#home')} class="logo-link">
          <img
            src="/src/assets/images/LOGO.png"
            alt="RINOVEX Logo"
            class="logo-img"
          />
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
              {item.label}
            </a>
          </li>
        {/each}
      </ul>

      <!-- CTA Button (Desktop) -->
      <div class="cta-container">
        <button class="cta-btn">
          Contacto
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
          Contacto
        </button>
      </div>
    </div>
  </div>
</nav>

<style>
  /* Navbar principal */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
  }

  .navbar.scrolled {
    background: rgba(15, 12, 41, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    transition: height 0.3s ease;
  }

  .navbar.scrolled .navbar-content {
    height: 70px;
  }

  /* Logo */
  .logo-container {
    flex-shrink: 0;
    z-index: 1001;
  }

  .logo-link {
    display: flex;
    align-items: center;
  }

  .logo-img {
    height: 70px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 12px rgba(95, 66, 156, 0.4));
    transition: all 0.3s ease;
  }

  .navbar.scrolled .logo-img {
    height: 50px;
  }

  .logo-img:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 6px 16px rgba(95, 66, 156, 0.6));
  }

  /* Desktop Menu */
  .desktop-menu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .desktop-menu {
      display: flex;
    }
  }

  .nav-link {
    position: relative;
    padding: 0.5rem 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #5f429c, #3ab0cb);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: #3ab0cb;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* CTA Button */
  .cta-container {
    display: none;
  }

  @media (min-width: 768px) {
    .cta-container {
      display: block;
    }
  }

  .cta-btn {
    padding: 0.75rem 1.75rem;
    background: linear-gradient(135deg, #5f429c, #3ab0cb);
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(95, 66, 156, 0.4);
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(95, 66, 156, 0.6);
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
  }

  @media (min-width: 768px) {
    .mobile-menu-btn {
      display: none;
    }
  }

  .hamburger {
    position: relative;
    width: 24px;
    height: 18px;
  }

  .hamburger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .hamburger span:nth-child(1) {
    top: 0;
  }

  .hamburger span:nth-child(2) {
    top: 8px;
  }

  .hamburger span:nth-child(3) {
    top: 16px;
  }

  .hamburger.open span:nth-child(1) {
    top: 8px;
    transform: rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    top: 8px;
    transform: rotate(-45deg);
  }

  /* Mobile Menu */
  .mobile-menu {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 12, 41, 0.98);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }

  .mobile-menu.open {
    opacity: 1;
    visibility: visible;
  }

  .mobile-menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 6rem 2rem 2rem;
    gap: 1.5rem;
  }

  .mobile-nav-link {
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
    position: relative;
  }

  .mobile-nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #5f429c, #3ab0cb);
    transition: width 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: #3ab0cb;
  }

  .mobile-nav-link:hover::after {
    width: 100%;
  }

  .mobile-cta-btn {
    margin-top: 2rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #5f429c, #3ab0cb);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(95, 66, 156, 0.5);
    transition: all 0.3s ease;
  }

  .mobile-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(95, 66, 156, 0.7);
  }
</style>