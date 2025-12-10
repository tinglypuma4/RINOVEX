<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import Home from './lib/pages/Home.svelte';
</script>

<!-- Fondo fijo con gradiente animado -->
<div class="background-fixed">
  <div class="background-overlay"></div>
  <div class="background-pattern"></div>
</div>

<!-- Navbar -->
<Navbar />

<!-- Contenido -->
<div class="content-wrapper">
  <Home />
</div>

<style>
  /* Fondo fijo */
  .background-fixed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  /* Overlay oscuro */
  .background-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  /* Patrón de puntos */
  .background-pattern {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    background-image: radial-gradient(
      circle,
      rgba(95, 66, 156, 0.15) 1px,
      transparent 1px
    );
    background-size: 40px 40px;
  }

  /* Contenedor de contenido */
  .content-wrapper {
    position: relative;
    z-index: 10;
  }

  /* Animación del gradiente */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Reset global para evitar scroll horizontal */
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>