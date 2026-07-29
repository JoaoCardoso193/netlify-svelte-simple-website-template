<script>
  import ExampleCard from "$lib/components/ExampleCard.svelte";
</script>

<h1>Examples</h1>
<p>This is a normal page at <code>/examples</code>.</p>

<p><a href="/">Home</a></p>

<ExampleCard
  title="Shared component"
  description="This box comes from src/lib/components/ExampleCard.svelte."
/>

<ul>
  <li><a href="/examples/second-page">/examples/second-page</a></li>
  <li><a href="/examples/alpha">/examples/alpha</a></li>
</ul>
