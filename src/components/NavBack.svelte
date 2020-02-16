<script>
  import { Link } from 'svelte-routing';
</script>

<style>
  .navBack {
    border-block-end: 1px solid hsl(var(--fg-offset));
    height: 2rem;
    margin-block-end: 1rem;
  }

  .navBack a {
    color: hsl(var(--fg));
    text-decoration: none;
  }
</style>

<header class="navBack">
  <Link to="/">‹ Back</Link>
</header>
