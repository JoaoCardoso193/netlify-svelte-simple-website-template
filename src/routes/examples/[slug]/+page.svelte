<script>
  let { data } = $props();
</script>

<h1>Dynamic Page</h1>
<p>This is a dynamic example page.</p>
<p>Current slug: <strong>{data.slug}</strong></p>
<p><a href="/">Home</a></p>
