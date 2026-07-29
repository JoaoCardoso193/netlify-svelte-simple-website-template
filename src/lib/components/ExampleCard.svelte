<script>
  let { title, description } = $props();
</script>

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<style>
  .card {
    padding: 1rem;
    border: 1px solid #d8d0c3;
    border-radius: 0.75rem;
    background: #fffdf9;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: #5b564e;
    line-height: 1.5;
  }
</style>
