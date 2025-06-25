<!-- <script>
  // Optional: adjust width/height
</script>

<iframe
  src="/game/index.html"
  width="100%"
  height="100%"
  style="border: none; position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;"
/> -->

<!-- <script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/game/index.js';
    script.async = true;

    script.onload = () => {
      // index.js defines a global `Module` function
      // You can override config here
      const Module = window.Module || {};
      Module.canvas = document.getElementById('game-canvas');

      window.Module = Module;
    };

    document.body.appendChild(script);
  });
</script>

<canvas
  id="game-canvas"
  width="800"
  height="600"
  style="display: block; width: 100vw; height: 100vh;"
/> -->

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/game/index.js';
    script.async = true;

    script.onload = () => {
      const Module = window.Module || {};
      Module.canvas = document.getElementById('game-canvas');
      window.Module = Module;
    };

    document.body.appendChild(script);
  });
</script>

<canvas
  id="game-canvas"
  width="800"
  height="600"
  style="display: block; width: 100vw; height: 100vh;"
/>
