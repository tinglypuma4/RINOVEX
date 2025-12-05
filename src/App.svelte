<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import Home from './lib/pages/Home.svelte';
</script>

<!-- Fondo fijo con gradiente animado -->
<div class="fixed inset-0 bg-gradient-animated z-0">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle, rgba(95, 66, 156, 0.15) 1px, transparent 1px); background-size: 40px 40px;"></div>
</div>

<!-- Navbar -->
<Navbar />

<!-- Contenido -->
<div class="relative z-10">
  <Home />
</div>

<style>
  .bg-gradient-animated {
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>