<svelte:head>
  <title>SvelteKit Netlify Template</title>
  <meta
    name="description"
    content="A minimal SvelteKit starter configured for static Netlify deployments."
  />
</svelte:head>

<script>
  const features = [
    "Svelte 5 with SvelteKit 2",
    "Vite-based development and production builds",
    "Static output configured for Netlify",
    "Prerendering enabled by default",
  ];
</script>

<div class="page-shell">
  <main class="hero">
    <p class="eyebrow">Base Template</p>
    <h1>SvelteKit on Netlify, without legacy baggage.</h1>
    <p class="intro">
      Start here for simple marketing sites, docs sites, and small static
      projects that should deploy cleanly on Netlify.
    </p>

    <div class="actions">
      <a class="primary" href="https://kit.svelte.dev/docs/introduction">Read SvelteKit docs</a>
      <a class="secondary" href="https://docs.netlify.com/build/frameworks/framework-setup-guides/sveltekit/">
        Netlify guide
      </a>
    </div>

    <ul class="feature-list">
      {#each features as feature}
        <li>{feature}</li>
      {/each}
    </ul>

    <div class="examples">
      <p>Route examples:</p>
      <ul>
        <li><a href="/test">/test</a></li>
        <li><a href="/examples">/examples</a></li>
        <li><a href="/examples/second-page">/examples/second-page</a></li>
        <li><a href="/examples/alpha">/examples/alpha</a></li>
      </ul>
    </div>
  </main>
</div>

<style>
  .page-shell {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  .hero {
    width: min(100%, 56rem);
    padding: 3rem;
    border: 1px solid rgba(30, 28, 25, 0.08);
    border-radius: 2rem;
    background: rgba(255, 252, 246, 0.78);
    box-shadow: 0 1.5rem 5rem rgba(76, 48, 18, 0.08);
    backdrop-filter: blur(10px);
  }

  .eyebrow {
    margin: 0 0 1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font: 600 0.8rem/1.2 "Avenir Next", "Segoe UI", sans-serif;
    color: #9b4d2e;
  }

  h1 {
    margin: 0;
    max-width: 12ch;
    font-size: clamp(3rem, 8vw, 5.8rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
  }

  .intro {
    max-width: 42rem;
    margin: 1.5rem 0 0;
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.6;
    color: rgba(30, 28, 25, 0.78);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    font:
      600 0.95rem/1.1 "Avenir Next", "Segoe UI", sans-serif;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background-color 160ms ease;
  }

  .actions a:hover {
    transform: translateY(-1px);
  }

  .primary {
    background: #1e1c19;
    color: #fff9ef;
    box-shadow: 0 0.8rem 2rem rgba(30, 28, 25, 0.18);
  }

  .secondary {
    border: 1px solid rgba(30, 28, 25, 0.14);
    background: rgba(255, 255, 255, 0.45);
  }

  .feature-list {
    display: grid;
    gap: 0.85rem;
    margin: 2.5rem 0 0;
    padding: 0;
    list-style: none;
    font:
      500 0.98rem/1.4 "Avenir Next", "Segoe UI", sans-serif;
  }

  .feature-list li {
    padding: 1rem 1.1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(30, 28, 25, 0.08);
  }

  .examples {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(30, 28, 25, 0.08);
  }

  .examples p {
    margin: 0 0 0.75rem;
    font:
      600 0.95rem/1.2 "Avenir Next", "Segoe UI", sans-serif;
  }

  .examples ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  .examples li + li {
    margin-top: 0.45rem;
  }

  @media (max-width: 640px) {
    .page-shell {
      padding: 1rem;
    }

    .hero {
      padding: 1.5rem;
      border-radius: 1.5rem;
    }
  }
</style>
