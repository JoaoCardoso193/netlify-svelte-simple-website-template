<script>
  let { children } = $props();
</script>

{@render children()}

<style>
  :global(html) {
    background:
      radial-gradient(circle at top, rgba(255, 86, 53, 0.16), transparent 32%),
      linear-gradient(180deg, #f5f1e8 0%, #efe6d7 100%);
  }

  :global(body) {
    margin: 0;
    min-height: 100vh;
    color: #1e1c19;
    font-family:
      "Iowan Old Style", "Palatino Linotype", "URW Palladio L", Georgia, serif;
  }

  :global(a) {
    color: inherit;
  }
</style>
