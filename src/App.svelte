<script>
  import { Router, Route } from 'svelte-routing';
  import Home from '../routes/Home.svelte';
  import Film from '../routes/Film.svelte';
  import Person from '../routes/Person.svelte';
  import Studio from '../routes/Studio.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/film/:id" component={Film} />
  <Route path="/person/:id" component={Person} />
  <Route path="/studio/:id" component={Studio} />
</Router>
