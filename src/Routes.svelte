<script>
  import { Route } from "tinro";
  import HomePage from "./HomePage.svelte";
  import TestPage from "./TestPage.svelte";
</script>

<Route path="/">
  <HomePage />
</Route>
<Route path="/test">
  <TestPage />
</Route>
