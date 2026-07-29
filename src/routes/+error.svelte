<svelte:head>
  <title>Page Not Found</title>
</svelte:head>

<script>
  import { page } from "$app/state";
</script>

<div class="error-page">
  <p class="eyebrow">{page.status}</p>
  <h1>Page not found.</h1>
  <p>
    The page you requested does not exist, or the link points to a route that
    is not defined in this template.
  </p>
  <a href="/">Home</a>
</div>

<style>
  .error-page {
    min-height: 100vh;
    display: grid;
    align-content: center;
    gap: 1rem;
    width: min(100%, 40rem);
    margin: 0 auto;
    padding: 2rem;
  }

  .eyebrow {
    margin: 0;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font:
      600 0.8rem/1.2 "Avenir Next", "Segoe UI", sans-serif;
    color: #9b4d2e;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 0.95;
  }

  p {
    margin: 0;
    color: #5b564e;
    line-height: 1.6;
  }

  a {
    width: fit-content;
    margin-top: 0.5rem;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    text-decoration: none;
    background: #1e1c19;
    color: #fff9ef;
    font:
      600 0.95rem/1.1 "Avenir Next", "Segoe UI", sans-serif;
  }
</style>
